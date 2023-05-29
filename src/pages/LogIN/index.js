import React, {useState, useContext} from 'react';
import { View, Text, KeyboardAvoidingView, Image, TextInput, TouchableOpacity } from 'react-native';

import { styles } from './style';
import { Feather } from '@expo/vector-icons';
import { theme } from '../../global/theme';

import { AuthContext } from '../../contexts/auth';
import { useNavigation } from '@react-navigation/native';

export default function LogIN() {
  
  const navigation = useNavigation();
  const { singIn } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const [mensage, setMensage] = useState('');

  function entrar(){
    if(email == ''){
      setMensage('Você precisa adicionar um email');
        return
    }{
      if(senha == ''){
        setMensage('Escolha uma senha');
        return
      }{
        singIn(email, senha);
      }
    }
  };


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
                placeholder='Seu email'
                autoCapitalize='none'
                autoCorrect={false}
                value={email}
                onChangeText={ (text) => setEmail(text)}
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
                placeholder='Sua senha'
                keyboardType={'numeric'}
                secureTextEntry={true}
                autoCapitalize='none'
                autoCorrect={false}
                onChangeText={ (text) => setSenha(text)}
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
                onPress={ () => entrar()}
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
