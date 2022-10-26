import { Text, View } from 'react-native';
import { ResultProps } from '../types/Props.interface';

const Result = ({ wpm, percent }: ResultProps) => {
  return (
    <View>
      <Text>Your result: </Text>
      <Text>{wpm} WPM</Text>
      <Text>{percent}%</Text>
    </View>
  );
};

export default Result;
