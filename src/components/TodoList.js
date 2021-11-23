import React, { useEffect } from 'react'
import AddTodoForm from './AddTodoForm';
import '../App.css'
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { toggleComplete, deleteTodo, initialTodo } from "../redux/todoSlice";
import { useResource } from 'react-request-hook';
import { Modal, Table } from 'react-bootstrap';


const TodoList = () => {

    const dispatch = useDispatch()
    const [checked, setChecked] = React.useState(false);

    const todos = useSelector((state) => state.todos)
    const auth = useSelector((state) => state.auth)

    const handleChange = (event, todo, index) => {
        const todo2 = {
            id: todo._id,
            title: todo.title,
            description: todo.description,
            dateCreated: Date.now(),
            complete: !todo.complete,
            dateComplete: !todo.complete === true ? Date.now() : null
        }
        updateTodo(todo2)
        dispatch(
            toggleComplete({ id: todo._id, complete: !todo.complete })
        )
    }

    const handleOnClickDelete = (event, todo) => {
        console.log("del", todo);
        // deleteATodo(todo)
        dispatch(deleteTodo({ id: todo._id }))
    }


    const [todosList, getTodos] = useResource(() => ({
        url: `/todo?userId=${localStorage.getItem('userId')}`,
        headers: {
            'Authorization': 'Bearer ' + getToken()
        },
        method: 'get'
    }))

    const [tdo, deleteATodo] = useResource((singleTodo) => ({
        url: '/todos/' + singleTodo.id,
        method: 'delete'
    }))

    const [todo, updateTodo] = useResource((singleTodo) => ({
        url: '/todo',
        method: 'put',
        data: singleTodo
    }))

    function handleLog(event) {
        console.log("Log in fn", auth.loggedIn);
    }

    function getToken() {
        return localStorage.getItem("access_token");
    }
    useEffect(getTodos, [])

    useEffect(() => {
        console.log("state check auth ", auth.loggedIn);
        if (todosList && todosList.data) {
            console.log("Resource use effect ", todosList.data);
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
        true === true ? <div>
            <AddTodoForm></AddTodoForm>
            <p> Todo List </p>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Created Date</th>
                        <th>Check </th>
                        <th>Completed</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>

                    {todos.map((todo, index) => (
                        <tr>
                            <td><li>{todo._id}</li> </td>
                            <td><li>{todo.title}</li> </td>
                            <td><li>{todo.description}</li> </td>
                            <td><li>{todo.dateCreated}</li> </td>
                            <td>
                                <input
                                    type="checkbox"
                                    checked={todo.complete}
                                    onChange={(event) => handleChange(event, todo, index)}
                                ></input>
                            </td>
                            <td> <span class="dates">{todo.dateComplete ? Date(todo.dateComplete) : 'NA'}</span> </td>
                            <td><button onClick={(event) => handleOnClickDelete(event, todo)} >Delete</button></td>
                        </tr>
                    ))}

                </tbody>
            </Table>

        </div> : <p onClick={(event) => handleLog(event)}>Please login to view Todo List and AddTodo Form</p>

    )
};

export default TodoList;