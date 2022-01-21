import React from "react";
import { Image, TouchableOpacity } from "react-native";
import AddImage from "../../assets/add.png";

import { styles } from "./styles";

export function AddButton(props) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.9} {...props}>
      <Image source={AddImage} style={styles.icon} />
    </TouchableOpacity>
  );
}
