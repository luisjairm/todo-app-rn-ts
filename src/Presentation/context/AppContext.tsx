import { createContext, useState } from 'react'

export interface UserContextProps {
  loadTasks: boolean
  loadUpTasks: () => void
}

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export const AppContext = createContext({} as UserContextProps)

export const AppProvider = ({ children }: any): JSX.Element => {
  const [loadTasks, setLoadTasks] = useState(false)

  const loadUpTasks = () => {
    setLoadTasks((prevValue) => (!prevValue))
  }

  return (
    <AppContext.Provider value={{
      loadTasks,
      loadUpTasks
    }}
    >
      {children}
    </AppContext.Provider>
  )
}
