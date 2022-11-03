import { useEffect, useState } from 'react';
import { View, Text, VirtualizedList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IResult } from '../types/Props.interface';

const History = () => {
  const [results, setResults] = useState<IResult | []>([]);
  useEffect(() => {
    getResults();
  }, []);

  const getResults = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('results');
      if (jsonValue) {
        setResults(JSON.parse(jsonValue));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getItemCount = () => 50;

  const getItem = (data: any, index: any) => ({
    id: Math.random().toString(12).substring(0),
    title: `Item ${index + 1}`,
  });

  return (
    <View>
      <Text>History</Text>
      <VirtualizedList
        data={results}
        renderItem={({ item }: any) => (
          <Text>
            {item.wpm}
            {item.percent}
            {item.date}
          </Text>
        )}
        getItemCount={getItemCount}
        getItem={getItem}
      />
    </View>
  );
};

export default History;
