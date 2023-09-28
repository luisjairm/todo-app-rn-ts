import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { useContext, useEffect } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import GlobalStyles from '../../theme/GlobalStyles'
import { ThemeApp } from '../../theme/AppTheme'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { TasksNavigationStackParamList } from '../../navigations/TasksNavigationStack'
import { Picker } from '@react-native-picker/picker'
import TaskCard from '../../components/TaskCard'
import { AppContext } from '../../context/AppContext'
import { TaskCategories } from '../../../Domain/entities/Task'
import { CategoryTaksSpanish } from '../../utils/Translations'
import useViewModel from './ViewModel'

interface Props extends NativeStackScreenProps<TasksNavigationStackParamList> {}

const HomeScreen = ({ navigation, route }: Props) => {
  const { loadTasks } = useContext(AppContext)
  const { tasks, loadData, updateSearch, searchCatergory, loadAllTasks } = useViewModel()

  useEffect(() => {
    if (searchCatergory === 'all') {
      void loadAllTasks()
      return
    }
    void loadData()
    console.log('1')
  }
  , [loadTasks, searchCatergory])

  return (
    <View style={[
      GlobalStyles.containerScreen,
      {
        paddingTop: 50,
        alignItems: 'center'
      }
    ]}
    >
      <ScrollView style={{ width: '100%' }}>
        <Text style={{ fontSize: 18, color: ThemeApp.WHITE, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 }}>TAREAS</Text>
        <View style={{ width: '100%', alignItems: 'center' }}>
          <Picker
            mode='dropdown'
            selectedValue={searchCatergory}
            onValueChange={(itemValue, itemIndex) => updateSearch(itemValue)}
            style={{ width: '80%', color: ThemeApp.WHITE }}
          >
            <Picker.Item label='Todas' value='all' />
            {Object.values(TaskCategories).map((category) => (
              <Picker.Item key={category} label={CategoryTaksSpanish[category]} value={category} />
            ))}
          </Picker>
        </View>
        <View style={{ width: '100%', alignItems: 'center' }}>
          {
            tasks.map(task => (
              <TaskCard
                key={task.id}
                task={task}
                navigation={navigation}
                route={route}
              />
            ))
          }
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={() => navigation.navigate('FormTaskScreen', {})}
        style={
        [
          GlobalStyles.shadow,
          { position: 'absolute', bottom: 20, right: 20 }
        ]
}
      >
        <Icon
          name='plus-circle'
          size={60}
          color={ThemeApp.FUCHSIA}
        />
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen
