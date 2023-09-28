import { useState, useEffect, useContext } from 'react'
import { Task, initValuesTask } from '../../../Domain/entities/Task'
import { validateFormDataAddTask } from '../../utils/Validations'
import { AddTaskUseCase } from '../../../Domain/useCases/tasks/AddTask'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { TasksNavigationStackParamList } from '../../navigations/TasksNavigationStack'
import { GetTaskByIdUseCase } from '../../../Domain/useCases/tasks/GetTaskById'
import { AppContext } from '../../context/AppContext'

interface Props extends NativeStackScreenProps<TasksNavigationStackParamList, 'FormTaskScreen'> {}

const FormTaskViewModel = ({ navigation, route }: Props) => {
  const [formData, setFormData] = useState<Task>(initValuesTask)
  const [errors, setErrors] = useState<Partial<Task>>({})

  const { loadUpTasks } = useContext(AppContext)

  useEffect(() => {
    if (route.params.task !== undefined) {
      setFormData(route.params.task)
      navigation.setOptions({ title: 'Actualizar Tarea' })
    }
  }, [])

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
    // console.log('Agregando')
    const resADD = AddTaskUseCase(resValidate.data)
    // console.log('REs add::', resADD)
    if (!resADD) {
      return
    }
    navigation.navigate('HomeScreen')
    loadUpTasks()
  }

  const loadDataTask = async (id: string) => {
    const res = await GetTaskByIdUseCase(id)
    console.log('RES', JSON.stringify(res, null, 2))
    if (res !== null) {
      console.log('2')
      setFormData(res)
    }
  }

  const handleSubmitUpdate = () => {
    console.log('', JSON.stringify(formData, null, 2))
  }

  return {
    formData,
    updateFormData,
    errors,
    handleSubmit,
    loadDataTask,
    handleSubmitUpdate
  }
}

export default FormTaskViewModel
