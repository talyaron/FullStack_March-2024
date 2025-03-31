import * as React from 'react';
import Home from './pages/home/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStaticNavigation } from '@react-navigation/native';
import Details from './pages/details/Details';

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screens: {
    Home:{
      screen: Home,
      name: 'Home',
      options: {
        title: 'Overview',
      },
    },
    Folder: Details,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}