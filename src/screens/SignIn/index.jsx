import React from 'react';
import {
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  Image,
} from 'react-native';
import {LoginButton} from '../../components/LoginButton';
import {RegisterButton} from '../../components/RegisterButton';
import midiaImg from '../../assets/midia.png';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function SignIn(){
  const navigation = useNavigation();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  
  async function handleLogin(){
    try {
      const response = await api.post('/login', {
        username,
        password
      });
      await AsyncStorage.setItem('@userId', String(response.data.id));
      if(response.data.type === 'admin'){
        navigation.navigate('Home');
      } else {
        navigation.navigate('UserHome');
      }
    } catch (error) {
      alert('Usuário ou senha incorretos');
      return
    }
  }
  function handleGoRegister(){
    navigation.navigate('Register');
  }
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Image source={midiaImg} style={styles.Icon}/>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <>
      <Text style={styles.logoText}>Login</Text>
      <TextInput placeholder="Username" placeholderColor="#c4c3cb" style={styles.loginInput} onChangeText={(e) => setUsername(e)}/>
      <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginInput} secureTextEntry={true} onChangeText={(e) => setPassword(e)}/>
      </>
      </TouchableWithoutFeedback>
      <LoginButton onPress={handleLogin}/>
      <RegisterButton onPress={handleGoRegister}/>
    </KeyboardAvoidingView>
  );
}