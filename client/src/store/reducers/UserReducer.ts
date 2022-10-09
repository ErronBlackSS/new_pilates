import { UserAction, UserInterface, UserState, UserActionTypes } from "../../types/user_types/UserTypes"

const defaultUser: UserInterface = {
    email: '',
    id: 0,
    is_activated: false,
    name: '',
    lastname: '',
    phone: ''
}

const initialState: UserState = {
    user: defaultUser,
    isAuth: false,
    isLoading: true,
    error: null
}

export const UserReducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionTypes.SET_AUTH:
            return { ...state, isAuth: action.payload }
        case UserActionTypes.SET_USER:
            return { ...state, user: action.payload }
        case UserActionTypes.SET_LOADING:
            return { ...state, isLoading: action.payload }
        default: 
            return state
    }
}