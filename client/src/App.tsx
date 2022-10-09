import {FC, useContext, useEffect} from 'react';
import {Context} from "./index";
import {observer} from "mobx-react-lite";
import LoginForm from './components/LoginForm';

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
        <div>
            <h1>{store.user.isAuth ? `Пользователь авторизован ${store.user.user.email}` : 'АВТОРИЗУЙТЕСЬ'}</h1>
            <h1>{store.user.user.is_activated ? 'Аккаунт подтвержден по почте' : 'ПОДТВЕРДИТЕ АККАУНТ!!!!'}</h1>
            <button onClick={() => store.user.logout()}>Выйти</button>
        </div>
    );
};

export default observer(App);