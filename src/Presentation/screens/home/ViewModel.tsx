import { useState, useEffect } from 'react'
import { Task, TaskCategories } from '../../../Domain/entities/Task'
import { GetTasksByCategory } from '../../../Domain/useCases/tasks/GetTasksByCategory'
import { GetAllTasksUseCase } from '../../../Domain/useCases/tasks/GetAllTasks'
import { GetUserLocalUseCase } from '../../../Domain/useCases/userLocal/GetUserLocal'
const HomeScreenViewModel = () => {
  const [tasks, setTasks] = useState<Task[]>([])
  const [searchCatergory, setSearchCategory] = useState<TaskCategories | 'all'>('all')
  const [userName, setUserName] = useState<string>('')

  useEffect(() => {
    void getUserName()
  }, [])

  const getUserName = async () => {
    const res = await GetUserLocalUseCase()
    console.log(res)
    if (res !== null) {
      setUserName(res)
      return
    }
    setUserName('')
  }

  const updateSearch = (catego: TaskCategories | 'all') => {
    setSearchCategory(catego)
  }

  const loadData = async () => {
    if (searchCatergory === 'all') return
    const res = await GetTasksByCategory(searchCatergory)
    // console.log('RES ', JSON.stringify(res, null, 2))
    if (res !== null) {
      setTasks(res)
    }
  }
  const loadAllTasks = async () => {
    const res = await GetAllTasksUseCase()
    // console.log('RES ', JSON.stringify(res, null, 2))
    if (res !== null) {
      setTasks(res)
    }
  }

  return {
    tasks,
    loadData,
    updateSearch,
    searchCatergory,
    loadAllTasks,
    userName
  }
}

export default HomeScreenViewModel
