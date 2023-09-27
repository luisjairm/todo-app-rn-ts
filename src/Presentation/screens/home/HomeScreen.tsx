import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { useContext, useCallback } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import GlobalStyles from '../../theme/GlobalStyles'
import { ThemeApp } from '../../theme/AppTheme'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { TasksNavigationStackParamList } from '../../navigations/TasksNavigationStack'
import useViewModel from './ViewModel'
import { useFocusEffect } from '@react-navigation/native'

import TaskCard from '../../components/TaskCard'
import { AppContext } from '../../context/AppContext'

interface Props extends NativeStackScreenProps<TasksNavigationStackParamList> {}

const HomeScreen = ({ navigation, route }: Props) => {
  const { loadTasks } = useContext(AppContext)
  const { tasks, loadData } = useViewModel()

  useFocusEffect(
    useCallback(
      () => {
        void loadData()
        console.log('1')
      }
      , [loadTasks])
  )

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
        <Text style={{ fontSize: 18, color: ThemeApp.WHITE, fontWeight: 'bold' }}>Bienvenido Luis</Text>

        <View style={{ width: '100%', alignItems: 'center' }}>
          {
            tasks.map(task => (
              <TaskCard
                key={task.id}
                task={task}
              />
            ))
          }
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={() => navigation.navigate('FormTaskScreen')}
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
