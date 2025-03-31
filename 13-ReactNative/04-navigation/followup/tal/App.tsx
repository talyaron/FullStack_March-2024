import * as React from 'react';
import { Easing } from 'react-native';
import Home from './pages/home/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStaticNavigation } from '@react-navigation/native';
import Details from './pages/details/Details';

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screens: {
    Home: {
      screen: Home,
      name: 'Home',
      options: {
        title: 'Overview',
        animation: 'slide_from_left',
        animationDuration: 300,
        // For controlling the animation timing
        transitionSpec: {
          open: {
            animation: 'timing',
            config: {
              duration: 300,
              easing: Easing.bounce,
            },
          },
          close: {
            animation: 'timing',
            config: {
              duration: 300,
              easing: Easing.ease,
            },
          },
        },
      },
    },
    Folder: {
      screen: Details,
      name: 'Folder',
      options: {
        title: 'Details',
        animation: 'slide_from_right',
        animationDuration: 300,
        // For controlling the animation timing
        transitionSpec: {
          open: {
            animation: 'timing',
            config: {
              duration: 300,
              easing: Easing.ease,
            },
          },
          close: {
            animation: 'timing',
            config: {
              duration: 300,
              easing: Easing.ease,
            },
          },
        },
      },
    },
  },
  // Global screen options for all screens
  screenOptions: {
    animation: 'slide_from_right',
    headerShown: true,
    animationDuration: 300,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}