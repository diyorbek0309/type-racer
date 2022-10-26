import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  HomeLight: {
    height: '80%',
    width: '100%',
    display: 'flex',
    padding: 20,
  },
  HomeDark: {
    height: '80%',
    width: '100%',
    display: 'flex',
    padding: 20,
    backgroundColor: '#000',
  },
  Header: {
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Main_input: {
    fontSize: 22,
    border: 'none',
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    backgroundColor: '#ddd',
    color: '#000',
    padding: 2,
    marginBottom: 20,
  },
  correctText: {
    color: '#00ff00',
    fontSize: 20,
    lineHeight: 24,
  },
  inputTextLight: {
    fontSize: 20,
    lineHeight: 24,
    textAlign: 'justify',
    color: '#000',
  },
  inputTextDark: {
    fontSize: 20,
    lineHeight: 24,
    textAlign: 'justify',
    color: '#fff',
  },
  Button: {
    backgroundColor: '#fff',
    padding: 2,
    borderRadius: 4,
  },
});
