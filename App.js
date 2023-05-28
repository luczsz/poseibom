import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { theme } from './src/global/theme';

import Splash from './src/pages/Splash';
import Routes from './src/routes';

import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (
    <NavigationContainer> 
        <Routes  />
        <StatusBar translucent style="light" backgroundColor={theme.colors.primary} />
    </NavigationContainer>
  );
}
