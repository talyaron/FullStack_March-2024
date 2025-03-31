import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../App';

type Props = {
    navigation: NavigationProp<RootStackParamList, 'Home'>;
  };

const mockChats = [
  { id: '1', name: 'Ken White', message: 'Hey! How are you?', image: 'https://randomuser.me/api/portraits/men/1.jpg', unread: true, favorite: false, group: false },
  { id: '2', name: 'Elsa Brown', message: 'Let’s catch up later!', image: 'https://randomuser.me/api/portraits/women/2.jpg', unread: false, favorite: true, group: false },
  { id: '3', name: 'Sam Blue', message: 'Are you coming to the party?', image: 'https://randomuser.me/api/portraits/men/3.jpg', unread: true, favorite: false, group: true },
  { id: '4', name: 'Ariel Green', message: 'I sent you the files.', image: 'https://randomuser.me/api/portraits/women/4.jpg', unread: false, favorite: true, group: false },
  { id: '5', name: 'John Doe', message: 'Good morning!', image: 'https://randomuser.me/api/portraits/men/5.jpg', unread: true, favorite: false, group: false },
  { id: '6', name: 'Jane Doe', message: 'How are you?', image: 'https://randomuser.me/api/portraits/women/6.jpg', unread: false, favorite: true, group: false },
  { id: '7', name: 'Ted lasso', message: 'Good morning!', image: 'https://randomuser.me/api/portraits/men/7.jpg', unread: true, favorite: false, group: false },
  { id: '8', name: 'Jinny Purple', message: 'How are you?', image: 'https://randomuser.me/api/portraits/women/8.jpg', unread: false, favorite: true, group: false },
  { id: '9', name: 'Ricky Mars', message: 'Good morning!', image: 'https://randomuser.me/api/portraits/men/9.jpg', unread: true, favorite: false, group: false },
  { id: '10', name: 'Vicky Martin', message: 'How are you?', image: 'https://randomuser.me/api/portraits/women/10.jpg', unread: false, favorite: true, group: false },  
];

export default function HomeScreen({ navigation }: Props) {
    const [selectedFilter, setSelectedFilter] = useState('All');

    const filteredChats = mockChats.filter((chat) => {
        switch (selectedFilter) {
          case 'Unread':
            return chat.unread;
          case 'Favorites':
            return chat.favorite;
          case 'Groups':
            return chat.group;
          default:
            return true;
        }
      });

      return (
        <View style={styles.container}>
          <Text style={styles.title}>WhatsApp</Text>
          <TextInput style={styles.searchBar} placeholder="Search..." />
    
          <FlatList
            data={filteredChats}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.chatItem}
                onPress={() => navigation.navigate('Chat', { name: item.name, image: item.image })}
              >
                <Image source={{ uri: item.image }} style={styles.chatImage} />
                <View>
                  <Text style={styles.chatName}>{item.name}</Text>
                  <Text style={styles.chatMessage}>{item.message}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: { flex: 1, backgroundColor: '#fff', padding: 10 },
      title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginVertical: 10, color: '#075E54' },
      searchBar: { backgroundColor: '#f0f0f0', padding: 10, borderRadius: 10, marginBottom: 10 },
      chatItem: { flexDirection: 'row', alignItems: 'center', padding: 10, borderBottomWidth: 1, borderBottomColor: '#ddd' },
      chatImage: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
      chatName: { fontSize: 16, fontWeight: 'bold' },
      chatMessage: { fontSize: 14, color: '#666' },
    });
