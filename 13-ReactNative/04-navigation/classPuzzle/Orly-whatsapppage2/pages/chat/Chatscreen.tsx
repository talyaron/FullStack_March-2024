import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../App';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';

type Props = {
  route: RouteProp<RootStackParamList, 'Chat'>;
};

export default function ChatScreen({ route }: Props) {
  const { name, image } = route.params;
  
  // Sample chat messages
  const messages = [
    { id: '1', text: 'Lorem ipsum dolor sit amet', sender: 'me' },
    { id: '2', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt', sender: 'other' },
    { id: '3', text: 'Lorem ipsum', sender: 'me' },
    { id: '4', text: '🎙️ [Voice Message]', sender: 'me' },
    { id: '5', text: 'Ok', sender: 'other' },
    { id: '6', text: 'Yes', sender: 'me' },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Image source={{ uri: image }} style={styles.profileImage} />
        <Text style={styles.profileName}>{name}</Text>
        <View style={styles.icons}>
          <Ionicons name="videocam" size={24} color="white" style={styles.icon} />
          <Ionicons name="call" size={24} color="white" style={styles.icon} />
          <Ionicons name="ellipsis-vertical" size={24} color="white" />
        </View>
      </View>

      {/* Chat Messages */}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.messageContainer, item.sender === 'me' ? styles.sender : styles.receiver]}>
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
      />

      {/* Input Field */}
      <View style={styles.inputContainer}>
        <FontAwesome5 name="smile" size={24} color="gray" />
        <TextInput style={styles.input} placeholder="Message" />
        <FontAwesome5 name="paperclip" size={24} color="gray" />
        <FontAwesome5 name="microphone" size={24} color="gray" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#E5DDD5' },

  // Header Styles
  header: { flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: '#075E54' },
  profileImage: { width: 40, height: 40, borderRadius: 20, marginLeft: 10 },
  profileName: { flex: 1, color: 'white', fontSize: 18, marginLeft: 10 },
  icons: { flexDirection: 'row' },
  icon: { marginHorizontal: 10 },

  // Chat Message Styles
  messageContainer: { padding: 10, marginVertical: 5, maxWidth: '80%', borderRadius: 10 },
  sender: { alignSelf: 'flex-end', backgroundColor: '#DCF8C6' },
  receiver: { alignSelf: 'flex-start', backgroundColor: '#fff' },
  messageText: { fontSize: 16 },

  // Input Field
  inputContainer: { flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: 'white' },
  input: { flex: 1, padding: 10, marginHorizontal: 10, backgroundColor: '#f0f0f0', borderRadius: 20 },
});

export default ChatScreen;
