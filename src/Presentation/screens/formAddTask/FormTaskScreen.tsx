import { View, Text, Button } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import GlobalStyles from '../../theme/GlobalStyles'
import CustomTextInput from '../../components/CustomTextInput'
import useViewModel from './ViewModel'
import { ThemeApp } from '../../theme/AppTheme'
import { TaskCategories } from '../../../Domain/entities/Task'
import { CategoryTaksSpanish } from '../../utils/Translations'

const FormTaskScreen = () => {
  const {
    formData,
    errors,
    updateFormData,
    handleSubmit
  } = useViewModel()

  return (
    <View style={[
      GlobalStyles.containerScreen,
      {
        alignItems: 'center'
      }
    ]}
    >
      <CustomTextInput
        label='Titulo'
        placeHolder='Titulo de la tarea'
        errorText={errors.name}
        value={formData.name}
        onchangeText={(text) => updateFormData('name', text)}
      />
      <CustomTextInput
        label='Descripción'
        placeHolder='Descripción extra para su tarea'
        multiline
        errorText={errors.description}
        value={formData.description}
        onchangeText={(text) => updateFormData('description', text)}
      />
      <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
        <Text style={GlobalStyles.label}>Categoria:
        </Text>
        <Picker
          mode='dropdown'
          selectedValue={formData.category}
          onValueChange={(itemValue, itemIndex) => updateFormData('category', itemValue)}
          style={{ width: '40%', color: ThemeApp.WHITE }}
        >
          {Object.values(TaskCategories).map((category) => (
            <Picker.Item key={category} label={CategoryTaksSpanish[category]} value={category} />
          ))}
        </Picker>
      </View>
      {/* <InputDateTime
        label='Fecha limite:'
        value='10/20/13'
        showDateTime={() => showDatePicker()}
      /> */}
      <Button
        title='Guardar'
        onPress={handleSubmit}
      />
    </View>
  )
}

export default FormTaskScreen
