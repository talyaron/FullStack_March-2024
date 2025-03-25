import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Open up App.tsx 22 to start working on your app!</Text>
      <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaa',
    alignItems: 'center',
    justifyContent: 'center',
    width: 34
  },
  text:{
    color: 'red',
    fontSize: 20
  }
});
