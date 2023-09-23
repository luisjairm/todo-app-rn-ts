import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../screens/auth/login/LoginScreen'
import { ThemeApp } from '../theme/AppTheme'
import HomeScreen from '../screens/home/HomeScreen'

export type MainNavigationStackParamList = {
  LoginScreen: undefined
  HomeScreen: undefined
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
        headerShown: true
      }}
    >
      <Stack.Screen
        name='LoginScreen'
        component={LoginScreen}
        options={{
          title: 'Nombre',
          headerShown: false
        }}
      />
      <Stack.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{
          title: 'Inicio'
        }}
      />
    </Stack.Navigator>
  )
}

export default MainNavigationStack
