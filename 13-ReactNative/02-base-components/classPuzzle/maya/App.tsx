import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import WhatsAppHomeScreen from './view/WhatsAppHomeScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <WhatsAppHomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});