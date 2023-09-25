import uuid from 'react-native-uuid'
import { Task, TaskCategories } from '../../Domain/entities/Task'
import { currentDateToSQL } from './Helpers'

interface ErrorsFormDataAddTask {
  name?: string
  category?: string
  description?: string
}

export const validateFormDataAddTask = ({ name, category, description, createdAt }: Partial<Task>) => {
  const res: {
    status: boolean
    errors?: ErrorsFormDataAddTask
    data?: Task
  } = { status: false }

  const errors: ErrorsFormDataAddTask = {}
  if (name === undefined || name.trim() === '') {
    errors.name = 'El nombre no puede estar vacío'
  }

  if (category === undefined || category.trim() === '') {
    errors.category = 'La categoría no puede estar vacía'
  }

  if (description === undefined || description.trim() === '') {
    errors.description = 'La descripción no puede estar vacía'
  }

  if (Object.keys(errors).length > 0) {
    res.errors = errors
    return res
  }

  res.status = true
  res.data = {
    id: uuid.v4() as string,
    name: name as string,
    description: description as string,
    category: category as TaskCategories,
    createdAt: currentDateToSQL(),
    updatedAt: currentDateToSQL(),
    is_completed: false
  }

  return res
}
