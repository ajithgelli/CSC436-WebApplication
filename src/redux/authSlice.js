import { createSlice } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

const authSlice = createSlice({
    name: "users",
    initialState: [],
    // initialState: {
    // loggedIn: false,
    // user_store: [
    //     { firstname: 'Ajith', lastname: 'Gelli', email: 'ajiththeplayer@gmail.com', username: 'ajith23', password: 'password' },
    //     { firstname: 'Rahul', lastname: 'Kumar', email: 'rahul.kumar@gmail.com', username: 'rahul3', password: 'password' },
    //     { firstname: 'Rutwik', lastname: 'Joshi', email: 'rutwik.joshi@gmail.com', username: 'rutwik12', password: 'password' },
    // ]
    // },

    // initialState: [
    //     { firstname: 'Ajith', lastname: 'Gelli', email: 'ajiththeplayer@gmail.com', username: 'ajith23', password: 'password' },
    //     { firstname: 'Rahul', lastname: 'Kumar', email: 'rahul.kumar@gmail.com', username: 'rahul3', password: 'password' },
    //     { firstname: 'Rutwik', lastname: 'Joshi', email: 'rutwik.joshi@gmail.com', username: 'rutwik12', password: 'password' },
    // ],

    reducers: {

        // REGISTER Action and Reducer
        storeUsers: (state, action) => {
            console.log("st", action.payload);

            const users = action.payload
            state.splice(0, state.length)
            users.forEach(user => {
                state.push(user)
            })

            console.log("after st", state.user_store);
        },
        initialAuth: (state, action) => {
            // console.log("Reducer", action.payload);
            // const users = action.payload

            // state.user_store.splice(0, state.user_store.length)
            // users.forEach(user => {
            //     state.user_store.push(user)
            // })
            // state.loggedIn = action.payload.loggedIn
            //     // state.concat(action.payload)
            // console.log("After reducing: ", state.length);
        },
        register: (state, action) => {
            const newUser = {
                firstname: action.payload.firstname,
                lastname: action.payload.lastname,
                email: action.payload.email,
                username: action.payload.username,
                password: action.payload.password,
            };
            console.log("User store users list ", state);
            state.loggedIn = true
        },
        // LOGIN Action and Reducer
        login: (state, action) => {
            console.log("Reducer stat ", action.payload);
            // state.loggedIn = action.payload
            console.log("State changed to ", state);

            // const isUser = action.payload.users_list.user_store.find((user) => user.username === action.payload.username && user.password === action.payload.password)

            // if (isUser != undefined) {
            //     state.loggedIn = true
            // } else {
            //     state.loggedIn = false
            // }
        },

        // LOGIN Action and Reducer
        logout: (state, action) => {
            state.loggedIn.loggedIn = false
        },

    }
})

export const {
    register,
    login,
    storeUsers,
    logout
} = authSlice.actions;


export default authSlice.reducer;