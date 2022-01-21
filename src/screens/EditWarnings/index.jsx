import React, { useEffect } from "react";

import { View, SafeAreaView, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { ExitButton } from "../../components/ExitButton";
import { useNavigation } from "@react-navigation/native";
import api from "../../services/api";
import { useFocusEffect } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";

export function EditWarnings() {
  navigation = useNavigation();
  const [warnings, setWarnings] = React.useState([]);

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
        <Text style={styles.headerText}>Editar Aviso</Text>
        <ExitButton onPress={handleGoBack} />
      </View>
      <ScrollView>
        <Text>Clique em um aviso para edita-lo</Text>
        {warnings.map((warning) => (
          <TouchableOpacity
            style={styles.warnings}
            key={warning.id}
            onPress={() =>
              navigation.navigate("EditSelectedWarning", { warning })
            }
          >
            <Text style={styles.warningTitle}>{warning.title}</Text>
            <Text style={styles.warningContent}>{warning.content}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
