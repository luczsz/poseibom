import React from 'react';
import { View, Text, KeyboardAvoidingView, TouchableOpacity, TextInput } from 'react-native';

import { styles } from './style';
import { Feather } from '@expo/vector-icons';
import { theme } from '../../global/theme';

import { useNavigation } from '@react-navigation/native';

export default function LogON() {
  
  const navigation = useNavigation();
  
  return (
   <KeyboardAvoidingView style={styles.container}>

        <View style={styles.header} >

          <TouchableOpacity style={styles.backBnt} activeOpacity={0.6}  >  
              <Feather
                name='arrow-left'
                size={30}
                color={theme.colors.primary}
              />
          </TouchableOpacity>

          <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'white' }} > 
            C A D A S T R O 
          </Text>
        </View>

        <View style={styles.inputs} >
            
            <View style={styles.input} >
                  <Feather
                    name='user'
                    size={30}
                    color={ theme.colors.in }
                    style={{ marginRight: 12, }}
                  />
                  <TextInput      
                    style={{ width: '85%', height: 50  }}
                    placeholder='Nome'
                  />
            </View>

            <View style={styles.input} >
                  <Feather
                    name='mail'
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
                    name='key'
                    size={30}
                    color={ theme.colors.in }
                    style={{ marginRight: 12, }}
                  />
                  <TextInput      
                    style={{ width: '85%', height: 50  }}
                    placeholder='Senha'
                  />
            </View>


        </View>
           
            <View style={styles.submitView} >
              <TouchableOpacity
                style={styles.submit}
              >
                  <Text style={styles.submitText} >C A D A S T R A R</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.footer} >
          
          <Text style={styles.text1} >Já tem uma conta? </Text>
          
          <TouchableOpacity
            style={{ marginLeft: 8, }}
            onPress={ () => navigation.navigate('Login')}
          >
              <Text style={styles.text2} > E N T R E ! </Text>
          </TouchableOpacity>

        </View>



   </KeyboardAvoidingView>
  );
}
