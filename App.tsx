import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Image, View } from 'react-native';
import HomeScreen from './src/screens/Home';

const { Navigator, Screen } = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="FastWrite"
          component={HomeScreen}
          options={{
            headerRight: () => (
              <View
                style={{ width: "60%", flexDirection: 'row', justifyContent: 'space-between' }}
              >
                <Image source={require('./assets/sun_icon.png')} />
                <Image source={require('./assets/moon_icon.png')} />
                <Image source={require('./assets/refresh_icon.png')} />
              </View>
            ),
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}

export default App;
