import { useState, useRef, useEffect } from 'react';
import { View, ScrollView, TextInput, Text } from 'react-native';
import Result from './Result';
import Timer from '../components/Timer';
import CustomBtn from '../components/CustomBtn';
import { dummyText } from '../data';
import { styles } from '../styles/HomeStyle';

const Home = ({ navigation }: any) => {
  let [count, setCount] = useState(60);
  const [correctText, setCorrectText] = useState('');
  const [enteredText, setEnteredText] = useState('');
  const [working, setWorking] = useState(true);
  const [bool, setBool] = useState(true);
  const [isCorrect, setIsCorrect] = useState(true);
  const [isLight, setIsLight] = useState(true);
  const funRef = useRef<null | NodeJS.Timeout>(null);
  const randomNumber = Math.round(Math.random() * 700);
  const [text, setText] = useState(
    dummyText.split(' ').slice(randomNumber, randomNumber + 160),
  );

  useEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: isLight ? '#fff' : '#000',
      },
      headerTitleStyle: {
        color: isLight ? '#000' : '#fff',
      },
      headerRight: () => (
        <View style={styles.Header}>
          <CustomBtn
            pressHandler={() => setIsLight(true)}
            image={require('../../assets/sun_icon.png')}
          />
          <CustomBtn
            pressHandler={() => setIsLight(false)}
            image={require('../../assets/moon_icon.png')}
          />
          <CustomBtn
            pressHandler={() => resetAll()}
            image={require('../../assets/refresh_icon.png')}
          />
          <Timer count={count} isLight={isLight} />
        </View>
      ),
    });
  }, [navigation, count, isLight]);

  const handleChange = (newWord: string) => {
    setEnteredText(newWord);
    if (newWord === text[0] + ' ') {
      setEnteredText('');
      setIsCorrect(true);
      setCorrectText(correctText + text[0] + ' ');
      setText(text.slice(1, text.length));
    } else {
      setIsCorrect(true);
    }

    if (newWord[newWord.length - 1] === ' ') {
      setIsCorrect(false);
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
    setEnteredText('');
    setCount(60);
    setBool(true);
    setWorking(true);
    setText(dummyText.split(' ').slice(randomNumber, randomNumber + 160));
  };

  return (
    <ScrollView style={isLight ? styles.HomeLight : styles.HomeDark}>
      {working ? (
        <View>
          <TextInput
            style={[
              styles.Main_input,
              isCorrect ? styles.Main_input : styles.Main_input_red,
            ]}
            onChangeText={handleChange}
            value={enteredText}
            placeholder="Start typing..."
            autoCapitalize="none"
          />
          <View>
            <Text style={styles.correctText}>{correctText}</Text>
            <Text
              style={isLight ? styles.inputTextLight : styles.inputTextDark}
            >
              {text.join(' ')}
            </Text>
          </View>
        </View>
      ) : (
        <Result
          wpm={correctText.split(' ').length - 1}
          percent={Math.round(
            ((correctText.split(' ').length - 1) / text.length) * 100,
          )}
          isLight={isLight}
        />
      )}
    </ScrollView>
  );
};

export default Home;
