import React from "react";

import { View, SafeAreaView, Text, Image } from "react-native";
import { styles } from "./styles";
import { AddButton } from "../../components/AddButton";
import { RemoveButton } from "../../components/RemoveButton";
import { EditButton } from "../../components/EditButton";
import { ScrollView } from "react-native-gesture-handler";
import { ExitButton } from "../../components/ExitButton";
import { useNavigation } from "@react-navigation/native";
import { useFocusEffect } from "@react-navigation/native";
import api from "../../services/api";
import AlertImg from "../../assets/alert.svg";

export function Home() {
  const navigate = useNavigation();
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
    }, [])
  );

  function handleExit() {
    navigate.navigate("SignIn");
  }
  function handleGoAddWarning() {
    navigate.navigate("AddWarnings");
  }
  function handleGoRemoveWarning() {
    navigate.navigate("RemoveWarnings");
  }

  function handleGoEditWarning() {
    navigate.navigate("EditWarnings");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.alertText}>
        <Text style={styles.headerText}>Avisos</Text>
        <AlertImg width={30} height={30} style={styles.alertIcon}/>
        </View>
        <ExitButton onPress={handleExit} />
      </View>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingBottom: 80,
          paddingHorizontal: 20,
        }}
        style={{ marginBottom: 30 }}
        showsHorizontalScrollIndicator={false}
      >
        <AddButton onPress={handleGoAddWarning} />
        <RemoveButton onPress={handleGoRemoveWarning} />
        <EditButton onPress={handleGoEditWarning} />
      </ScrollView>

      <ScrollView showsVerticalScrollIndicator={false}>
        {warnings.map((warning) => (
          <View key={warning.id}>
            <View style={styles.warnings} >
              <Text style={styles.warningTitle}>{warning.title}</Text>
              <Text style={styles.warningContent}> {warning.content}</Text>
            </View>
            <View style={styles.divider}></View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
