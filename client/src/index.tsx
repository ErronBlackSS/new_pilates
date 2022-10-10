import { createContext } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import UserStore from "./store/UserStore"
import './index.css'

interface State {
  user: UserStore
}

const user = new UserStore()

export const Context = createContext<State>({
  user
})

ReactDOM.render(
  <Context.Provider value={{
    user
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
)