import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';

export interface MainProps {
  correctText: string;
  text: string;
  setText: (newText: string) => void;
}

export interface TimerProps {
  count: number;
}
