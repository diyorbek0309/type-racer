import { View, Text } from 'react-native';
import { TimerProps } from '../types/Props.interface';

const Timer = ({ count }: TimerProps) => {
  console.log(count);

  return (
    <View>
      <Text>{count}</Text>
    </View>
  );
};

export default Timer;
