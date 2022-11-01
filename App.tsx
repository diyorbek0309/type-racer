import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './src/screens/Home';
import History from './src/screens/History';

function App() {
  const { Navigator, Screen } = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Navigator initialRouteName="Home">
        <Screen name="Home" component={HomeScreen} />
        <Screen name="History" component={History} />
      </Navigator>
    </NavigationContainer>
  );
}

export default App;
