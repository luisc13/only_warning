import React, { useEffect } from "react";

import { View, SafeAreaView, Text } from "react-native";
import { styles } from "./styles";
import { ExitButton } from "../../components/ExitButton";
import { useNavigation } from "@react-navigation/native";
import api from "../../services/api";
import { useFocusEffect } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";

export function UserHome() {
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

  function handleLogout() {
    navigation.navigate("SignIn");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Avisos</Text>
        <ExitButton onPress={handleLogout} />
      </View>
      <ScrollView>
        {warnings.map((warning) => (
          <View style={styles.warnings} key={warning.id}>
            <Text style={styles.warningTitle}>{warning.title}</Text>
            <Text style={styles.warningContent}>{warning.content}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
