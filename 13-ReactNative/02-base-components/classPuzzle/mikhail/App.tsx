import React from 'react';
import { View, Text, TextInput, FlatList, Image, StyleSheet } from 'react-native';

const chats = [
  { id: '1', name: 'Pasha', message: 'Are you takin the piss?', image: 'https://c.saavncdn.com/346/Giga-Chad-English-2022-20230623063017-500x500.jpg' },
  { id: '2', name: 'gay', message: 'Are you gay?', image: 'https://i1.sndcdn.com/artworks-yHfbqspd8QRZY5ZM-r0ANfQ-t500x500.jpg' },
  { id: '3', name: 'Zaccy', message: 'thanks!', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRsrqGMGxibXBCrPhsvuZo8eHwohbIdr_Rkw&s' },
  { id: '4', name: 'Shakira', message: 'who are you?', image: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/2023-11-16_Gala_de_los_Latin_Grammy%2C_03_%28cropped%2902.jpg' },
  { id: '5', name: 'Dobi', message: 'give me my money back', image: 'https://group11.vc/wp-content/uploads/2021/09/97E93787-4F38-4985-887F-631EDF380D91X.png' },
  { id: '6', name: 'Boss', message: 'you are fired!', image: 'https://s7d1.scene7.com/is/image/wbcollab/sundar_pichai_google_ceo-1?qlt=90&fmt=webp&resMode=sharp2' },
  { id: '7', name: 'Wife', message: 'i want to devorce', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSflDEWS4lrWEgEorFNBcwG2WzmTRMdRoWj9g&s' },
  { id: '8', name: 'Doughter', message: 'Dad i hate you!', image: 'https://m.media-amazon.com/images/M/MV5BNDJmNmI1YjUtZGNlNS00ZWFiLWE0ZTEtN2FlZjI1MmIwNzYxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg' }
];

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Whatsapp</Text>
      <TextInput style={styles.searchBar} placeholder="Search..." />
      <FlatList 
        data={chats} 
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
    marginBottom: 10,
  },
  searchBar: {
    backgroundColor: '#eee',
    padding: 8,
    borderRadius: 10,
    marginBottom: 10,
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
    fontWeight: 'bold',
    fontSize: 16,
  },
  chatMessage: {
    color: 'gray',
  },
});
