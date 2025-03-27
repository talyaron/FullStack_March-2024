import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

//  interface for the chat item
interface ChatItem {
  id: string;
  name: string;
  lastMessage: string;
  time: string;
}

const WhatsAppHomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Data for chat items
  const CHATS: ChatItem[] = [
    {
      id: '1',
      name: 'John Doe',
      lastMessage: 'Hey, how are you?',
      time: '10:30 AM'
    },
    {
      id: '2',
      name: 'Jane Smith',
      lastMessage: 'Meeting at 2 PM today',
      time: '9:45 AM'
    },
    {
      id: '3',
      name: 'Mike Johnson',
      lastMessage: 'Can you send the report?',
      time: 'Yesterday'
    },
    {
      id: '4',
      name: 'Emily Brown',
      lastMessage: 'Sounds good!',
      time: 'Monday'
    },
    {
      id: '5',
      name: 'Alex Wilson',
      lastMessage: 'Thanks for the update',
      time: 'Sunday'
    }
  ];

  // Type the parameter 
  const renderChatItem = ({ item }: { item: ChatItem }) => (
    <TouchableOpacity style={styles.chatItem}>
      <Ionicons name="person-circle-outline" size={48} color="#888" />
      <View style={styles.chatContent}>
        <View style={styles.chatHeader}>
          <Text style={styles.chatName}>{item.name}</Text>
          <Text style={styles.chatTime}>{item.time}</Text>
        </View>
        <Text style={styles.chatLastMessage} numberOfLines={1}>
          {item.lastMessage}
        </Text>
      </View>
    </TouchableOpacity>
  );

  // Filtered chats based on search query
  const filteredChats = CHATS.filter(chat => 
    chat.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    chat.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Title */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>WhatsApp</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search chats"
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholderTextColor="#888"
        />
        <Ionicons 
          name="search" 
          style={styles.searchIcon} 
          size={20} 
          color="#888" 
        />
      </View>

      {/* Chat List */}
      <FlatList
        data={filteredChats}
        renderItem={renderChatItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.chatList}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No chats found</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  titleContainer: {
    backgroundColor: '#25D366',
    paddingVertical: 15
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  },
  searchContainer: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  searchBar: {
    flex: 1,
    padding: 10,
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    fontSize: 16,
    paddingRight: 40
  },
  searchIcon: {
    position: 'absolute', 
    right: 20
  },
  chatList: {
    paddingBottom: 20
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0'
  },
  chatContent: {
    flex: 1,
    marginLeft: 15
  },
  chatHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5
  },
  chatName: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  chatTime: {
    color: '#888',
    fontSize: 14
  },
  chatLastMessage: {
    color: '#666'
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50
  },
  emptyText: {
    color: '#888',
    fontSize: 16
  }
});

export default WhatsAppHomeScreen;