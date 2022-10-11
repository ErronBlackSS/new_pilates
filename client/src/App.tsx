import { FC, useContext, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { observer } from "mobx-react-lite";
import AppRouter from './components/AppRouter';
import { Context } from './index';
import Header from './components/Header/Header';

const App: FC = () => {

  const {user} = useContext(Context)

  useEffect(() => {
    console.log(user, 'store')
    if (localStorage.getItem('token')) {
      user.checkAuth()
    }
  }, [user])

  return (
    <BrowserRouter>
      <Header />
      <AppRouter/>
    </BrowserRouter>
  )
}

export default observer(App);