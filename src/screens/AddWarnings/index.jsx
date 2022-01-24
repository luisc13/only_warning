import React from "react";
import { View, SafeAreaView, Text, TextInput, Keyboard } from "react-native";
import { styles } from "./styles";
import { ExitButton } from "../../components/ExitButton";
import { useNavigation } from "@react-navigation/native";
import api from "../../services/api";
import { ConfirmButton } from "../../components/ConfirmButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function AddWarnings() {
  const navigation = useNavigation();
  const [content, setContent] = React.useState("");
  const [title, setTitle] = React.useState("");

  function handleLogout() {
    navigation.navigate("Home");
  }

  async function handleSubmit() {
    if (title == "" || content == "") {
      alert("Preencha todos os campos");
      return;
    }
    try {
      const value = await AsyncStorage.getItem("@userId");
      const id = Number(value);
      await api.post("/create/warnings", {
        title,
        content,
        userId: id,
      });
      alert("Aviso criado com sucesso!");
      setContent("");
      setTitle("");
    } catch (error) {
      alert(error.message);
      return;
    }
  }

  return (
    <SafeAreaView style={styles.container} onPress={Keyboard.dismiss}>
      <View style={styles.header}>
        <Text style={styles.headerText} onPress={Keyboard.dismiss}>Adicionar avisos</Text>
        <ExitButton onPress={handleLogout} />
      </View>
      <TextInput
        placeholder="Título"
        placeholderColor="#c4c3cb"
        style={styles.titleInput}
        onChangeText={(e) => setTitle(e)}
        value={title}
      />
      <TextInput
        multiline={true}
        placeholder="Conteúdo"
        placeholderColor="#c4c3cb"
        style={styles.contentInput}
        onChangeText={(e) => setContent(e)}
        value={content}
      />
      <ConfirmButton onPress={handleSubmit} />
    </SafeAreaView>
  );
}
