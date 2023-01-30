import { createContext } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import UserStore from './Store/UserStore'
import './index.css'

interface State {
  user: UserStore
}

const user = new UserStore()

export const Context = createContext<State>({
  user
})

const container = document.getElementById('app')
const root = createRoot(container)
console.log(process.env, 'config')

root.render(
  <Context.Provider value={{
    user
  }}>
    <App />
  </Context.Provider>
)