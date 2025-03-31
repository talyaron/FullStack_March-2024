import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ChatScreen({ route }: { route: { params: { chat: any } } }) {
  const { chat } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: chat.image }} style={styles.chatImage} />
      <Text style={styles.chatName}>{chat.name}</Text>
      <Text style={styles.chatMessage}>{chat.message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  chatImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  chatName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  chatMessage: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
});
