import React, {useEffect} from 'react'
import { withRouter } from 'react-router-dom'

import { useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';
import { useSelector } from 'react-redux';

const Logout = (props) => {
    
    const dispatch = useDispatch()
    const auth = useSelector((state) => state.auth)

    const handleClick = (event) => {
        dispatch(logout(false))
    }
    useEffect(
        () => {
            logout()
        }, []
    )

    // const handleClick = () => {
    //     props.history.push("/login")
    // }
    return (
        auth.loggedIn === true ? <div>
            <button onClick={(event) => handleClick(event)}>Logout</button>
        </div> : <p> You are succesfully Logged out!</p>
    )
}

export default withRouter(Logout)