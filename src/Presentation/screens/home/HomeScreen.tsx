import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import GlobalStyles from '../../theme/GlobalStyles'
import { ThemeApp } from '../../theme/AppTheme'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { TasksNavigationStackParamList } from '../../navigations/TasksNavigationStack'

interface Props extends NativeStackScreenProps<TasksNavigationStackParamList> {}

const HomeScreen = ({ navigation, route }: Props) => {
  return (
    <View style={GlobalStyles.containerScreen}>
      <ScrollView style={{ width: '100%' }}>
        <Text style={{ fontSize: 18, color: ThemeApp.WHITE, fontWeight: 'bold' }}>Bienvenido Luis</Text>

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
