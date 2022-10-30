import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './src/screens/Home';

const { Navigator, Screen } = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Home">
        <Screen name="FW" component={HomeScreen} />
      </Navigator>
    </NavigationContainer>
  );
}

export default App;