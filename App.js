import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import AuthProvaider from './src/contexts/auth';

import { theme } from './src/global/theme';

import Splash from './src/pages/Splash';
import Routes from './src/routes';

import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (
    <NavigationContainer>

        <AuthProvaider>
          <Routes  />
          <StatusBar translucent style="light" backgroundColor={theme.colors.primary} />         
        </AuthProvaider>

    </NavigationContainer>
  );
}
