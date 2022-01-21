import { StyleSheet } from 'react-native';
import { theme } from '../../global/themes/styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  logoText: {
    fontSize: 40,
    fontWeight: "800",
    marginTop: 70,
    marginBottom: 30,
    textAlign: "center",
  },
  loginInput: {
    width: 300,
    height: 43,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: theme.colors.Snow,
    backgroundColor: theme.colors.white,
    paddingLeft: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  Icon:{
    width: 200,
    height: 100,
    marginTop: 50,
  }
});