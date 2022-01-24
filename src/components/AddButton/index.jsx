import React from "react";
import { TouchableOpacity,Text } from "react-native";
import AddImage from "../../assets/add-square.svg";

import { styles } from "./styles";

export function AddButton(props) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.9} {...props}>
      <AddImage width={30} height={30} style={styles.icon}/>
      <Text style={styles.text}>Inserir</Text>
    </TouchableOpacity>
  );
}
