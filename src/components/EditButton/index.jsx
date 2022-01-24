import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";
import EditImage from "../../assets/document-text.svg";

export function EditButton(props) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.9} {...props}>
      <EditImage width={30} height={30} style={styles.icon}/>
      <Text style={styles.text}>Alterar</Text>
    </TouchableOpacity>
  );
}
