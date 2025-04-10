# Building a React Native Chat App with Socket.IO

This guide will walk you through creating a real-time chat application using React Native and Socket.IO, connecting to a Node.js backend.

## Prerequisites

- Node.js and npm installed
- React Native development environment set up
- Basic knowledge of React Native and Express.js

## Project Structure

We'll build a chat application with the following features:
- Global chat room
- Room-specific chats
- Real-time messaging using Socket.IO

## Step 1: Setting Up the Server

First, let's understand the server code that will handle our Socket.IO connections:

```javascript
// server.js
import express from 'express';
import { createServer } from 'node:http';
import { Server } from 'socket.io';
const app = express()
const port = 3000;
import { pool } from './controllers/db';

// connect the sockets to the server
const server = createServer(app);
const io = new Server(server);

//body parser
app.use(express.json()) //parse json data
console.log("Hello World")

//Model
class Student {
  name: string;
  imageUrl: string;
  id: string;
  constructor(name: string, imageUrl: string) {
    this.name = name;
    this.imageUrl = imageUrl;
    this.id = `id-${crypto.randomUUID()}`;
  }
}

const students: Student[] = [
  new Student("Joni", "https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM="),
  new Student("Jane", "https://t3.ftcdn.net/jpg/05/04/24/20/360_F_504242030_Y45HiMdjBqLAZyeDRYljWdP1xniVMAxs.jpg"),
  new Student("Bob", "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg")
];

app.use(express.static('public')) //serve static files from folder "public"

// Routes
app.get("/rooms", async (req: any, res: any) => {
  const rooms = await pool.execute("SELECT * FROM rooms")
  res.send({ rooms: rooms[0] })
})

//waiting for user handshake
io.on('connection', (socket) => {
  console.log('a user connected', socket.id);
  
  socket.on('join room', (roomId) => {
    console.log('user joined room', roomId, socket.id);
    socket.join(roomId);
  })
  
  socket.on('leave room', (roomId) => {
    console.log('user left room', roomId, socket.id);
    socket.leave(roomId);
  })
  
  socket.on('chat message', ({ message, roomId }) => {
    console.log('message: ' + JSON.stringify({ message, roomId }));
    if (!roomId) {
      io.emit('chat message', message);
    } else {
      io.to(roomId).emit('chat message', message);
    }
  });
  
  socket.on('disconnect', () => {
    console.log('user disconnected', socket.id);
  });
});

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```

This server sets up:
- An Express.js server with Socket.IO integration
- A `/rooms` endpoint to get available chat rooms
- Socket event handlers for joining rooms, leaving rooms, and sending messages

## Step 2: Setting Up the React Native Project

### Create a new React Native project

```bash
npx react-native init ChatApp
cd ChatApp
```

### Install required dependencies

```bash
npm install socket.io-client @react-navigation/native @react-navigation/stack
npm install react-native-screens react-native-safe-area-context react-native-gesture-handler
```

## Step 3: Creating the Socket.IO Service

Create a file named `socketService.js` to handle all Socket.IO connections:

```javascript
// socketService.js
import { io } from 'socket.io-client';
import { Platform } from 'react-native';

// Important: Use the appropriate URL based on your setup
// For Android emulator, use 10.0.2.2 instead of localhost
// For iOS simulator, you can use localhost
// For physical devices, use your computer's IP address on the local network

const SOCKET_URL = Platform.OS === 'android' 
  ? 'http://10.0.2.2:3000'  // Android emulator special IP for localhost
  : 'http://localhost:3000'; // iOS or web

class SocketService {
  constructor() {
    this.socket = null;
    this.setupSocketConnection();
  }

  setupSocketConnection() {
    this.socket = io(SOCKET_URL, {
      transports: ['websocket'],
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionAttempts: 10
    });

    this.socket.on('connect', () => {
      console.log('Connected to socket server with ID:', this.socket.id);
    });

    this.socket.on('connect_error', (error) => {
      console.error('Socket connection error:', error);
    });

    this.socket.on('disconnect', (reason) => {
      console.log('Socket disconnected:', reason);
    });
  }

  joinRoom(roomId) {
    if (this.socket) {
      this.socket.emit('join room', roomId);
      console.log('Joining room:', roomId);
    }
  }

  leaveRoom(roomId) {
    if (this.socket) {
      this.socket.emit('leave room', roomId);
      console.log('Leaving room:', roomId);
    }
  }

  sendMessage(message, roomId = null) {
    if (this.socket) {
      this.socket.emit('chat message', { message, roomId });
      console.log('Message sent:', message, 'to room:', roomId);
    }
  }

  subscribeToMessages(callback) {
    if (this.socket) {
      this.socket.on('chat message', (message) => {
        callback(message);
      });
    }
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
    }
  }
}

export default new SocketService();
```

## Step 4: Creating a Room List Screen

Create a file named `RoomListScreen.js`:

