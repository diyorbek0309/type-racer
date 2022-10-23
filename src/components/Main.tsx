import { StyleSheet, Text, View, TextInput } from 'react-native';
import { MainProps } from '../types/Props.interface';

const HMain = ({
  correctText,
  inputText,
  setEnteredText,
  enteredText,
}: MainProps) => {
  return (
    <View style={styles.HMain}>
      <TextInput
        style={styles.Main_input}
        onChangeText={setEnteredText}
        value={enteredText}
      />
      <View>
        <Text style={styles.correctText}>{correctText}</Text>
        <Text style={styles.inputText}>{inputText}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  HMain: {
    width: '70%',
  },
  Main_input: {
    fontSize: 32,
    borderBottom: '#656565 solid 2px',
    backgroundColor: '#fff',
    color: '#000',
  },
  correctText: {
    color: '#00ff00',
    fontSize: 20,
    lineHeight: 24,
  },
  inputText: {
    fontSize: 20,
    lineHeight: 24,
  },
});

export default HMain;
