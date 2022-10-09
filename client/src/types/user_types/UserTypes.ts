export interface UserInterface {
    email: string
    id: number
    is_activated: boolean
    name: string
    lastname: string
    phone: string
}

export interface LoginInterface {
    email: string
    password: string
}

export interface UserState {
    user: UserInterface
    isAuth: boolean
    isLoading: boolean
    error: null | string
}

export enum UserActionTypes {
    SET_AUTH = 'SET_AUTH',
    SET_USER = 'SET_USER',
    LOGIN = 'LOGIN',
    SET_LOADING = 'SET_LOADING',
}

interface SetAuthAction {
    type: UserActionTypes.SET_AUTH
    payload: boolean
}

interface SetUserAction {
    type: UserActionTypes.SET_USER
    payload: UserInterface
}

interface setLoading {
    type: UserActionTypes.SET_LOADING
    payload: boolean
}

export type UserAction = SetAuthAction | setLoading | SetUserAction