import { View, Text, TouchableOpacity } from 'react-native'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { Task, TaskCategories } from '../../Domain/entities/Task'
import { ThemeApp } from '../theme/AppTheme'
import { dateFormat } from '../utils/Helpers'
import { CategoryTaksSpanish } from '../utils/Translations'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { ToggleTaskCompletionByIdUseCase } from '../../Domain/useCases/tasks/ToggleTaskCompletionById'
interface Props {
  task: Task
}

const selectCheckColor = (category: TaskCategories) => {
  const colors: Record<TaskCategories, string> = {
    [TaskCategories.PERSONAL]: ThemeApp.SKY_BLUE,
    [TaskCategories.WORK]: ThemeApp.WORK,
    [TaskCategories.SCHOOL]: ThemeApp.SCHOOL
  }
  return colors[category]
}

const TaskCard = ({ task }: Props) => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { name, description, createdAt, category, is_completed, id } = task

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
          onPress={(isChecked: boolean) => ToggleTaskCompletionByIdUseCase(isChecked, id)}
        />
      </View>
      <View style={{ width: '60%' }}>
        <Text style={{ color: ThemeApp.WHITE, fontSize: 15, fontWeight: 'bold' }}>{name}</Text>
        <Text style={{ color: ThemeApp.LIGHT_GRAY, fontSize: 13 }}>{description}</Text>
        <Text style={{ color: ThemeApp.LIGHT_GRAY, fontSize: 11 }}>{dateFormat(createdAt)}</Text>
        <Text style={{ color: ThemeApp.LIGHT_GRAY, fontSize: 11 }}>{CategoryTaksSpanish[category]}</Text>
      </View>

      <TouchableOpacity
        onPress={() => console.log(is_completed)}
        style={
        [
          { width: '10%' }
        ]
}
      >
        <Icon
          name='pencil'
          size={25}
          color={selectCheckColor(category)}
        />
      </TouchableOpacity>
    </View>
  )
}

export default TaskCard
