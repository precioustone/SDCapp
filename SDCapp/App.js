import {createStackNavigator, createAppContainer} from 'react-navigation';

const MainNavigator = createStackNavigator({
  Fisrt: {screen: FirstScreen},
  Details: {screen: DetailScreen},
  Last: {screen: LastScreen},
});

const App = createAppContainer(MainNavigator);

export default App;