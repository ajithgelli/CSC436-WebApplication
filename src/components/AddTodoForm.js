import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';
import { useResource } from 'react-request-hook';

const AddTodoForm = () => {

    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dateCreated, setDateCreated] = useState('');
    const [complete, setComplete] = useState(false);
    const [dateComplete, setDateComplete] = useState('');


    const handleSubmit = () => {
        const userId = localStorage.getItem('userId')
        var jwt = localStorage.getItem('access_token')
        const todo = {
            title: title,
            description: description,
            dateCreated: Date.now(),
            complete: complete,
            dateComplete: complete === true ? Date.now() : null,
            userId: userId
        }
        createTodo(todo, jwt)
        dispatch(addTodo(todo))
    }


    function refreshPage() {
        window.location.reload(false);
    }
    const handleChange = (event) => {
        switch (event.target.name) {
            case 'title':
                setTitle(event.target.value)
                break;
            case 'description':
                setDescription(event.target.value)
                break;
            case 'complete':
                if (event.target.checked)
                    setComplete(true)
                else
                    setComplete(false)
                break;
        }
    }

    const handleClick = (event) => {
        console.log("ist", event.target.value);
        setComplete(event.target.value)
    }

    const [todo, createTodo] = useResource((singleTodo, jwtStr) => ({
        url: '/todo',
        method: 'post',
        headers: {
            'Authorization': 'Bearer ' + jwtStr
        },
        data: singleTodo
    }))


    return (
        <div>
            <div autoComplete="off" className="container">
                <div className="input-container">
                    <label htmlFor="title">Title</label>
                    <input
                        className="input-tag"
                        name="title"
                        id="title"
                        value={title}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="description">Description</label>
                    <input
                        className="input-tag"
                        name="description"
                        id="description"
                        value={description}
                        onChange={handleChange}
                    />
                </div>

                <div className="input-container">
                    <label htmlFor="complete">Complete</label>
                    <input
                        type="checkbox"
                        className="input-tag"
                        name="complete"
                        id="complete"
                        value={complete}
                        onClick={handleClick}
                        onChange={handleChange}
                    />
                </div>


                <button className="submit-button" onClick={handleSubmit}>Add Todo</button>


            </div>
        </div>
    )
}

export default AddTodoForm