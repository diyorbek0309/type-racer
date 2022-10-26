import { Text, View } from 'react-native';
import { ResultProps } from '../types/Props.interface';
import { styles } from '../styles/ResultStyle';

const Result = ({ wpm, percent, isLight }: ResultProps) => {
  return (
    <View style={isLight ? styles.ResultLight : styles.ResultDark}>
      <Text style={isLight ? styles.ResultTextLight : styles.ResultTextDark}>
        Your result:{' '}
      </Text>
      <Text style={isLight ? styles.ResultTextLight : styles.ResultTextDark}>
        {wpm} WPM
      </Text>
      <Text style={isLight ? styles.ResultTextLight : styles.ResultTextDark}>
        {percent}% done
      </Text>
    </View>
  );
};

export default Result;
