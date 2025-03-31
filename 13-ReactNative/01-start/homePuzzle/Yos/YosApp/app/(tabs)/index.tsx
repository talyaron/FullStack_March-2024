import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import FlatListExample from '@/View/Lists/FlatListExample';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome To Yos App!</ThemedText>
        <HelloWave />
      </ThemedView>

      <ThemedView style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

      <Image
          source={require('@/assets/images/Yos.jpg')}
          style={{ width: 150, height: 150, borderRadius: 100, marginRight: 10 }}
        />
        <ThemedView style={styles.stepContainer}>
          <ThemedText style={{ fontSize: 14, fontWeight: 'bold' }} type="subtitle">Im Yos And I Love React Native</ThemedText>
          <ThemedText style={{ fontSize: 14, fontWeight: 'bold' }} type="subtitle">Im 35 Years Old</ThemedText>
          <ThemedText style={{ fontSize: 14, fontWeight: 'bold' }} type="subtitle">Im From Israel Bnei Brak</ThemedText>
          <ThemedText style={{ fontSize: 14, fontWeight: 'bold' }} type="subtitle">Im A Developer</ThemedText>
        </ThemedView>
    
      </ThemedView>

      
      <FlatListExample />

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
