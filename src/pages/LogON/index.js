import React, {useState, useContext} from 'react';
import { View, Text, KeyboardAvoidingView, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';

import { styles } from './style';
import { Feather } from '@expo/vector-icons';
import { theme } from '../../global/theme';

import { AuthContext } from '../../contexts/auth';
import { useNavigation } from '@react-navigation/native';

export default function LogON() {
  
  const navigation = useNavigation();
  const { singUp, loadingAuth } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');

  const [mensage, setMensage] = useState('');

  function cadastar(){

    if(nome == ''){
      setMensage('Você precisa Adicionar um nome');
      return
    }{
      if(email == ''){
        setMensage('Você precisa adicionar um email');
        return
      }{
        if(senha == ''){
          setMensage('Escolha uma senha');
          return
        }{
          singUp(nome, email, senha);
        }
      }
    }
  }
  
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
                    placeholder='Seu nome'
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={nome}
                    onChangeText={ (text)=> setNome(text)}
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
                    placeholder='Seu email'
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={email}
                    onChangeText={ (text) => setEmail(text)}
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
                    placeholder='Sua senha'
                    keyboardType={'numeric'}
                    secureTextEntry={true}
                    autoCapitalize='none'
                    autoCorrect={false}
                    onChangeText={ (text) => setSenha(text)}
                  />
            </View>
            <Text style={{ color: theme.colors.teste3, fontSize: 16, fontWeight: 'bold' }} >
              {mensage}
            </Text>


        </View>
           
            <View style={styles.submitView} >
              <TouchableOpacity
                style={styles.submit}
                onPress={ () => cadastar()}
              >

                {loadingAuth ? 
                    <ActivityIndicator size={22} color={theme.colors.teste3} />
                  :                
                <Text style={styles.submitText} >C A D A S T R A R</Text>
                }

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
