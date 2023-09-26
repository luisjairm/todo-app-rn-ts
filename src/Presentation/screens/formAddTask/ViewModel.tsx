import { useState } from 'react'
import { Task } from '../../../Domain/entities/Task'
import { validateFormDataAddTask } from '../../utils/Validations'
import { AddTaskUseCase } from '../../../Domain/useCases/tasks/AddTask'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { TasksNavigationStackParamList } from '../../navigations/TasksNavigationStack'

interface Props extends NativeStackScreenProps<TasksNavigationStackParamList> {}

const FormTaskViewModel = ({ navigation, route }: Props) => {
  const [formData, setFormData] = useState<Partial<Task>>({})
  const [errors, setErrors] = useState<Partial<Task>>({})

  const updateFormData = (key: keyof Task, value: any) => {
    setFormData((prevValues) => ({
      ...prevValues,
      [key]: value
    }))
  }

  const handleSubmit = async () => {
    setErrors({})
    const resValidate = validateFormDataAddTask(formData)
    if (!resValidate.status && resValidate.errors !== undefined) {
      setErrors(resValidate.errors as Partial<Task>)
      return
    }
    if (resValidate.data === undefined) return
    console.log('Agregando')
    const resADD = AddTaskUseCase(resValidate.data)
    console.log('REs add::', resADD)
    if (!resADD) {
      return
    }
    navigation.navigate('HomeScreen')
  }

  return {
    formData,
    updateFormData,
    errors,
    handleSubmit
  }
}

export default FormTaskViewModel
