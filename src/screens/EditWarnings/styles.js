import { StyleSheet } from "react-native";
import { theme } from "../../global/themes/styles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: theme.colors.white,
    paddingHorizontal: 10,
  },
  header: {
    width: "100%",
    paddingHorizontal: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40,
    marginBottom: 42,
  },
  headerText: {
    fontSize: 30,
    fontWeight: "400",
  },
  warnings: {
    width: 400,
    minHeight: 70,
    maxHeight: 500,
    backgroundColor: theme.colors.Gray,
    marginTop: 20,
    marginBottom: 10,
    alignItems: "center",
    borderRadius: 8,
    justifyContent: "space-between",
    padding: 5,
  },
  warningTitle: {
    fontSize: 20,
    fontWeight: "300",
  },
  warningContent: {
    fontSize: 16,
    fontWeight: "300",
  },
});
