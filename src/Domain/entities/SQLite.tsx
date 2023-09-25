import { Task } from './Task'

export interface SQLiteInterface {
  addTask: (task: Task) => boolean
}
