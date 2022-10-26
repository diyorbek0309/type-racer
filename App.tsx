import { TouchableOpacity, Image, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/Home';

const { Navigator, Screen } = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="FW"
          component={HomeScreen}
          // options={{
          //   headerRight: (navigation) => (
          //     <View
          //       style={{
          //         width: '60%',
          //         flexDirection: 'row',
          //         justifyContent: 'space-between',
          //       }}
          //     >
          //       <TouchableOpacity onPress={() => alert('Test')}>
          //         <Image source={require('./assets/sun_icon.png')} />
          //       </TouchableOpacity>
          //       <TouchableOpacity onPress={() => alert('Test2')}>
          //         <Image source={require('./assets/moon_icon.png')} />
          //       </TouchableOpacity>
          //       <TouchableOpacity onPress={() => alert('Test3')}>
          //         <Image source={require('./assets/refresh_icon.png')} />
          //       </TouchableOpacity>
          //     </View>
          //   ),
          // }}
        />
      </Navigator>
    </NavigationContainer>
  );
}

export default App;
