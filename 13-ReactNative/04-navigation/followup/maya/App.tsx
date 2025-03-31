import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStaticNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import Home from './pages/Home';
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
    Details: Details,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}