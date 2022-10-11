import {FC, useContext, useState} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const LoginForm: FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const {user} = useContext(Context);

    const Login = async () => {
      try {
        await user.login(email, password)
      } catch (e) {
        alert(e.response.data.message)
      }
    }

    const onSubmit = (e: React.SyntheticEvent) => {
      e.preventDefault()
      const target = e.target as typeof e.target & {
        email: { value: string }
        password: { value: string }
      }
      const email = target.email.value
      const password = target.password.value
      console.log(email, password, 'DANNIE')
    }

    return (
        <div className="flex items-center justify-center">
          <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
            <h3
              className="text-2xl font-bold text-center"
            >
              Login to your account
            </h3>
            <form onSubmit={onSubmit}>
              <div className="mt-4">
                <div>
                  <label
                    className="block"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    type="text"
                    placeholder='Email'
                  />
                </div>
                <div className="mt-4">
                  <label
                    className="block"
                  >
                    Password
                  </label>
                  <input
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    type="password"
                    placeholder='Пароль'
                  />
                </div>
                Забыли пароль? - <a href="/registration">Регистрация</a>
                <div className="flex items-baseline justify-between">
                  <button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Login</button>
                </div>
              </div>
            </form>
          </div>
        </div>
    )
};

export default observer(LoginForm);