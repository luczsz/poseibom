import React, {useContext, useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { AuthContext } from '../../contexts/auth';

import { styles } from './style';
import { Feather } from '@expo/vector-icons';
import { theme } from '../../global/theme';

import { peixes } from '../../components/list';
import Itens from '../../components/Itens';

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
                <Feather name='user' size={25} color={theme.colors.primary} />

              </TouchableOpacity>

            </View>
          
        </View>
        
        <View style={styles.content} >

          <Text style={{ color: theme.colors.teste3, fontSize: 18, fontWeight: 'bold', marginBottom: 10, textAlign: 'left', width: '100%' }} >
            Escolha seu produto: 
          </Text>  
          {peixes.map( (itens) => (
            <Itens key={itens.id} data={itens} />
          ))}

        </View>
        
        <View style={styles.footer} >
          <Text>HOME  AGAIN</Text>

        </View>


   </View>
  );
}
