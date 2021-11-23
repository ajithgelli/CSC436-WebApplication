import React, { useEffect, useState } from 'react'
import '../App.css'
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';
import { useResource } from 'react-request-hook';
import Button from 'react-bootstrap/Button';
import { Modal, Table } from 'react-bootstrap';
import Login from './Login';
import Registration from './Registration';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { setProfile } from "../redux/profileSlice";
const Profile = () => {

    const dispatch = useDispatch()
    var id = ''
    var data = {}
    const profile = useSelector((state) => state.profile)

    const [profileData, getProfile] = useResource(() => ({
        url: `user/profile?userId=${id}`,
        method: 'get'
    }))

    useEffect(getProfile, [])

    const getParams = () => {
        const queryParams = new URLSearchParams(window.location.search);
        id = queryParams.get('id');
        console.log("Iddd ", id);
    }

    useEffect(() => {
        if (profileData && profileData.data) {
            console.log("Profile effect", profileData.data);
            data = profileData.data
            console.log("Local log ", data);
            dispatch(setProfile(profileData.data))
        }

    }, [profileData])

    return (
        <>
            <div>Username: {getParams()}</div>

            <div>

                <h2> Profile</h2>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><li>{profile.details._id}</li> </td>
                            <td><li>{profile.details.firstname}</li> </td>
                            <td><li>{profile.details.lastname}</li> </td>
                            <td><li>{profile.details.email}</li> </td>
                            <td><li>{profile.details.username}</li> </td>
                        </tr>
                    </tbody>
                </Table>

                <h2> Todo List</h2>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Created Date</th>
                            <th>Completed Date</th>
                        </tr>
                    </thead>
                    <tbody>

                        {profile.todos.map((todo, index) => (
                            <tr>
                                <td><li>{todo._id}</li> </td>
                                <td><li>{todo.title}</li> </td>
                                <td><li>{todo.description}</li> </td>
                                <td><li>{todo.dateCreated}</li> </td>
                                <td><li>{todo.dateComplete}</li> </td>
                            </tr>
                        ))}

                    </tbody>
                </Table>
                <ul>

                </ul>
            </div>

        </>
    )
};

export default Profile