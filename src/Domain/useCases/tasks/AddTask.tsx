import SQLiteImpl from '../../../Data/source/local/sqlite/SQLite'
import { Task } from '../../entities/Task'
const Sqlite = new SQLiteImpl()

export const AddTaskUseCase = (task: Task) => {
  return Sqlite.addTask(task)
}
