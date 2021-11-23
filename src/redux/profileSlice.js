import { createSlice } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

const profileSlice = createSlice({
    name: "profile",
    initialState: {
        todos: [],
        details: {}
    },

    reducers: {

        setProfile: (state, action) => {
            console.log("pf", action.payload);
            // state = action.payload

            const users = action.payload
            state.todos.splice(0, state.length)

            users.todos.forEach(user => {
                state.todos.push(user)
            })
            state.details = action.payload.userDetails
        }
    }
})

export const {
    setProfile
} = profileSlice.actions;


export default profileSlice.reducer;