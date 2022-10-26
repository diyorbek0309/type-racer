import { useState, useRef, useEffect } from 'react';
import {
  TouchableOpacity,
  Image,
  View,
  ScrollView,
  TextInput,
  Text,
} from 'react-native';
import Timer from '../components/Timer';
import { dummyText } from '../data';
import Result from './Result';
import { styles } from '../styles/HomeStyle';

const Home = ({ navigation }: any) => {
  let [correctText, setCorrectText] = useState('');
  let [enteredText, setEnteredText] = useState('');
  let [bool, setBool] = useState(true);
  let [count, setCount] = useState(6);
  let [working, setWorking] = useState(true);
  const funRef = useRef<null | NodeJS.Timeout>(null);
  let [isLight, setIsLight] = useState(true);
  const randomNumber = Math.round(Math.random() * 700);
  const [text, setText] = useState(
    dummyText.split(' ').slice(randomNumber, randomNumber + 160),
  );

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={styles.Header}>
          <TouchableOpacity onPress={() => setIsLight(true)}>
            <Image source={require('../../assets/sun_icon.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsLight(false)}>
            <Image source={require('../../assets/moon_icon.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => resetAll()}>
            <Image source={require('../../assets/refresh_icon.png')} />
          </TouchableOpacity>
          <Timer count={count} />
        </View>
      ),
    });
  }, [navigation, count]);

  const handleChange = (newWord: string) => {
    setEnteredText(newWord);
    if (newWord === text[0] + ' ') {
      setEnteredText('');
      setCorrectText(correctText + text[0] + ' ');
      setText(text.slice(1, text.length));
    }

    if (bool) {
      funRef.current = setInterval(() => {
        if (count === 0) {
          clearInterval(funRef.current as NodeJS.Timeout);
          setWorking(false);
        } else {
          setCount(--count);
        }
      }, 1000);
      setBool(false);
    }
  };

  const resetAll = () => {
    let randomNumber = Math.round(Math.random() * 700);
    clearInterval(funRef.current as NodeJS.Timeout);

    correctText
      .split(' ')
      .reverse()
      .forEach((word) => {
        if (word.trim() !== '') text.unshift(word);
      });
    setCorrectText('');
    setCount(6);
    setBool(true);
    setWorking(true);
    setText(dummyText.split(' ').slice(randomNumber, randomNumber + 160));
  };

  return (
    <ScrollView style={styles.Home}>
      {working ? (
        <View>
          <TextInput
            style={styles.Main_input}
            onChangeText={handleChange}
            value={enteredText}
            placeholder="Start typing..."
            autoCapitalize="none"
          />
          <View>
            <Text style={styles.correctText}>{correctText}</Text>
            <Text style={styles.inputText}>{text.join(' ')}</Text>
          </View>
        </View>
      ) : (
        <Result
          wpm={correctText.split(' ').length - 1}
          percent={Math.round(
            ((correctText.split(' ').length - 1) / text.length) * 100,
          )}
        />
      )}
    </ScrollView>
  );
};

export default Home;
