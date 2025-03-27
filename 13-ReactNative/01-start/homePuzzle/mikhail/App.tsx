import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const contactDetails = [
  { id: '1', type: 'Phone', value: '053-522-0189', icon: 'phone' },
  { id: '2', type: 'Email', value: 'whatsittoya@gmail.com', icon: 'envelope' },
  { id: '3', type: 'LinkedIn', value: 'https://www.linkedin.com/in/mikhail-shulman-389954193/', icon: 'linkedin' },
  { id: '4', type: 'GitHub', value: 'https://github.com/HotNuggets', icon: 'github' },
];

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://scontent.fsdv5-1.fna.fbcdn.net/v/t39.30808-6/342389949_1376360543209982_9148171992144084337_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=1qjWhf-vBF8Q7kNvgGbyN77&_nc_oc=AdlJ9_aP_t3wIa821AIisHDETKYhrD2OSi0BzMyMBLI7kPZNwUxMalvmopSjLkmXWXM&_nc_zt=23&_nc_ht=scontent.fsdv5-1.fna&_nc_gid=ImFF7ZSk-eNzbVNZWWOXPQ&oh=00_AYEC8zimEpWVnpExANJ-RXqWuuniK-2eaWX47sNdORp4TQ&oe=67EB266F' }} style={styles.profileImage} />
      <Text style={styles.name}>Your Name</Text>
      <Text style={styles.bio}>A short bio about yourself goes here. Describe who you are and what you do!</Text>
      
      <FlatList
        data={contactDetails}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.contactItem}>
            <FontAwesome name={item.icon} size={24} color="black" style={styles.icon} />
            <Text style={styles.contactText}>{item.value}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  bio: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  icon: {
    marginRight: 10,
  },
  contactText: {
    fontSize: 16,
  },
});
