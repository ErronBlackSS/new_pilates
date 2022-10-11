import { createContext } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import UserStore from './store/UserStore'
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

root.render(
  <Context.Provider value={{
    user
  }}>
    <App />
  </Context.Provider>
)