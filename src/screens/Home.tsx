import { useState } from 'react';
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
  let [bool, setBool] = useState(true);
  let [bool1, setBool1] = useState(true);
  let [count, setCount] = useState(60);
  let [working, setWorking] = useState(true);
  // let [isLight, setIsLight] = useState(true);
  // let [isArial, setIsArial] = useState(true);
  const [modalIsOpen, setIsOpen] = useState(false);
  let [fullName, setFullName] = useState({ firstName: '', lastName: '' });

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

  const handleChange = (inputText: string) => {
    // setBool(true);

    if (inputText === text[0] + ' ') {
      inputText = '';
      correctText += text[0] + ' ';
      setCorrectText(correctText);
      setSplittedText(text.slice(1, text.length));
    }
    console.log(bool);

    if (bool) {
      const timer = setInterval(() => {
        if (count === 0) {
          clearInterval(timer);
          setWorking(false);
        } else {
          setCount(--count);
          console.log(count);
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
    const highestTimeoutId = setTimeout(';');
    let randomNumber = Math.round(Math.random() * 700);

    // correctText
    //   .split(' ')
    //   .reverse()
    //   .forEach((word) => {
    //     if (word.trim() !== '') splittedText.unshift(word);
    //   });
    // setCorrectText('');
    for (let i = 0; i < highestTimeoutId; i++) {
      clearTimeout(i);
    }
    setCount(60);
    setBool(true);
    setText(dummyText.split(' ').slice(randomNumber, randomNumber + 160));
  };

  return (
    <View style={styles.Home}>
      <Main
        inputText={splittedText.join(' ')}
        correctText={correctText}
        setText={handleChange}
      />
      <Timer count={count} />
      <Button title="REFRESH" onPress={resetAll} />
    </View>
  );
};

const styles = StyleSheet.create({
  Home: {
    height: 90,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
});

export default Home;
