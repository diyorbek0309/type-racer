import { useState, useRef, useEffect } from 'react';
import { StyleSheet, Button, View } from 'react-native';
import Main from '../components/Main';
import Timer from '../components/Timer';
import { dummyText } from '../data';

const customStyles = {
  content: {
    width: 400,
    fontSize: 24,
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const Home = () => {
  const randomNumber = Math.round(Math.random() * 700);
  const [text, setText] = useState(
    dummyText.split(' ').slice(randomNumber, randomNumber + 160),
  );
  let [correctText, setCorrectText] = useState('');
  let [splittedText, setSplittedText] = useState(text);
  let [enteredText, setEnteredText] = useState('');
  let [bool, setBool] = useState(true);
  // let [bool1, setBool1] = useState(true);
  let [count, setCount] = useState(60);
  let [working, setWorking] = useState(true);
  const funRef = useRef<null | NodeJS.Timeout>(null);
  // let [isLight, setIsLight] = useState(true);
  // let [isArial, setIsArial] = useState(true);
  // const [modalIsOpen, setIsOpen] = useState(false);
  // let [fullName, setFullName] = useState({ firstName: '', lastName: '' });

  // let firstNameInputRef = useRef(null);
  // let lastNameInputRef = useRef(null);

  // useEffect(() => {
  //   if (localStorage.getItem('firstName') === null) {
  //     setIsOpen(true);
  //   } else {
  //     setFullName({
  //       firstName: localStorage.getItem('firstName'),
  //       lastName: localStorage.getItem('lastName'),
  //     });
  //   }
  // }, []);

  // function afterOpenModal() {
  //   subtitle.style.color = '#f00';
  // }

  const handleChange = (newWord: string) => {
    setEnteredText(newWord);
    // setBool(true);
    console.log(newWord, text[0]);

    if (newWord === text[0] + ' ') {
      setEnteredText('');
      correctText += text[0] + ' ';
      setCorrectText(correctText);
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

  // const toggleArial = () => {
  //   setIsArial(true);
  // };

  // const toggleTimes = () => {
  //   setIsArial(false);
  // };

  // const toggleLight = () => {
  //   setIsLight(true);
  // };

  // const toggleDark = () => {
  //   setIsLight(false);
  // };

  const resetAll = () => {
    let randomNumber = Math.round(Math.random() * 700);
    clearInterval(funRef.current as NodeJS.Timeout);

    correctText
      .split(' ')
      .reverse()
      .forEach((word) => {
        if (word.trim() !== '') splittedText.unshift(word);
      });
    setCorrectText('');
    setCount(60);
    setBool(true);
    setText(dummyText.split(' ').slice(randomNumber, randomNumber + 160));
  };

  return (
    <View style={styles.Home}>
      <Main
        inputText={text.join(' ')}
        correctText={correctText}
        setEnteredText={handleChange}
        enteredText={enteredText}
      />
      <Timer count={count} />
      <Button title="REFRESH" onPress={resetAll} />
    </View>
  );
};

const styles = StyleSheet.create({
  Home: {
    height: "80%",
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "flex-start",
    padding: 20,
  },
});

export default Home;
