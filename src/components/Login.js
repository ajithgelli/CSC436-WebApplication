import React, {useEffect, useState} from 'react'
import '../App.css'
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';
import { useResource } from 'react-request-hook';

const Login = () => {

    const dispatch = useDispatch()

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');



    const handleSubmit = (event) => {
        // validate()
        console.log("Ass ", `login/${username}/${password}`);
        getLogin(username, password)
        // dispatch(login({
        //     username: username,
        //     password: password
        // }))
    }

    const [users, getLogin] = useResource((username, password) => ({
        url: `login/${username}/${password}`,
        method: 'get'
    }))

    useEffect(() => {
        if( users && users.data !== undefined && users.data.length > 0) {
            console.log("Success ");
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
    )
};

export default Login