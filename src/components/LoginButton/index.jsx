import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import { styles } from './styles';

export function LoginButton(props){
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.9} {...props}>
        <Text>Login</Text>
        </TouchableOpacity>
      );
}