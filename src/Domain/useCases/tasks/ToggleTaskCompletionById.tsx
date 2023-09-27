import SQLiteImpl from '../../../Data/source/local/sqlite/SQLite'
const Sqlite = new SQLiteImpl()

// eslint-disable-next-line @typescript-eslint/naming-convention
export const ToggleTaskCompletionByIdUseCase = (is_completed: boolean, id: string) => {
  return Sqlite.toggleTaskCompletionById(is_completed, id)
}
