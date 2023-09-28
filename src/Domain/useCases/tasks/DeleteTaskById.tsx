import SQLiteImpl from '../../../Data/source/local/sqlite/SQLite'
const Sqlite = new SQLiteImpl()

export const DeleteTaskByIdUseCase = (id: string) => {
  return Sqlite.deleteTaskById(id)
}
