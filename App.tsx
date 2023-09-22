import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import MainNavigationStack from './src/Presentation/navigations/MainNavigationStack'

export default function App () {
  return (
    <NavigationContainer>
      <StatusBar style='inverted' />
      <MainNavigationStack />
    </NavigationContainer>
  )
}
