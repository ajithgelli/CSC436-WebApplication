import { createSlice } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

const authSlice = createSlice({
    name: "auth",
    initialState: {
        loggedIn: false,
        user_store: [
            { firstname: 'Ajith', lastname: 'Gelli', email: 'ajiththeplayer@gmail.com', username: 'ajith23', password: 'password' },
            { firstname: 'Rahul', lastname: 'Kumar', email: 'rahul.kumar@gmail.com', username: 'rahul3', password: 'password' },
            { firstname: 'Rutwik', lastname: 'Joshi', email: 'rutwik.joshi@gmail.com', username: 'rutwik12', password: 'password' },
        ]
    },

    // initialState: [
    //     { firstname: 'Ajith', lastname: 'Gelli', email: 'ajiththeplayer@gmail.com', username: 'ajith23', password: 'password' },
    //     { firstname: 'Rahul', lastname: 'Kumar', email: 'rahul.kumar@gmail.com', username: 'rahul3', password: 'password' },
    //     { firstname: 'Rutwik', lastname: 'Joshi', email: 'rutwik.joshi@gmail.com', username: 'rutwik12', password: 'password' },
    // ],

    reducers: {

        // REGISTER Action and Reducer
        register: (state, action) => {
            const newUser = {
                firstname: action.payload.firstname,
                lastname: action.payload.lastname,
                email: action.payload.email,
                username: action.payload.username,
                password: action.payload.password,
            };
            state.user_store.push(newUser)
            state.loggedIn = true
        },
        // LOGIN Action and Reducer
        login: (state, action) => {


            const isUser = state.user_store.find((user) => user.username === action.payload.username && user.password === action.payload.password)

            if (isUser != undefined) {
                state.loggedIn = true
            } else {
                state.loggedIn = false
            }
        },

        // LOGIN Action and Reducer
        logout: (state, action) => {
            state.loggedIn = false
        },

    }
})

export const {
    register,
    login,
    logout
} = authSlice.actions;


export default authSlice.reducer;