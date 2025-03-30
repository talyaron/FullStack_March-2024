import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ChatList from './view/chats/ChatsList';

export interface Chat {
  id: string;
  name: string;
  message: string;
  image: string;
}

export default function App() {
  return (
    <SafeAreaProvider>
      <ChatList />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
