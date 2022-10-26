import { View, Text } from 'react-native';
import { TimerProps } from '../types/Props.interface';

const Timer = ({ count, isLight }: TimerProps) => {
  return (
    <View>
      <Text style={{ fontSize: 24, color: isLight ? '#000' : '#fff' }}>
        {count}
      </Text>
    </View>
  );
};

export default Timer;
