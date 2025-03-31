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
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationProp } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';




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
const ChatListScreen = ({ navigation }: { navigation: NavigationProp<any> }) => {
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

      <FlatList
        data={filteredChats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('ChatDetail', { chat: item })}>
            <View style={styles.chatItem}>
              <Image source={{ uri: item.image }} style={styles.chatImage} />
              <View>
                <Text style={styles.chatName}>{item.name}</Text>
                <Text style={styles.chatMessage}>{item.message}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

type RootStackParamList = {
  ChatList: undefined;
  ChatDetail: { chat: any };
};

type ChatDetailScreenProps = {
  route: RouteProp<RootStackParamList, 'ChatDetail'>;
};

const ChatDetailScreen: React.FC<ChatDetailScreenProps> = ({ route }) => {
  const { chat } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{chat.name}</Text>
      <Image source={{ uri: chat.image }} style={styles.chatImageLarge} />
      <Text style={styles.chatMessage}>{chat.message}</Text>
    </View>
  );
};



const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ChatList" component={ChatListScreen} />
        <Stack.Screen name="ChatDetail" component={ChatDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 10 },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginVertical: 10, color: '#075E54' },
  searchBar: { backgroundColor: '#f0f0f0', padding: 10, borderRadius: 10, marginBottom: 10 },
  filterContainer: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10 },
  filterButton: { paddingVertical: 8, paddingHorizontal: 15, borderRadius: 20, backgroundColor: '#E0E0E0' },
  activeFilter: { backgroundColor: '#25D366' },
  filterText: { fontSize: 14, fontWeight: 'bold', color: '#333' },
  activeFilterText: { color: '#fff' },
  chatItem: { flexDirection: 'row', alignItems: 'center', padding: 10, borderBottomWidth: 1, borderBottomColor: '#ddd' },
  chatImage: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
  chatImageLarge: { width: 100, height: 100, borderRadius: 50, alignSelf: 'center', marginBottom: 10 },
  chatName: { fontSize: 16, fontWeight: 'bold' },
  chatMessage: { fontSize: 14, color: '#666' },
});