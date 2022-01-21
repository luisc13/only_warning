import { useNavigation } from '@react-navigation/native';
import React from 'react';

import {
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  Picker
} from 'react-native';
import {RegisterButton} from '../../components/RegisterButton';
import { ReturnButton } from '../../components/ReturnButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../services/api';
import { styles } from './styles';

export function Register(){
  const navigation = useNavigation();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [type, setType] = React.useState('user');

  async function handleRegister(){
    try {
      const response = await api.post('/create/user', {type, username, password});
      await AsyncStorage.setItem('@userId', String(response.data.id));
      if(response.data.type === 'admin'){
        navigation.navigate('Home');
      } else {
        navigation.navigate('UserHome');
      }
    } catch (error) {
      return alert("Usuário já existe");
    }
  }

  function handleGoback(){
    navigation.navigate('SignIn');
  }
  return (
    <KeyboardAvoidingView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Text style={styles.logoText}>Cadastrar-se</Text>
      </TouchableWithoutFeedback>
      <TextInput placeholder="Username" placeholderColor="#c4c3cb" style={styles.loginInput} onChangeText={(e) => setUsername(e)}/>
      <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginInput} secureTextEntry={true} onChangeText={ (e) =>setPassword(e)}/>
      <Picker
        selectedValue={type}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue) => setType(itemValue)}
      >
      <Picker.Item label="Admin" value="admin" />
      <Picker.Item label="User" value="user" />
      </Picker>
      <RegisterButton onPress={handleRegister}/>
      <ReturnButton onPress={handleGoback}/>
    </KeyboardAvoidingView>
  );
}