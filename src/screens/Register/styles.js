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
    marginTop: 150,
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
    marginBottom: 10,
  },
  pickerContainer: {
    width: 200,
    height: 40,
    borderRadius: 5,
    backgroundColor: theme.colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  userPicker:{
    height: 50,
    width: 150,
  }
});