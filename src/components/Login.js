import React, {useState} from 'react'
import '../App.css'

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');



    const handleSubmit = () => {
        // validate()
        localStorage.setItem("loggedIn", true)
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
                
                <button className="submit-button" onClick={handleSubmit}>Login</button>
            </div>
        </div>
    )
};

export default Login