import React from 'react';
import { View, Text, KeyboardAvoidingView, Image, TextInput, TouchableOpacity } from 'react-native';

import { styles } from './style';
import { Feather } from '@expo/vector-icons';
import { theme } from '../../global/theme';

import { useNavigation } from '@react-navigation/native';

export default function LogIN() {

  const navigation = useNavigation();

 return (
   <KeyboardAvoidingView style={styles.container} >

        <View style={styles.logo} >
          <Image
            source={ require('../../assets/logo3x.png')}
            style={styles.logoImage}
          />

        </View>
 
        <View style={styles.inputView} >

          <View style={styles.input} >
              <Feather
                name='user'
                size={30}
                color={ theme.colors.in }
                style={{ marginRight: 12, }}
              />
              <TextInput      
                style={{ width: '85%', height: 50  }}
                placeholder='Email'
              />
          </View>

          <View style={styles.input} >
              <Feather
                name='lock'
                size={30}
                color={ theme.colors.in }
                style={{ marginRight: 12, }}
              />
              <TextInput      
                style={{ width: '85%', height: 50  }}
                placeholder='Senha'
              />
          </View>

          <View style={styles.fogt} >
              <TouchableOpacity
                  activeOpacity={0.6}
              >
                  <Text style={styles.fogt2} >Esqueci minha senha</Text>
              </TouchableOpacity>
          </View>

          <View style={styles.submitView} >
              <TouchableOpacity 
                style={styles.submit}
              >
                  <Text style={styles.submitText} >E N T R A R</Text>
              </TouchableOpacity>
          </View>

        </View>
 
        <View style={styles.footer} >
          
          <Text style={styles.text1} >Ainda não tem conta? </Text>
          
          <TouchableOpacity
            style={{ marginLeft: 8, }}
            onPress={ () => navigation.navigate('LogOn')}
          >
              <Text style={styles.text2} >C A D A S T R E - S E</Text>
          </TouchableOpacity>

        </View>
   </KeyboardAvoidingView>
  );
}
