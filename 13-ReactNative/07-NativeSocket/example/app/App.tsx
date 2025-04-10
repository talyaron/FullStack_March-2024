import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ChatScreen from './view/pages/Chat';

// Define types for route parameters
type RootStackParamList = {
  RoomList: undefined;
  Chat: { roomId: string | null };
};
import RoomListScreen from './view/pages/RoomList';
import socketService from './controllers/socketService';

const Stack = createStackNavigator<RootStackParamList>();


const App = () => {
  useEffect(() => {
    // Initialize socket connection
    // The service will handle connection automatically
    return () => {
      // Clean up socket connection when app is closed
      socketService.disconnect();
    };
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="RoomList">
        <Stack.Screen
          name="RoomList"
          component={RoomListScreen}
          options={{ title: 'Available Rooms' }}
        />
        <Stack.Screen
          name="Chat"
          component={ChatScreen}
          options={({ route }) => ({
            title: route.params?.roomId ? `Room: ${route.params.roomId}` : 'Global Chat'
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;