import {createStackNavigator, createAppContainer} from 'react-navigation';
import FirstScreen from './screens/firstScreen.js'
import DetailScreen from './screens/detailScreen.js'
import LastScreen from './screens/lastScreen.js'
import OldScreen from './screens/oldScreen.js'


const MainNavigator = createStackNavigator({
  Fisrt: {screen: FirstScreen},
  Details: {screen: DetailScreen},
  Last: {screen: LastScreen},
  Old: {screen: OldScreen},
});

const App = createAppContainer(MainNavigator);

export default App;