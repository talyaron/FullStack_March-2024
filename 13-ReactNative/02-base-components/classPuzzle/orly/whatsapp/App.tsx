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

const FILTERS = ['All', 'Unread', 'Favorites', 'Groups'];

export default function App() {
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
      {/* Title */}
      <Text style={styles.title}>WhatsApp</Text>

      {/* Search Bar */}
      <TextInput style={styles.searchBar} placeholder="Search..." />

      {/* Filter Tabs */}
      <View style={styles.filterContainer}>
        {FILTERS.map((filter) => (
          <TouchableOpacity
            key={filter}
            onPress={() => setSelectedFilter(filter)}
            style={[
              styles.filterButton,
              selectedFilter === filter && styles.activeFilter,
            ]}
          >
            <Text
              style={[
                styles.filterText,
                selectedFilter === filter && styles.activeFilterText,
              ]}
            >
              {filter}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Chat List */}
      <FlatList
        data={filteredChats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.chatItem}>
            <Image source={{ uri: item.image }} style={styles.chatImage} />
            <View>
              <Text style={styles.chatName}>{item.name}</Text>
              <Text style={styles.chatMessage}>{item.message}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    color: '#075E54',
  },
  searchBar: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  filterButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: '#E0E0E0',
  },
  activeFilter: {
    backgroundColor: '#25D366',
  },
  filterText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  activeFilterText: {
    color: '#fff',
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  chatImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  chatName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  chatMessage: {
    fontSize: 14,
    color: '#666',
  },
});
