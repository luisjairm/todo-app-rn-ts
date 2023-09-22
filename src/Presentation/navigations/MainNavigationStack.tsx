import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../screens/auth/login/LoginScreen'
import { ThemeApp } from '../theme/AppTheme'

export type MainNavigationStackParamList = {
  LoginScreen: undefined
}

const Stack = createNativeStackNavigator<MainNavigationStackParamList>()

const MainNavigationStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: ThemeApp.BRIGHT_BLUE
        },
        headerTintColor: ThemeApp.WHITE,
        headerTitleStyle: {
          fontWeight: 'bold'
        },
        headerShown: false
      }}
    >
      <Stack.Screen
        name='LoginScreen'
        component={LoginScreen}
        options={{
          title: 'Nombre'
        }}
      />
    </Stack.Navigator>
  )
}

export default MainNavigationStack
