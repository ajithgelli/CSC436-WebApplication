import React from 'react'
import AddTodoForm from './AddTodoForm';
import '../App.css'
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { toggleComplete, deleteTodo } from "../redux/todoSlice";


const TodoList = () => {

    const dispatch = useDispatch()
    const [checked, setChecked] = React.useState(false);
    // const todos =  JSON.parse(localStorage.getItem('todoList')) || []

    const todos = useSelector((state) => state.todos)
    const auth = useSelector((state) => state.auth)

    const handleChange = (event,todo, index) => {

        dispatch(
            toggleComplete({id: todo.id, complete: !todo.complete})
        )
    }

    const handleOnClickDelete = (event, todo) => {
        console.log("del", todo);
        dispatch(deleteTodo({id: todo.id}))
    }

 
    return (
         auth.loggedIn == true ? <div>
            <AddTodoForm></AddTodoForm>
            <p> Todo List </p>
            <ul>
                
                {todos.map((todo, index) => (
                    <div>
                        <li>{todo.title}</li>
                        <input 
                            type="checkbox" 
                            checked={todo.complete}
                            onChange={(event) => handleChange(event, todo, index)}
                        ></input>

                        <span class="dates"> Created :   {Date(todo.dateCreated)}</span>
                        <span class="dates"> Completed :  {todo.dateCompleted ? Date(todo.dateCompleted) : 'NA'}</span>
                        <button onClick={(event) => handleOnClickDelete(event, todo)} >Delete</button>
                    </div>
                ))}
            </ul>
        </div> : <p>Please login to view Todo List and AddTodo Form</p>
        
    )
};

export default TodoList;