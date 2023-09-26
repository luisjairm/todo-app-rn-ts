import { Task } from '../entities/Task'

export interface SQLiteInterface {
  addTask: (task: Task) => boolean
  getAllTasks: () => Promise<Task[] | null>
}
