import { StyleSheet, Text, View, TextInput } from 'react-native';
// import styles from './Home.module.css';
import { MainProps } from '../types/Props.interface';

const HMain = ({ correctText, text, setText }: MainProps) => {
  return (
    <View style={styles.HMain}>
      <TextInput style={styles.Main_input} onChangeText={newText => setText(newText)} />
      <View>
        <Text style={styles.correctText}>{correctText}</Text>
        <Text>{text}</Text>
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
    fontSize: 32,
    lineHeight: 48,
  },
});

export default HMain;
