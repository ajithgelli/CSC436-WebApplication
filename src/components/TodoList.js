import React, { useEffect } from 'react'
import AddTodoForm from './AddTodoForm';
import '../App.css'
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { toggleComplete, deleteTodo, initialTodo } from "../redux/todoSlice";
import { useResource } from 'react-request-hook';


const TodoList = () => {

    const dispatch = useDispatch()
    const [checked, setChecked] = React.useState(false);

    const todos = useSelector((state) => state.todos)
    const auth = useSelector((state) => state.auth)

    const handleChange = (event,todo, index) => {
        const todo2 = {
            id: todo.id,
            title: todo.title,
            description: todo.description,
            dateCreated: Date.now(),
            complete: !todo.complete,
            dateComplete: !todo.complete === true ? Date.now() : null
        }
        updateTodo(todo2)
        dispatch(
            toggleComplete({id: todo.id, complete: !todo.complete})
        )
    }

    const handleOnClickDelete = (event, todo) => {
        console.log("del", todo);
        deleteATodo(todo)
        dispatch(deleteTodo({id: todo.id}))
    }

  
    const [todosList, getTodos] = useResource(() => ({
        url: '/todos',
        method: 'get'
    }))

    const [tdo, deleteATodo] = useResource((singleTodo) => ({
        url: '/todos/' + singleTodo.id,
        method: 'delete'
    }))

    const [todo, updateTodo] = useResource((singleTodo) => ({
        url: '/todos/' + singleTodo.id,
        method: 'put',
        data: singleTodo
    }))

    function handleLog(event) {
            console.log("Log in fn", auth.loggedIn);
    }
    useEffect(getTodos, [])

    useEffect(() => {
        console.log("state check auth ", auth.loggedIn);
        if(todosList && todosList.data) {
            console.log("Resource use effect " , todosList.data );
            dispatch(initialTodo(todosList.data))
        }
        // fetch('http://localhost:4000/todos')
        //     .then(result => result.json())
        //     .then(todos => {
        //         console.log("DB: ", todos);
        //         dispatch(initialTodo(todos))
        //     })
    }, [todosList])

    
    return (
          auth.loggedIn?.loggedIn === true ? <div>
            <AddTodoForm></AddTodoForm>
            <p> Todo List </p>
            <ul>
                
                { todos.map((todo, index) => (
                    <div>
                        <li>{todo.title}</li>
                        <input 
                            type="checkbox" 
                            checked={todo.complete}
                            onChange={(event) => handleChange(event, todo, index)}
                        ></input>

                        <span class="dates"> Created :   {Date(todo.dateCreated)}</span>
                        <span class="dates"> Completed :  {todo.dateComplete ? Date(todo.dateComplete) : 'NA'}</span>
                        <button onClick={(event) => handleOnClickDelete(event, todo)} >Delete</button>
                    </div>
                ))}
            </ul>
        </div> : <p onClick={ (event) =>  handleLog(event)}>Please login to view Todo List and AddTodo Form</p>
        
    )
};

export default TodoList;