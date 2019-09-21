import { createStackNavigator } from 'react-navigation-stack'
import Loading from './sections/components/loading'

const Main = createStackNavigator(
  {
    Home: Loading
  }
)

export default Main
