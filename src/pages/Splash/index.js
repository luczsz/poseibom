import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { styles } from './style';

import { useNavigation } from '@react-navigation/native';

export default function Splash() {

    const navigation = useNavigation();
 return (
   <View style={styles.container} >   
        <View style={styles.imgView} >
            <Image
                source={ require('../../assets/logo3x.png') }
                style={styles.imgs}
            />
        </View>

        <View style={styles.bntView} >
            <TouchableOpacity
                style={styles.enter}
                activeOpacity={0.7}
                onPress={ () => navigation.navigate('Login') }
            >
                <Text style={styles.txtEnter} >
                    E N T R A R
                </Text>
            </TouchableOpacity>
        </View>
  
   </View>
  );
}
