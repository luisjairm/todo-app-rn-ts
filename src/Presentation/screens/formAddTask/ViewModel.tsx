import { useState } from 'react'
import { Task } from '../../../Domain/entities/Task'
import { validateFormDataAddTask } from '../../utils/Validations'
import { AddTaskUseCase } from '../../../Domain/useCases/tasks/AddTask'
import { GetAllTasksUseCase } from '../../../Domain/useCases/tasks/GetAllTasks'

const FormTaskViewModel = () => {
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
    const tasks = await GetAllTasksUseCase()
    console.log('TASKS::: ', tasks)
  }

  return {
    formData,
    updateFormData,
    errors,
    handleSubmit
  }
}

export default FormTaskViewModel
