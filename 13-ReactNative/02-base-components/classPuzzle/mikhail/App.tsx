import React from "react";
import { View, Text, TextInput, FlatList, Image, StyleSheet } from "react-native";

const mockChats = [
  { id: "1", name: "Alice", message: "Hey! How are you?", image: "https://via.placeholder.com/50" },
  { id: "2", name: "Bob", message: "Let's meet tomorrow.", image: "https://via.placeholder.com/50" },
  { id: "3", name: "Charlie", message: "Check out this photo!", image: "https://via.placeholder.com/50" },
  { id: "4", name: "David", message: "Are you coming to the party?", image: "https://via.placeholder.com/50" }
];

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>WhatsApp</Text>
      <TextInput style={styles.searchBar} placeholder="Search..." />
      <FlatList
        data={mockChats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.chatItem}>
            <Image source={{ uri: item.image }} style={styles.avatar} />
            <View>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.message}>{item.message}</Text>
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
    backgroundColor: "#fff",
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    paddingVertical: 10,
    textAlign: "center",
  },
  searchBar: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 20,
    marginBottom: 10,
  },
  chatItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  message: {
    color: "gray",
  },
});
