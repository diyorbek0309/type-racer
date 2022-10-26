import { View, Text } from 'react-native';
import { TimerProps } from '../types/Props.interface';

const Timer = ({ count }: TimerProps) => {
  return (
    <View>
      <Text style={{ fontSize: 24 }}>{count}</Text>
    </View>
  );
};

export default Timer;
