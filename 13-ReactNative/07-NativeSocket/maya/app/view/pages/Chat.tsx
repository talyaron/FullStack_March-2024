import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    Platform,
    KeyboardAvoidingView,
    SafeAreaView
} from 'react-native';
import socketService from '../../controllers/socketService'; // Adjust the import path as necessary


const ChatScreen = ({ route }: { route: { params: { roomId: string | null } } }) => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState<{ id: string; text: string }[]>([]);
    const roomId = route?.params?.roomId || null;

    useEffect(() => {
        // Join the room when component mounts
        if (roomId) {
            socketService.joinRoom(roomId);
        }

        // Set up message listener
        socketService.subscribeToMessages((message: string) => {
            try {
                const receivedMessage = JSON.parse(message);
                setMessages((prevMessages) => [
                    ...prevMessages,
                    { id: String(Date.now()), text: receivedMessage.text, fromSelf: receivedMessage.from === socketService.socket.id }
                ]);
            } catch (error) {
                console.error('Failed to parse message:', error);
            }
        });
        

        // Clean up when component unmounts
        return () => {
            if (roomId) {
                socketService.leaveRoom(roomId);
            }
        };
    }, [roomId]);

    const sendMessage = () => {
        if (message.trim()) {
            socketService.sendMessage(JSON.stringify({ text: message, from: socketService.socket.id }), roomId);
            setMessage('');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
            >
                <View style={styles.header}>
                    <Text style={styles.headerText}>
                        {roomId ? `Room: ${roomId}` : 'Global Chat'}
                    </Text>
                </View>

                <FlatList
                    style={styles.messageList}
                    data={messages}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.messageContainer}>
                            <Text style={styles.messageText}>{item.text}</Text>
                        </View>
                    )}
                />

                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        value={message}
                        onChangeText={setMessage}
                        placeholder="Type a message..."
                        returnKeyType="send"
                        onSubmitEditing={sendMessage}
                    />
                    <TouchableOpacity
                        style={styles.sendButton}
                        onPress={sendMessage}
                    >
                        <Text style={styles.sendButtonText}>Send</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    header: {
        padding: 15,
        backgroundColor: '#4A90E2',
        alignItems: 'center',
    },
    headerText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    messageList: {
        flex: 1,
        padding: 10,
    },
    messageContainer: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 12,
        marginBottom: 8,
        alignSelf: 'flex-start',
        maxWidth: '80%',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.0,
        elevation: 1,
    },
    messageText: {
        fontSize: 16,
    },
    inputContainer: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderTopColor: '#E5E5E5',
    },
    input: {
        flex: 1,
        backgroundColor: '#EFEFEF',
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginRight: 10,
    },
    sendButton: {
        backgroundColor: '#4A90E2',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        width: 70,
    },
    sendButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default ChatScreen;