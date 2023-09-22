import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../screens/auth/login/LoginScreen'

export type MainNavigationStackParamList = {
  LoginScreen: undefined
}

const Stack = createNativeStackNavigator<MainNavigationStackParamList>()

const MainNavigationStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='LoginScreen'
        component={LoginScreen}
      />
    </Stack.Navigator>
  )
}

export default MainNavigationStack
