import { useEffect } from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const History = () => {
  useEffect(() => {
    getResults();
  }, [])

  const getResults = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('results');
      console.log(jsonValue);
      
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View>
      <Text>History</Text>
    </View>
  );
};

export default History;
