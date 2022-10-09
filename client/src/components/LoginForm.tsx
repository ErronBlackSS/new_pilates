import React, {FC, useState} from 'react';

const LoginForm: FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const setEmailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const setPasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    return (
        <div>
            <input 
                onChange={setEmailHandler}
                value={email}
                type="text"
                placeholder='Почта'
            />
            <input 
                onChange={setPasswordHandler}
                value={password}
                type="password"
                placeholder='Пароль' 
            />
            <button>Логин</button>
            <button>Регистрация</button>
        </div>
    );
};

export default LoginForm;