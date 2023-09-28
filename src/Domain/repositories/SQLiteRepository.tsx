import { Task, TaskCategories } from '../entities/Task'

export interface SQLiteInterface {
  addTask: (task: Task) => boolean
  getAllTasks: () => Promise<Task[] | null>
  getTasksByCategory: (category: TaskCategories) => Promise<Task[] | null>
  toggleTaskCompletionById: (is_completed: boolean, id: string) => boolean
  getTaskById: (id: string) => Promise<Task | null>
  deleteTaskById: (id: string) => boolean
}
