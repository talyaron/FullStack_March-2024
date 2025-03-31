import { NavigationProp, useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';


type RootStackParamList = {
    Home: undefined;
    Details: undefined;
    Folder: { name: string; age: number };
};

export default function Home() {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    return (
        <View style={styles.container}>
            <Text>Open up App.tsx to start working on your app!</Text>
            <Button onPress={() => navigation.navigate('Folder',{
                name:"Shmulick",
                age: 23,
            }, { animation: 'slide_from_right', })} title="Go to Folder" />
            <StatusBar style="auto" />
        </View>
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
