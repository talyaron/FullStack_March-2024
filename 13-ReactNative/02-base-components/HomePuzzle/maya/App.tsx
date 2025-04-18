import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WhatsAppHomeScreen from './view/WhatsAppHomeScreen';
import WhatsAppChatScreen from './view/WhatsAppChatScreen';

export type RootStackParamList = {
  Home: undefined;
  Chat: { contactName: string };
};

// ✅ Define Stack Navigator
const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={WhatsAppHomeScreen} />
        <Stack.Screen name="Chat" component={WhatsAppChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
