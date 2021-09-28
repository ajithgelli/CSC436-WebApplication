import React from 'react'
import AddTodoForm from './AddTodoForm';
import '../App.css'

const TodoList = () => {

    const [checked, setChecked] = React.useState(false);
    const todos =  JSON.parse(localStorage.getItem('todoList')) || []

    

    const handleChange = (event,todo, index) => {
        if(event.target.checked) {
            console.log('Checked');
            todos[index].complete = true
            todos[index].dateCompleted = Date.now()
        }
        else {
            console.log('Unchecked');
            todos[index].complete = false
            todos[index].dateCompleted = null
        }

        todos.forEach(chkItem=>{
       if(chkItem === todo){ 
            chkItem.complete = event.target.checked;
          }
       })

       window.location.reload(false);
        
       localStorage.setItem("todoList",JSON.stringify(todos))
    }

    const handleClick = (event, index) => {

    }

 
    return (
        <div>
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

                        <span class="dates"> Created :  {Date(todo.dateCreated)}</span>
                        <span class="dates"> Completed :  {todo.dateCompleted ? Date(todo.dateCompleted) : 'NA'}</span>
                    </div>
                ))}
            </ul>
        </div>
    )
};

export default TodoList;