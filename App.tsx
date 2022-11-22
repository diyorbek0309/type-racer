import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './src/screens/Home';
import History from './src/screens/History';
import { eScreens } from './src/types/enums';

function App() {
  const { Navigator, Screen } = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Navigator initialRouteName={eScreens.HOME}>
        <Screen name={eScreens.HOME} component={HomeScreen} />
        <Screen name={eScreens.HISTORY} component={History} />
      </Navigator>
    </NavigationContainer>
  );
}

export default App;
