import React, {useState} from 'react'
import '../App.css'
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';
import { useSelector } from 'react-redux';

const Login = () => {

    const dispatch = useDispatch()

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const auth = useSelector((state) => state.auth)

    const handleSubmit = (event) => {
        // validate()
        dispatch(login({
            username: username,
            password: password
        }))
    }



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
        auth.loggedIn == false ? <div>
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
        </div> :  <p>Succesfully Logged In! Go to TODO Page</p>
    )
};

export default Login