import { View, Text } from 'react-native';
import { TimerProps } from '../types/Props.interface';
import { eColors } from '../types/enums';

const Timer = ({ count, isLight }: TimerProps) => {
  return (
    <View>
      <Text
        style={{ fontSize: 24, color: isLight ? eColors.BLACK : eColors.WHITE }}
      >
        {count}
      </Text>
    </View>
  );
};

export default Timer;
