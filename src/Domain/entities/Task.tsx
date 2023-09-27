export interface Task {
  id: string
  name: string
  description: string
  category: TaskCategories
  is_completed: boolean
  createdAt: string
  updatedAt: string
  // deadline: string
}

export enum TaskCategories {
  SCHOOL = 'school',
  PERSONAL = 'staff',
  WORK = 'work'
}

export const initValuesTask: Task = {
  id: '',
  name: '',
  description: '',
  category: TaskCategories.PERSONAL,
  is_completed: false,
  createdAt: '',
  updatedAt: ''
}
