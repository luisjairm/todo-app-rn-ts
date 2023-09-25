import { TaskCategories } from '../../Domain/entities/Task'

export const CategoryTaksSpanish: Record<TaskCategories, string> = {
  [TaskCategories.PERSONAL]: 'Personal',
  [TaskCategories.SCHOOL]: 'Escuela',
  [TaskCategories.WORK]: 'Trabajo'
}
