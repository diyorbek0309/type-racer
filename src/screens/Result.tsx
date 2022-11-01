import { Text, View } from 'react-native';
import { ResultProps } from '../types/Props.interface';
import { styles } from '../styles/ResultStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';

const Result = ({ wpm, percent, isLight }: ResultProps) => {
  let results: { wpm: number; percent: number }[] = [];
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      await AsyncStorage.getItem('results').then((data) => {
        if (data) {
          results = JSON.parse(data);
          console.log(results);
        }
        saveData();
      });
      results.push({ wpm, percent });
    } catch (error) {
      console.log(error);
    }
  };

  const saveData = async () => {
    try {
      const jsonValue = JSON.stringify(results);
      await AsyncStorage.setItem('results', jsonValue);
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
