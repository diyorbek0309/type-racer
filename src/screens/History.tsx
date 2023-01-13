import { useEffect, useState } from 'react';
import { View, Text, VirtualizedList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IResult } from '../types/Props.interface';
import { eResults } from '../types/enums';

const History = () => {
  const [results, setResults] = useState<IResult[] | []>([]);
  useEffect(() => {
    getResults();
  }, []);

  const getResults = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(eResults.RESULTS);
      if (jsonValue) {
        setResults(JSON.parse(jsonValue));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getItem = (data: any, index: number) => ({
    id: Math.random().toString(12).substring(0),
    ...data[0],
  });
  const getItemCount = (data: any) => 1;

  const Item = ({ date, wpm, percent }: IResult) => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>WPM: {wpm}</Text>
        <Text style={styles.title}>Percent: {percent}</Text>
        <Text style={styles.title}>{`${new Date(date).getHours()}:${new Date(
          date,
        ).getMinutes()} ${new Date(date).getDay()}`}</Text>
      </View>
    );
  };

  return (
    <View>
      {results && results.length > 0 ? (
        <VirtualizedList
          data={results}
          initialNumToRender={1}
          renderItem={({ item }) => {
            return (
              <Item date={item.date} wpm={item.wpm} percent={item.percent} />
            );
          }}
          getItemCount={getItemCount}
          getItem={getItem}
        />
      ) : (
        <Text>No results</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    height: 150,
    justifyContent: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 20,
  },
  title: {
    fontSize: 32,
  },
});

export default History;
