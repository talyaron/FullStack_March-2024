import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    ActivityIndicator,
    Alert,
    Platform,
} from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';


type RoomListScreenNavigationProp = StackNavigationProp<any, 'RoomList'>;

const RoomListScreen = ({ navigation }: { navigation: RoomListScreenNavigationProp }) => {
    const [rooms, setRooms] = useState<{ room_id: string; room_name: string; last_update:Date }[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchRooms();
    }, []);

    const fetchRooms = async () => {
        try {
            // Determine the correct URL based on platform
            const baseUrl = Platform.OS === 'android'
                ? 'http://10.0.2.2:3000'
                : 'http://localhost:3000';

            const response = await fetch(`${baseUrl}/rooms`);
            const data = await response.json();
            console.log('Response from server:', data);
            if (data && data.rooms) {
                setRooms(data.rooms);
            } else {
                setRooms([]);
                Alert.alert('Error', 'Could not fetch rooms from server');
            }
        } catch (error) {
            console.error('Error fetching rooms:', error);
            Alert.alert('Error', 'Could not connect to the server');
        } finally {
            setLoading(false);
        }
    };

    const navigateToGlobalChat = () => {
        navigation.navigate('Chat', { roomId: null });
    };

    const navigateToRoom = (roomId: string) => {
        console.log(roomId)
        navigation.navigate('Chat', { roomId });
    };

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#4A90E2" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.globalChatButton}
                onPress={navigateToGlobalChat}
            >
                <Text style={styles.globalChatText}>Join Global Chat</Text>
            </TouchableOpacity>

            <Text style={styles.sectionTitle}>Available Rooms</Text>

            <FlatList
                data={rooms}
                keyExtractor={(item) => item.room_id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.roomItem}
                        onPress={() => navigateToRoom(item.room_id)}
                    >
                        <Text style={styles.roomName}>{item.room_name}</Text>
                      
                    </TouchableOpacity>
                )}
                ListEmptyComponent={
                    <Text style={styles.emptyText}>No rooms available</Text>
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        padding: 15,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    globalChatButton: {
        backgroundColor: '#4A90E2',
        borderRadius: 8,
        padding: 15,
        marginBottom: 20,
        alignItems: 'center',
    },
    globalChatText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    roomItem: {
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 15,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.0,
        elevation: 1,
    },
    roomName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    roomDescription: {
        fontSize: 14,
        color: '#666',
        marginTop: 5,
    },
    emptyText: {
        textAlign: 'center',
        color: '#999',
        marginTop: 20,
    },
});

export default RoomListScreen;