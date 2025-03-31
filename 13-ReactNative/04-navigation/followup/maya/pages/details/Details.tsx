import { Button } from '@react-navigation/elements';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};

export default function Details({ route }:{ route: { params: { name: string } } }) {
  const {name} = route.params;
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
 
  return (
    <View style={styles.container}>
      <Text>Details</Text>
      <Button onPress={() => navigation.navigate('Home')}>Go to Home</Button>
      <Button onPress={() => navigation.navigate('Details')}>Go to Details</Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
