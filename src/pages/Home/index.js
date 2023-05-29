import React, {useContext, useState} from 'react';
import { View, Text } from 'react-native';

import { AuthContext } from '../../contexts/auth';

import { styles } from './style';
import { Feather } from '@expo/vector-icons';

export default function Home() {

  const { user } = useContext(AuthContext);

 return (
   <View style={styles.container} >

        <View style={styles.header} >
          <Text>Olá { user.nome }</Text>
          <Feather name='user' size={20} color={'white'} />

        </View>

        <View style={styles.content} >
          <Text>HOME  AGAIN</Text>

        </View>
        
        <View style={styles.footer} >
          <Text>HOME  AGAIN</Text>

        </View>


   </View>
  );
}
