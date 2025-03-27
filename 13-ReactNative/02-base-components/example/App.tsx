import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {


  return (
    <View style={styles.container}>
      <Text style={styles.text}>Open up App.tsx to start 333 working on your app! dhfksjdhklj sdh gkljsdh gkljshgd kljsh lkjhg lkdfh glkjdf hglkfdjg</Text>
      <StatusBar style="auto" />
      <TextInput style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  text:{
    color: 'white'
  }, 
  input:{
    height: 40,
    borderColor: 'gray',
    backgroundColor: 'white',
    borderWidth: 1,
    width: 200
  }

});
