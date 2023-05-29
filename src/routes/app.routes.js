import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons, MaterialIcons, AntDesign } from '@expo/vector-icons';
import { theme } from '../global/theme';

import Home from '../pages/Home';
import Account from '../pages/Account';
import Cart from '../pages/Cart';

export default function AppRoutes(){
    const AppStack = createNativeStackNavigator();
    const TabStack = createBottomTabNavigator();

    function Tabs(){
        
        return(
            <TabStack.Navigator
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarStyle:{
                        position: 'absolute',
                        backgroundColor: '#121212',

                        borderTopWidth: 2,
                        borderTopColor: theme.colors.teste3,

                        //bottom: 14,
                        elevation: 0,
                        //borderRadius: 4,
                        height: 60,
                                    
                    }
                }}
            >

            <TabStack.Screen 
                    name='Inicio' 
                    component={Home} 
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color, size, focused}) => {
                            if(focused){
                            return <AntDesign name="home" size={24} color={theme.colors.primary} />
                        }
                            return <AntDesign name="home" size={24} color="#DDD" />
    
                        }
                    }}
            />
            
            <TabStack.Screen 
                    name='Carrinho' 
                    component={Cart} 
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color, size, focused}) => {
                            if(focused){
                            return <AntDesign name="shoppingcart" size={24} color={theme.colors.primary} />
                        }
                            return <AntDesign name="shoppingcart" size={24} color="#DDD" />
    
                        }
                    }}
            />
            
            <TabStack.Screen 
                    name='Conta' 
                    component={Cart} 
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color, size, focused}) => {
                            if(focused){
                            return <Ionicons name="grid" size={24} color={theme.colors.primary} />
                        }
                            return <Ionicons name="grid-outline" size={24} color="#DDD" />
    
                        }
                    }}
            />

            </TabStack.Navigator>
        )
        
    };

    return(
        <AppStack.Navigator>
            <AppStack.Screen 
                name='Home' 
                component={Tabs}
                options={{
                    headerShown: false,
                }} 
            />
        </AppStack.Navigator>
    )
}
