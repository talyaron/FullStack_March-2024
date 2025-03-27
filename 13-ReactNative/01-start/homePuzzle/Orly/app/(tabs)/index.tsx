import React from 'react';
import { Image, StyleSheet, View, Text, FlatList, Linking, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Install if not already installed

export default function HomeScreen() {
  const contactDetails = [
    { id: '1', type: 'Phone', value: '+972 587 245589', icon: 'phone', link: 'tel:+972587245589' },
    { id: '2', type: 'Email', value: 'orly.jonathan@gmail.com', icon: 'envelope', link: 'mailto:orly.jonathan@gmail.com' },
    { id: '3', type: 'LinkedIn', value: 'linkedin.com/in/OrlyPingley', icon: 'linkedin', link: 'https://linkedin.com/in/OrlyPingley' },
    { id: '4', type: 'GitHub', value: 'github.com/orlyjonathan', icon: 'github', link: 'https://github.com/orlyjonathan' },
   
  ];

  return (
    <View style={styles.container}>
      {/* Profile Image */}
      <Image source={require('@/assets/images/scenery.jpg')} style={styles.profileImage} />

      {/* About Me */}
      <Text style={styles.name}>Orly Pingley</Text>
      <Text style={styles.bio}>I am a nature loving person who enjoys spending time in nature. I am also fond of cooking, baking, jewelry making, painting and learning new things. I am currently studying to be a Frontend Developer with a passion for creating user-friendly and beautiful websites.</Text>

      {/* Contact List */}
      <FlatList
        data={contactDetails}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.contactItem} onPress={() => Linking.openURL(item.link)}>
            <Icon name={item.icon} size={24} color="#007AFF" style={styles.icon} />
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
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  bio: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginVertical: 10,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  icon: {
    marginRight: 15,
  },
  contactText: {
    fontSize: 16,
    color: '#007AFF',
  },
});
