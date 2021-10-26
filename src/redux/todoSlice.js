import { createSlice } from '@reduxjs/toolkit'


const todoSlice = createSlice({
        name: "todos",
        initialState: [

        ],

        reducers: {
            //CREATE_TODO Action and Reducer
            initialTodo: (state, action) => {
                console.log("Reducer", action.payload);
                const posts = action.payload
                state.splice(0, state.length)
                posts.forEach(post => {
                    state.push(post)
                })
                    // state.concat(action.payload)
                console.log("After reducing: ", state.length);
            },
            addTodo: (state, action) => {
                const newTodo = {
                    id: Date.now(),
                    title: action.payload.title,
                    description: action.payload.description,
                    dateCreated: action.payload.dateCreated,
                    complete: action.payload.complete,
                    dateComplete: action.payload.dateComplete
                };
                state.push(newTodo)
            },
            //TOGGLE_TODO Action and Reducer
            toggleComplete: (state, action) => {
                console.log("Acction", action.payload);
                const index = state.findIndex(
                    (todo) => todo.id === action.payload.id
                )
                console.log("Inndex", index);
                state[index].complete = action.payload.complete
                if(action.payload.complete === true) {
                    state[index].dateComplete = Date.now()
                } else {
                    state[index].dateComplete = null
                }
                console.log("state In ", action.payload.complete);
            },
            //DELETE_TODO Action and Reducer
            deleteTodo: (state, action) => {
                return state.filter((todo) => todo.id !== action.payload.id)
            }
        }
    },


    // {
    //     name: "loggedInState",
    //     initialState: false,
    //     reducers: {
    //         success: (state, action) => {
    //             state.push(action.payload)
    //         },
    //         failure: (state, action) => {
    //             state.push(!action.payload)
    //         },
    //         logout_state: (state, action) => {
    //             state.push(!action.payload)
    //         }
    //     }
    // }

);

export const {
    addTodo,
    toggleComplete,
    deleteTodo,
    initialTodo
} = todoSlice.actions;


export default todoSlice.reducer;