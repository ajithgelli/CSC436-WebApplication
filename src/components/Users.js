import React, { useEffect } from 'react'
import AddTodoForm from './AddTodoForm';
import '../App.css'
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { storeUsers } from "../redux/authSlice";
import { useResource } from 'react-request-hook';
import { Table } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Users = () => {

    const dispatch = useDispatch()
    const [checked, setChecked] = React.useState(false);

    const users = useSelector((state) => state.auth)



    const [todosList, getTodos] = useResource(() => ({
        url: `user`,
        method: 'get'
    }))


    useEffect(getTodos, [])

    useEffect(() => {
        if (todosList && todosList.data) {
            console.log("Resource use effect ", todosList.data);
            dispatch(storeUsers(todosList.data))
        }

    }, [todosList])

    
    // const routeChange = (id) => {
    //     let history = useHistory();
    //     console.log("Idd ", id);
    //     history.push({
    //         pathname: 'profile',
    //         data: id
    //     });
    // }

    return (
        <div>

            <p> Users List </p>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Username</th>
                        <th>Profile</th>
                    </tr>
                </thead>
                <tbody>

                    {users.map((user, index) => (
                        <tr>
                            <td><li>{user._id}</li> </td>
                            <td><li>{user.firstname}</li> </td>
                            <td><li>{user.lastname}</li> </td>
                            <td><li>{user.email}</li> </td>
                            <td><li>{user.username}</li> </td>
                            <td><li><Button  onClick={event =>  window.location.href=`/profile?id=${user._id}`}>View Profile</Button></li> </td>
                        </tr>
                    ))}
                    {/* <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td colSpan="2">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr> */}
                </tbody>
            </Table>
            <ul>

            </ul>
        </div>

    )
};

export default Users;