import {FC, useContext, useEffect} from 'react';
import { Context } from "./index";
import {observer} from "mobx-react-lite";
import LoginForm from './components/LoginForm';
import AppRouter from './components/AppRouter';

const App: FC = () => {
    const {store} = useContext(Context);

    useEffect(() => {
        if (localStorage.getItem('token')) {
            store.user.checkAuth()
        }
    }, [store.user])

    if (store.user.isLoading) {
        return <div>Загрузка...</div>
    }

    if (!store.user.isAuth) {
      return (
          <div>
              <LoginForm/>
          </div>
      );
  }

    return (
      <AppRouter />
    );
};

export default observer(App);