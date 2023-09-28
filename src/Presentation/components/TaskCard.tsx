import { View, Text, TouchableOpacity } from 'react-native'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { Task, TaskCategories } from '../../Domain/entities/Task'
import { ThemeApp } from '../theme/AppTheme'
import { dateFormat } from '../utils/Helpers'
import { CategoryTaksSpanish } from '../utils/Translations'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { ToggleTaskCompletionByIdUseCase } from '../../Domain/useCases/tasks/ToggleTaskCompletionById'
import { AppContext } from '../context/AppContext'
import { useContext } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { TasksNavigationStackParamList } from '../navigations/TasksNavigationStack'
import { DeleteTaskByIdUseCase } from '../../Domain/useCases/tasks/DeleteTaskById'
interface Props extends NativeStackScreenProps<TasksNavigationStackParamList> {
  task: Task
}

const TaskCard = ({ task, navigation }: Props) => {
  const { loadUpTasks } = useContext(AppContext)
  const { name, description, createdAt, category, is_completed, id, updatedAt } = task

  const selectCheckColor = (category: TaskCategories) => {
    const colors: Record<TaskCategories, string> = {
      [TaskCategories.PERSONAL]: ThemeApp.SKY_BLUE,
      [TaskCategories.WORK]: ThemeApp.WORK,
      [TaskCategories.SCHOOL]: ThemeApp.SCHOOL
    }
    return colors[category]
  }

  return (
    <View
      style={{
        width: '90%',
        backgroundColor: ThemeApp.DEEP_NAVY,
        margin: 5,
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
      }}
    >
      <View style={{ width: '20%' }}>
        <BouncyCheckbox
          size={40}
          fillColor={selectCheckColor(category)}
          unfillColor={ThemeApp.DEEP_NAVY}
          disableText
          isChecked={is_completed}
        // text='Custom Checkbox'
          iconStyle={{ borderColor: ThemeApp.DEEP_NAVY }}
          innerIconStyle={{ borderWidth: 2 }}
          onPress={(isChecked: boolean) => {
            ToggleTaskCompletionByIdUseCase(isChecked, id)
            loadUpTasks()
          }}
        />
      </View>
      <View style={{ width: '60%' }}>
        <Text style={{ color: ThemeApp.WHITE, fontSize: 15, fontWeight: 'bold', textDecorationLine: is_completed ? 'line-through' : 'none' }}>{name}</Text>
        <Text style={{ color: ThemeApp.LIGHT_GRAY, fontSize: 13 }}>{description}</Text>
        <Text style={{ color: ThemeApp.LIGHT_GRAY, fontSize: 11 }}>{
          is_completed
            ? `Creada: ${dateFormat(createdAt)} \nCompletada: ${dateFormat(updatedAt)}`
            : `${dateFormat(createdAt)}`

        }
        </Text>
        <Text style={{ color: ThemeApp.LIGHT_GRAY, fontSize: 11 }}>{CategoryTaksSpanish[category]}</Text>
      </View>

      <TouchableOpacity
        onPress={() => {
          const res = DeleteTaskByIdUseCase(id)
          if (!res) return
          loadUpTasks()
        }}
        style={
        [
          { width: '10%' }
        ]
}
      >
        <Icon
          name='delete'
          size={25}
          color={ThemeApp.DANGER}
        />
      </TouchableOpacity>
    </View>
  )
}

export default TaskCard
