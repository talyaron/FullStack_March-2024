import * as React from 'react';
import Home from './pages/home/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStaticNavigation } from '@react-navigation/native';

const RootStack = createNativeStackNavigator({
  screens: {
    Home: Home,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}