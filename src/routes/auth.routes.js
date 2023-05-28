import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from '../pages/Splash';
import LogON from '../pages/LogON';
import LogIN from '../pages/LogIN';

const AuthStack = createNativeStackNavigator();

export default function AuthRoutes(){
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen 
                name='Splash' 
                component={Splash}
                options={{
                    headerShown: false
                }} 
            />

            <AuthStack.Screen 
                name='LogOn' 
                component={LogON}
                options={{
                    headerShown: false,
                }}
            />

            <AuthStack.Screen 
                name='Login' 
                component={LogIN}
                options={{
                    headerShown: false,
                }} 
            />
        
        </AuthStack.Navigator>
    )
}
