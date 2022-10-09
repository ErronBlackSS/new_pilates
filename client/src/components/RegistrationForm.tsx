import {FC, useContext, useState} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const RegistationForm: FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [name, setName] = useState<string>('')
    const [lastname, setLastname] = useState<string>('')
    const [phone, setPhone] = useState<string>('')

    const {store} = useContext(Context);

    return (
        <div>
            <input
                onChange={e => setName(e.target.value)}
                value={name}
                type="text"
                placeholder='Имя'
            />
            <input
                onChange={e => setLastname(e.target.value)}
                value={lastname}
                type="text"
                placeholder='Фамилия'
            />
            <input
                onChange={e => setEmail(e.target.value)}
                value={email}
                type="text"
                placeholder='Почта'
            />
            <input
                onChange={e => setPhone(e.target.value)}
                value={phone}
                type="text"
                placeholder='Телефон'
            />
            <input
                onChange={e => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder='Пароль'
            />
            <button onClick={() => store.user.registration(name, lastname, phone, email, password)}>
                Зарегистрироваться
            </button>
        </div>
    );
};

export default observer(RegistationForm)