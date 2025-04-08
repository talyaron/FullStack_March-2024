import { Button } from '@react-navigation/elements';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};

export default function Details() {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
 
  return (
    <View style={styles.container}>
      <Text>Details</Text>
      <Button onPress={() => navigation.navigate('Home')}>Go to Home</Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tomato',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
