export interface Task {
  id: string
  name: string
  description: string
  category: TaskCategories
  status: boolean
  // deadline: string
  createdAt: string
  updatedAt: string
}

export enum TaskCategories {
  SCHOOL = 'school',
  PERSONAL = 'staff',
  WORK = 'work'
}
