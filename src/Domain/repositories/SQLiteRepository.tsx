import { Task } from '../entities/Task'

export interface SQLiteInterface {
  addTask: (task: Task) => boolean
  getAllTasks: () => Promise<Task[] | null>
  toggleTaskCompletionById: (is_completed: boolean, id: string) => boolean
}
