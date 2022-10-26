export interface TimerProps {
  count: number;
  isLight: boolean;
}

export interface ResultProps {
  wpm: number;
  percent: number;
  isLight: boolean;
}

export interface CustomBtnProps {
  pressHandler: () => void;
  image: any;
}
