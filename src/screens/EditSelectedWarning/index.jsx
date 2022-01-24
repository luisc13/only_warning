import React, { useEffect } from "react";
import { View, SafeAreaView, Text, TextInput, Keyboard } from "react-native";
import { styles } from "./styles";
import { ExitButton } from "../../components/ExitButton";
import { useNavigation, useRoute } from "@react-navigation/native";
import api from "../../services/api";
import { ConfirmButton } from "../../components/ConfirmButton";

export function EditSelectedWarning() {
  navigation = useNavigation();
  const route = useRoute();
  const { warning } = route.params;

  const [content, setContent] = React.useState("");
  const [title, setTitle] = React.useState("");

  useEffect(() => {
    setContent(warning.content);
    setTitle(warning.title);
  }, [warning]);

  async function handleSubmit() {
    try {
      await api.put(`/update/warnings`, {
        id: warning.id,
        title,
        content,
      });
      navigation.navigate("EditWarnings");
    } catch (error) {}
  }

  function handleGoBack() {
    navigation.navigate("EditWarnings");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText} onPress={Keyboard.dismiss}>Adicionar avisos</Text>
        <ExitButton onPress={handleGoBack} />
      </View>
      <TextInput
        placeholder="Título"
        placeholderColor="#c4c3cb"
        style={styles.titleInput}
        value={title}
        onChangeText={(e) => setTitle(e)}
      />
      <TextInput
        placeholder="Conteúdo"
        placeholderColor="#c4c3cb"
        style={styles.contentInput}
        value={content}
        onChangeText={(e) => setContent(e)}
      />
      <ConfirmButton onPress={handleSubmit} />
    </SafeAreaView>
  );
}
