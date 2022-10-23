import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';

export interface MainProps {
  correctText: string;
  inputText: string;
  setEnteredText: (newText: string) => void;
  enteredText: string;
}

export interface TimerProps {
  count: number;
}
