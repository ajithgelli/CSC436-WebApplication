import React, { useState } from 'react'


const AddTodoForm = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dateCreated, setDateCreated] = useState('');
    const [complete, setComplete] = useState('');
    const [dateComplete, setDateComplete] = useState('');


    const handleSubmit = () => {
        // validate()
        var oldTodos = JSON.parse(localStorage.getItem('todoList')) || [];
        var newTodos = {
            title: title,
            description: description,
            dateCreated: Date.now(),
            complete: complete,
            dateCompleted: Date.now()
        }
        oldTodos.push(newTodos)
        localStorage.setItem("todoList",JSON.stringify(oldTodos))
        setTitle(null)
        setDescription(null)
        refreshPage()
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
                if(event.target.checked)
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