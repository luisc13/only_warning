import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";
import RemoveImage from "../../assets/minus-square.svg";

export function RemoveButton(props) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.9} {...props}>
      <RemoveImage width={30} height={30} style={styles.icon}/>
      <Text style={styles.text}>Excluir</Text>
    </TouchableOpacity>
  );
}
