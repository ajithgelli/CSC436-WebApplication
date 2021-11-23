import React, { useEffect, useState } from 'react'
import '../App.css'
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';
import { useResource } from 'react-request-hook';
import { render } from '@testing-library/react';
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const Login = () => {
    const [log, setLog] = useState(false);
    const [reg, setReg] = useState(false)
    const handleClose = () => setLog(false);
    const handleShow = () => setLog(true);

    const dispatch = useDispatch()

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');



    const handleSubmit = (event) => {
        console.log("Ass ", `login/${username}/${password}`);
        getLogin(username, password)
    }

    const [users, getLogin] = useResource((username, password) => ({
        url: `user/login?username=${username}&password=${password}`,
        headers: {
            'Authorization': 'login',
        },
        method: 'get'
    }))

    useEffect(() => {
        console.log("users ", users.data);
        if (users.data && users.data.access_token !== undefined) {
            console.log("Success log");
            localStorage.setItem('loggedIn',true)
            localStorage.setItem('userId', users.data.details._id)
            localStorage.setItem('access_token', users.data.access_token)

            dispatch(login({
                loggedIn: true
            }))
        }
        // else {
        //     console.log("Failed");
        //     dispatch(login({
        //         loggedIn: false
        //     }))
        // }
    }, [users])

    const handleChange = (event) => {
        switch (event.target.name) {
            case 'username':
                setUsername(event.target.value)
                break;
            case 'password':
                setPassword(event.target.value)
                break;
        }
    }

    return (
        <div>
            <div class="d-grid gap-2 block-home">
                <Button variant="primary" onClick={handleShow}>
                    Login
                </Button>
            </div>

            <Modal show={log} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <div autoComplete="off" className="container">
                            <div className="input-container">
                                <label htmlFor="username">Username</label>
                                <input
                                    className="input-tag"
                                    name="username"
                                    id="username"
                                    value={username}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="input-container">
                                <label htmlFor="password">Password</label>
                                <input
                                    className="input-tag"
                                    name="password"
                                    id="password"
                                    value={password}
                                    onChange={handleChange}
                                />
                            </div>

                            <button className="submit-button" onClick={(event) => handleSubmit(event)}>Login</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>

    )

};

export default Login