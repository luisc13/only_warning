import { StyleSheet } from "react-native";
import { theme } from "../../global/themes/styles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: theme.colors.white,
  },
  header: {
    width: "100%",
    paddingHorizontal: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    marginBottom: 42,
  },
  headerText: {
    fontSize: 30,
    fontWeight: "400",
  },
  warnings: {
    width: 350,
    minHeight: 70,
    maxHeight: 500,
    backgroundColor: theme.colors.Gray,
    marginTop: 20,
    marginBottom: 10,
    alignItems: "center",
    borderRadius: 3,
    justifyContent: "space-between",
    alignSelf: "center"
  },
  warningTitle: {
    fontSize: 20,
    fontWeight: "300",
  },
  warningContent: {
    fontSize: 16,
    fontWeight: "300",
  },
  divider: {
    width: 370,
    height: 4,
    borderColor: theme.colors.Gray,
    backgroundColor: theme.colors.Gray,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 2,
  },
  image:{
    width: 30,
    height: 30,
  }
});
