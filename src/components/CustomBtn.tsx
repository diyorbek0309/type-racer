import { TouchableOpacity, Image } from 'react-native';
import { styles } from '../styles/HomeStyle';
import { CustomBtnProps } from '../types/Props.interface';

const CustomBtn = ({ pressHandler, image }: CustomBtnProps) => {
  return (
    <TouchableOpacity onPress={pressHandler} style={styles.Button}>
      <Image source={image} />
    </TouchableOpacity>
  );
};

export default CustomBtn;
