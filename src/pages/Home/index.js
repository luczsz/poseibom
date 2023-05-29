import React, {useContext, useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { AuthContext } from '../../contexts/auth';

import { styles } from './style';
import { Feather } from '@expo/vector-icons';

export default function Home() {

  const { user } = useContext(AuthContext);

 return (
   <View style={styles.container} >

        <View style={styles.header} >

            <View style={styles.names} >
              <Text style={styles.names1} >
                Olá { user.nome }
              </Text>
              <Text style={styles.names2} >
                Seja bem vindo.
              </Text>

            </View>

            <View style={styles.bntsHeader} >
              <TouchableOpacity
                style={styles.account}
              >
                <Feather name='user' size={20} color={'white'} />

              </TouchableOpacity>

            </View>
          
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