```javascript
// RoomListScreen.js
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Alert,
  Platform,
} from 'react-native';

const RoomListScreen = ({ navigation }) => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    try {
      // Determine the correct URL based on platform
      const baseUrl = Platform.OS === 'android' 
        ? 'http://10.0.2.2:3000' 
        : 'http://localhost:3000';
        
      const response = await fetch(`${baseUrl}/rooms`);
      const data = await response.json();
      
      if (data && data.rooms) {
        setRooms(data.rooms);
      } else {
        setRooms([]);
        Alert.alert('Error', 'Could not fetch rooms from server');
      }
    } catch (error) {
      console.error('Error fetching rooms:', error);
      Alert.alert('Error', 'Could not connect to the server');
    } finally {
      setLoading(false);
    }
  };

  const navigateToGlobalChat = () => {
    navigation.navigate('Chat', { roomId: null });
  };

  const navigateToRoom = (roomId) => {
    navigation.navigate('Chat', { roomId });
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4A90E2" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.globalChatButton}
        onPress={navigateToGlobalChat}
      >
        <Text style={styles.globalChatText}>Join Global Chat</Text>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>Available Rooms</Text>

      <FlatList
        data={rooms}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.roomItem}
            onPress={() => navigateToRoom(item.id)}
          >
            <Text style={styles.roomName}>{item.name}</Text>
            <Text style={styles.roomDescription}>{item.description}</Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No rooms available</Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 15,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  globalChatButton: {
    backgroundColor: '#4A90E2',
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
    alignItems: 'center',
  },
  globalChatText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  roomItem: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  roomName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  roomDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  emptyText: {
    textAlign: 'center',
    color: '#999',
    marginTop: 20,
  },
});

export default RoomListScreen;
```

## Step 5: Creating a Chat Screen

Create a file named `ChatScreen.js`:

```javascript
// ChatScreen.js
import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  FlatList, 
  StyleSheet, 
  Platform,
  KeyboardAvoidingView,
  SafeAreaView 
} from 'react-native';
import socketService from './socketService';

const ChatScreen = ({ route }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const roomId = route?.params?.roomId || null;
  
  useEffect(() => {
    // Join the room when component mounts
    if (roomId) {
      socketService.joinRoom(roomId);
    }
    
    // Set up message listener
    socketService.subscribeToMessages((receivedMessage) => {
      setMessages((prevMessages) => [
        ...prevMessages, 
        { id: String(Date.now()), text: receivedMessage }
      ]);
    });
    
    // Clean up when component unmounts
    return () => {
      if (roomId) {
        socketService.leaveRoom(roomId);
      }
    };
  }, [roomId]);
  
  const sendMessage = () => {
    if (message.trim()) {
      socketService.sendMessage(message, roomId);
      setMessage('');
    }
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
      >
        <View style={styles.header}>
          <Text style={styles.headerText}>
            {roomId ? `Room: ${roomId}` : 'Global Chat'}
          </Text>
        </View>
        
        <FlatList
          style={styles.messageList}
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.messageContainer}>
              <Text style={styles.messageText}>{item.text}</Text>
            </View>
          )}
        />
        
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={message}
            onChangeText={setMessage}
            placeholder="Type a message..."
            returnKeyType="send"
            onSubmitEditing={sendMessage}
          />
          <TouchableOpacity
            style={styles.sendButton}
            onPress={sendMessage}
          >
            <Text style={styles.sendButtonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    padding: 15,
    backgroundColor: '#4A90E2',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  messageList: {
    flex: 1,
    padding: 10,
  },
  messageContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 12,
    marginBottom: 8,
    alignSelf: 'flex-start',
    maxWidth: '80%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
  },
  input: {
    flex: 1,
    backgroundColor: '#EFEFEF',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#4A90E2',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
  },
  sendButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ChatScreen;
```

## Step 6: Setting Up Navigation and App Entry Point

Create or modify `App.js`:

```javascript
// App.js
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform } from 'react-native';
import ChatScreen from './ChatScreen';
import RoomListScreen from './RoomListScreen';
import socketService from './socketService';

const Stack = createStackNavigator();

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
```

## Step 7: Configure Network Permissions (Android)

For Android, open `android/app/src/main/AndroidManifest.xml` and ensure you have the internet permission:

```xml
<uses-permission android:name="android.permission.INTERNET" />
```

## Step 8: Run the Application

1. Make sure your server is running:
   ```bash
   node server.js
   ```

2. Start your React Native application:
   ```bash
   npx react-native run-android
   # OR
   npx react-native run-ios
   ```

## Important Notes for React Native and Socket.IO

### IP Address Configurations

When testing on different devices, you'll need to use different IP addresses:

- **Android Emulator**: Use `10.0.2.2` to reference your computer's localhost
- **iOS Simulator**: Use `localhost`
- **Physical Device**: Use your computer's actual IP address on the local network (e.g., `192.168.1.X`)

### Socket.IO Connection Best Practices

1. **Always use WebSocket transport** to avoid polling issues on mobile:
   ```javascript
   io(URL, { transports: ['websocket'] })
   ```

2. **Handle reconnection** to manage network changes:
   ```javascript
   io(URL, {
     reconnection: true,
     reconnectionDelay: 1000,
     reconnectionAttempts: 10
   })
   ```

3. **Clean up connections** when components unmount to avoid memory leaks

### Debugging Tips

1. Use `console.log` statements to track connection status and events
2. Check server console for connection events
3. If you're having connection issues:
   - Verify your server is running
   - Check that you're using the correct IP address
   - Ensure your firewall isn't blocking connections
   - Confirm your server allows connections from all origins

## Database Schema

For this project, the server expects a `rooms` table in your database with at least these columns:

- `id`: Unique identifier for the room
- `name`: Name of the room
- `description`: Brief description of the room

## Next Steps to Enhance the Application

1. Add user authentication
2. Display user names with messages
3. Add typing indicators
4. Implement read receipts
5. Add push notifications for messages
6. Store message history in a database

By following this guide, you'll have a working real-time chat application built with React Native and Socket.IO that can be further customized and extended based on your requirements.
