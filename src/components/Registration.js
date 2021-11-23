import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import '../App.css'
import { register } from '../redux/authSlice';
import { useResource } from 'react-request-hook';
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const Registration = () => {

    const dispatch = useDispatch();

    const auth = useSelector((state) => state.auth)

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [reg, setReg] = useState(false)

    const handleRegShow = () => setReg(true);
    const handleRegClose = () => setReg(false)

    const handleSubmit = (event) => {

        const obj = {
            id: Date.now(),
            firstname: firstName,
            lastname: lastName,
            email: email,
            username: username,
            password: password
        }

        postLogin(obj)
        dispatch(register(obj))
    }

    const [users, postLogin] = useResource((obj) => ({
        url: `users`,
        data: obj,
        method: 'post'
    }))

    useEffect(() => {
        if( users && users.data) {
            console.log("users in DB ", users);
            // dispatch(login({
            //     username: username,
            //     password: password,
            //     users_list: users.data
            // }))
        }
    }, [users])


    const handleChange = (event) => {
        switch (event.target.name) {
            case 'firstName':
                setFirstName(event.target.value)
                break;
            case 'lastName':
                setLastName(event.target.value)
                break;
            case 'email':
                setEmail(event.target.value)
                break;
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
            <Button variant="primary btn-success" onClick={handleRegShow}>
                    Registration
                </Button>
            </div>

            <Modal show={reg} onHide={handleRegClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Registration</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div autoComplete="off" className="container">
                <div className="input-container">
                    <label htmlFor="firstname">Firstname</label>
                    <input
                        className="input-tag"
                        name="firstName"
                        id="firstName"
                        value={firstName}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="lastname">Lastname</label>
                    <input
                        className="input-tag"
                        name="lastName"
                        id="lastName"
                        value={lastName}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="email">Email</label>
                    <input
                        className="input-tag"
                        name="email"
                        id="email"
                        value={email}
                        onChange={handleChange}
                    />
                </div>
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
              
               
                <button className="submit-button" onClick={(event) => handleSubmit(event)}>Register</button>
              
            </div>
                </Modal.Body>
            </Modal>
        </div>

    )
}

export default Registration