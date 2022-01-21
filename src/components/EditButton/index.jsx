import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import EditImage from "../../assets/edit.png";

export function EditButton(props) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.9} {...props}>
      <Image source={EditImage} style={styles.icon} />
    </TouchableOpacity>
  );
}
