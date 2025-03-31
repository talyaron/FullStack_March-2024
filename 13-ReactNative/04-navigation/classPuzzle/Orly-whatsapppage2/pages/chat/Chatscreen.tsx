import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../App';

type Props = {
  route: RouteProp<RootStackParamList, 'Chat'>;
};

export default function ChatScreen({ route }: Props) {
  const { name, image } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.profileImage} />
      <Text style={styles.chatTitle}>{name}</Text>
      <Text style={styles.message}>Chat messages will be displayed here.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' },
  profileImage: { width: 100, height: 100, borderRadius: 50, marginBottom: 20 },
  chatTitle: { fontSize: 24, fontWeight: 'bold' },
  message: { fontSize: 16, color: '#666' },
});