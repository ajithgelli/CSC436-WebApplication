import { createSlice } from '@reduxjs/toolkit'


const todoSlice = createSlice({
        name: "todos",
        initialState: [
            { id: 1, title: 'Todo1', description: 'description1', dateCreated: Date.now(), complete: false, dateCompleted: null },
            { id: 2, title: 'Todo2', description: 'description2', dateCreated: Date.now(), complete: false, dateCompleted: null },
            { id: 3, title: 'Todo3', description: 'description3', dateCreated: Date.now(), complete: true, dateCompleted: Date.now},
            { id: 4, title: 'Todo4', description: 'description4', dateCreated: Date.now(), complete: false, dateCompleted: null },
        ],

        reducers: {
            //CREATE_TODO Action and Reducer
            addTodo: (state, action) => {
                const newTodo = {
                    id: Date.now(),
                    title: action.payload.title,
                    description: action.payload.description,
                    dateCreated: action.payload.dateCreated,
                    completed: false,
                    dateComplete: action.payload.dateComplete
                };
                state.push(newTodo)
            },
            //TOGGLE_TODO Action and Reducer
            toggleComplete: (state, action) => {
                const index = state.findIndex(
                    (todo) => todo.id === action.payload.id
                )
                state[index].complete = action.payload.complete
                state[index].dateCompleted = Date.now()
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
} = todoSlice.actions;


export default todoSlice.reducer;