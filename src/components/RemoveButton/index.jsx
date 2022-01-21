import React from 'react';
import {
  Image,
  TouchableOpacity
} from 'react-native';
import { styles } from './styles';
import RemoveImage from '../../assets/remove.png';

export function RemoveButton(props){
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.9} {...props}>
        <Image source={RemoveImage} style={styles.icon}/>
        </TouchableOpacity>
      );
}