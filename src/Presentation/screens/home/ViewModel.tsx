import { useState } from 'react'
import { Task } from '../../../Domain/entities/Task'
import { GetAllTasksUseCase } from '../../../Domain/useCases/tasks/GetAllTasks'
const HomeScreenViewModel = () => {
  const [tasks, setTasks] = useState<Task[]>([])

  const loadData = async () => {
    const res = await GetAllTasksUseCase()
    // console.log('RES ', JSON.stringify(res, null, 2))
    if (res !== null) {
      setTasks(res)
    }
  }

  return {
    tasks,
    loadData
  }
}

export default HomeScreenViewModel
