import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homescreen from './pages/home/Homescreen';
import Chatscreen from './pages/chat/Chatscreen';

export type RootStackParamList = {
  Home: undefined;
  Chat: { name: string; image: string };
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Homescreen} options={{ title: 'WhatsApp' }} />
        <Stack.Screen name="Chat" component={Chatscreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}