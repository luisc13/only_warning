import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export function ConfirmButton(props) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.9} {...props}>
      <Text>Confirmar</Text>
    </TouchableOpacity>
  );
}
