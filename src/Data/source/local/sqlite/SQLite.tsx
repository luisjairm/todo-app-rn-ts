/* eslint-disable @typescript-eslint/naming-convention */
import * as sqlite from 'expo-sqlite'
import { SQLiteInterface } from '../../../../Domain/repositories/SQLiteRepository'
import { Task } from '../../../../Domain/entities/Task'

class SQLiteImpl implements SQLiteInterface {
  db_name: string

  constructor () {
    this.db_name = 'tasks.db'
    this.initDatabase()
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  addTask ({ id, name, description, category, is_completed, createdAt, updatedAt }: Task) {
    try {
      const db = sqlite.openDatabase(this.db_name)
      const complete = is_completed ? 1 : 0 // Convierte el valor booleano a 1 o 0
      db.transaction(tx => {
        tx.executeSql(
          'INSERT INTO tasks (id, name, description, category, is_completed, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?)',
          [id, name, description, category, complete, createdAt, updatedAt],
          (_, result) => {
            console.log('Fila agregada')
          },
          (_, error) => {
            console.log('Error al agregar fila', error)
            return false
          }
        )
      })
      return true
    } catch (error) {
      return false
    }
  }

  async getAllTasks () {
    try {
      let tasks: Task[] = []
      const db = sqlite.openDatabase(this.db_name)
      await new Promise((resolve, reject) => {
        db.transaction(tx => {
          tx.executeSql(
            'SELECT * FROM tasks',
            [],
            (_, result) => {
              tasks = result.rows._array
              resolve(tasks)
              // console.log(tasks)
            },
            (_, error) => {
              console.log('Error al obtener las tareas', error)
              reject(error)
              return false
            }
          )
        })
      })

      return this.cleanDataTasks(tasks)
    } catch (error) {
      return null
    }
  }

  private initDatabase () {
    const db = sqlite.openDatabase(this.db_name)
    db.transaction(
      tx => {
        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS tasks (id TEXT PRIMARY KEY, name TEXT NOT NULL, description TEXT NOT NULL, category TEXT NOT NULL, is_completed BOOLEAN NOT NULL, createdAt DATETIME NOT NULL, updatedAt DATETIME NOT NULL);',
          [],
          () => {
            console.log('Tabla creada')
          },
          (_, error) => {
            console.log('Error al crear la tabla', error)

            return false
          }
        )
      },
      error => {
        console.log('Error en la transacción', error)
      }
    )
  }

  toggleTaskCompletionById (is_completed: boolean, id: string) {
    try {
      const complete = is_completed ? 1 : 0
      const db = sqlite.openDatabase(this.db_name)
      db.transaction(
        (tx) => {
          tx.executeSql(
            'UPDATE tasks SET is_completed = ? WHERE id=?',
            [complete, id],
            () => {
              console.log('Tarea Actualizada')
            },
            (_, error) => {
              console.log('Error al actualizar la tarea', error)
              return false
            }
          )
        },
        error => {
          console.log('Error en la transacción', error)
        }
      )
      return true
    } catch (error) {
      return false
    }
  }

  private cleanDataTasks (data: any) {
    const newData = data.map((task: any) => {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      const { id, name, description, category, is_completed, createdAt, updatedAt } = task
      const completed = is_completed === 1
      return {
        id,
        name,
        description,
        category,
        is_completed: completed,
        createdAt,
        updatedAt
      }
    })
    return newData as Task[]
  }
}

export default SQLiteImpl
