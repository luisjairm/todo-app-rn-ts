import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../screens/auth/login/LoginScreen'
import { ThemeApp } from '../theme/AppTheme'
import TasksNavigationStack from './TasksNavigationStack'
import { AppProvider } from '../context/AppContext'

export type MainNavigationStackParamList = {
  LoginScreen: undefined
  TasksNavigationStack: undefined
}

const Stack = createNativeStackNavigator<MainNavigationStackParamList>()

const MainNavigationStack = () => {
  return (
    <UseState>
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
          name='TasksNavigationStack'
          component={TasksNavigationStack}
          options={{
            title: 'Inicio',
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </UseState>
  )
}

export default MainNavigationStack

const UseState = ({ children }: any): JSX.Element => {
  return (
    <AppProvider>
      {children}
    </AppProvider>
  )
}
