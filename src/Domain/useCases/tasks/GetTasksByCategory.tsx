import SQLiteImpl from '../../../Data/source/local/sqlite/SQLite'
import { TaskCategories } from '../../entities/Task'
const Sqlite = new SQLiteImpl()

export const GetTasksByCategory = async (category: TaskCategories) => {
  return await Sqlite.getTasksByCategory(category)
}
