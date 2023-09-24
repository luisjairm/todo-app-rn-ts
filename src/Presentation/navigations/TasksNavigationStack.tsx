import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ThemeApp } from '../theme/AppTheme'
import HomeScreen from '../screens/home/HomeScreen'

export type TasksNavigationStackParamList = {
  HomeScreen: undefined
}

const Stack = createNativeStackNavigator<TasksNavigationStackParamList>()

const TasksNavigationStack = () => {
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
        name='HomeScreen'
        component={HomeScreen}
        options={{
          title: 'Nombre',
          headerShown: false
        }}
      />
    </Stack.Navigator>
  )
}

export default TasksNavigationStack
