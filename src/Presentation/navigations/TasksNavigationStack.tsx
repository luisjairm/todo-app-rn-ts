import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ThemeApp } from '../theme/AppTheme'
import HomeScreen from '../screens/home/HomeScreen'
import FormTaskScreen from '../screens/formAddTask/FormTaskScreen'
import { Task } from '../../Domain/entities/Task'

export type TasksNavigationStackParamList = {
  HomeScreen: undefined
  FormTaskScreen: {
    task?: Task
  }
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
      <Stack.Screen
        name='FormTaskScreen'
        component={FormTaskScreen}
        options={{
          title: 'Agregar una tarea',
          headerShown: true
        }}
      />
    </Stack.Navigator>
  )
}

export default TasksNavigationStack
