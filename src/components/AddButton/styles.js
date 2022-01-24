import { StyleSheet } from "react-native";
import { theme } from "../../global/themes/styles";
export const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#000',
    backgroundColor: theme.colors.Gray,
    alignItems: "center",
    marginTop: 60,
    marginLeft: 30,
  },
  icon: {
    marginLeft: 80,
    marginTop: 5,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 30,
  }
});
