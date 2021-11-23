import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './todoSlice'
import authReducer from './authSlice'
import profileRedcer from './profileSlice'
export default configureStore({
    reducer: {
        todos: todoReducer,
        auth: authReducer,
        profile: profileRedcer
    }
})