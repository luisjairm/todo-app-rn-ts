import SQLiteImpl from '../../../Data/source/local/sqlite/SQLite'
const Sqlite = new SQLiteImpl()

export const GetAllTasksUseCase = async () => {
  return await Sqlite.getAllTasks()
}
