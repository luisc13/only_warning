import { StyleSheet } from 'react-native';
import { theme } from '../../global/themes/styles';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.Yellow,
    borderRadius: 5,
    height: 45,
    marginTop: 10,
    width: 350,
    alignItems: "center",
    justifyContent: "center"
  }
});