import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  Home: {
    height: '80%',
    width: '100%',
    display: 'flex',
    padding: 20,
  },
  Header: {
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Main_input: {
    fontSize: 22,
    border: "none",
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
  inputText: {
    fontSize: 20,
    lineHeight: 24,
    textAlign: 'justify',
  },
});
