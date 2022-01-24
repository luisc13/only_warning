import React from "react";

import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";
import { styles } from "./styles";
import { GoBackButton } from "../../components/GoBackButton";
import { useNavigation } from "@react-navigation/native";
import api from "../../services/api";
import { ScrollView } from "react-native-gesture-handler";
import { useFocusEffect } from "@react-navigation/native";

export function RemoveWarnings() {
  navigation = useNavigation();
  const [warnings, setWarnings] = React.useState([]);

  async function DeleteWarning(id) {
    Alert.alert(
      "Deletar aviso",
      "Deseja deletar este aviso?",
      [
        {
          text: "Cancelar",
          onPress: () => Alert.alert("Exclusão cancelada"),
          style: "cancel",
        },
        {
          text: "Confirmar",
          onPress: async () => {
            try {
              await api.post("/delete/warnings", { id });
              alert("Aviso deletado com sucesso!");
              navigation.navigate("Home");
            } catch (err) {
              alert(err.message);
              return;
            }
          },
        },
      ],
      {
        cancelable: true,
        onDismiss: () => Alert.alert("Exclusão cancelada"),
      }
    );
  }

  useFocusEffect(
    React.useCallback(() => {
      async function loadWarnings() {
        try {
          const response = await api.get("/warnings");
          setWarnings(response.data);
        } catch (err) {
          alert(err.message);
          return;
        }
      }
      loadWarnings();
    }, [warnings])
  );

  function handleGoBack() {
    navigation.navigate("Home");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Remover Aviso</Text>
        <GoBackButton onPress={handleGoBack} />
      </View>
      <ScrollView>
        <Text>Clique em um aviso para remove-lo</Text>
        {warnings.map((warning) => (
          <TouchableOpacity
            style={styles.warnings}
            key={warning.id}
            onPress={() => DeleteWarning(warning.id)}
          >
            <Text style={styles.warningTitle}>{warning.title}</Text>
            <Text style={styles.warningContent}>{warning.content}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
