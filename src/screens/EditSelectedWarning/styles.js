import { StyleSheet } from "react-native";
import { theme } from "../../global/themes/styles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: theme.colors.Gray,
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
  titleText: {
    fontSize: 20,
    fontWeight: "200",
  },
  warnings: {
    width: 400,
    height: 70,
    backgroundColor: "#fff",
    marginTop: 20,
    alignItems: "center",
    borderRadius: 8,
    justifyContent: "space-between",
  },
  titleInput: {
    width: 200,
    height: 43,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: theme.colors.Snow,
    backgroundColor: theme.colors.white,
    paddingLeft: 10,
    marginTop: 10,
    marginBottom: 5,
  },
  contentInput: {
    width: 300,
    height: 150,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: theme.colors.Snow,
    backgroundColor: theme.colors.white,
    paddingLeft: 10,
    marginTop: 5,
    marginBottom: 5,
  },
});
