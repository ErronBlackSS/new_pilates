export enum ROUTES {
  MAIN_ROUTE = '/',
  AUTH_ROUTE = '/login',
  ACCOUNT_ROUTE = '/account'
}

export enum INPUT_VALIDATORS {
  'email' = Object({ isEmpty: true, isEmail: true }),
  'password' = Object({ isEmpty: true, minLength: 8, MaxLength: 20 }),
  'phone' = Object({ isEmpty: true, isPhone: true }),
  'name' = Object({ isEmpty: true, minLength: 2, maxLength: 20 }),
  'lastname' = Object({ isEmpty: true, minLength: 2, maxLength: 20 }),
}

export const LOGIN_INPUTS = [
  {
    label: 'Почта',
    type: 'email',
    name: 'email',
    placeholder: 'Email'
  },
  {
    label: 'Пароль',
    type: 'password',
    name: 'password',
    placeholder: 'Пароль'
  },
]

export const REGISTRATION_INPUTS = [
  {
    label: 'Имя',
    type: 'text',
    name: 'name',
    placeholder: 'Имя'
  },
  {
    label: 'Фамилия',
    type: 'text',
    name: 'lastname',
    placeholder: 'Фамилия'
  },
  {
    label: 'Почта',
    type: 'email',
    name: 'email',
    placeholder: 'Почта'
  },
  {
    label: 'Телефон',
    type: 'phone',
    name: 'phone',
    placeholder: 'Телефон'
  },
  {
    label: 'Пароль',
    type: 'password',
    name: 'password',
    placeholder: 'Пароль'
  },
]