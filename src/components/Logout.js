import React, {useEffect} from 'react'

const Logout = () => {
    
    const logout = () => {
        localStorage.setItem("loggedIn", false)
    }
    useEffect(
        () => {
            logout()
        }, []
    )
    return (
        <p> You are succesfully Logged out!</p>
    )
}

export default Logout