import { useEffect } from 'react';
import { Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from '../styles/ResultStyle';
import { ResultProps, IResult } from '../types/Props.interface';
import { eResults } from '../types/enums';

const Result = ({ wpm, percent, isLight }: ResultProps) => {
  let results: IResult[] = [];
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      await AsyncStorage.getItem(eResults.RESULTS).then((data) => {
        if (data) {
          results = JSON.parse(data);
        }
      });
      results.push({ wpm, percent, date: Date.now() });
      saveData();
    } catch (error) {
      console.log(error);
    }
  };

  const saveData = async () => {
    try {
      const jsonValue = JSON.stringify(results);
      await AsyncStorage.setItem(eResults.RESULTS, jsonValue);
    } catch (error) {
      console.log(error);
    }
  };

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
