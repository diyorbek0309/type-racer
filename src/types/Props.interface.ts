import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';

export interface MainProps {
  correctText: string;
  inputText: string;
  setText: (newText: string) => void;
}

export interface TimerProps {
  count: number;
}
