import React, {useState} from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import '../App.css'
import { register } from '../redux/authSlice';

const Registration = () => {

    const dispatch = useDispatch();

    const auth = useSelector((state) => state.auth)

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        dispatch(register({
            firstname: firstName,
            lastname: lastName,
            email: email,
            username: username,
            password: password
        }))
    }



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
            {auth.loggedIn && <p>Succesfully registered and Logged In!</p>}
        </div>  
    )
}

export default Registration