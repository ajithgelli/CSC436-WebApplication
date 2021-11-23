import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'

import { useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { Modal } from 'react-bootstrap';
import { useState } from 'react'


const Logout = (props) => {

    const dispatch = useDispatch()
    const auth = useSelector((state) => state.auth)

    const [log, setLog] = useState(false);
    const handleClose = () => setLog(false);
    const handleShow = () => setLog(true);

    const handleClick = (event) => {
        console.log("CLikked");
        var isLoggedOut = localStorage.getItem('loggedIn')
        console.log("CLikked click ", isLoggedOut);

        if (isLoggedOut) {
            localStorage.setItem('loggedIn', false)
            handleShow()
        } else {

        }
    }
    useEffect(
        () => {
            logout()
        }, []
    )

    return (
        <div>
            <Button onClick={(event) => handleClick(event)}>Logout</Button>
            <Modal show={log} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                   <p>Logged out</p>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default withRouter(Logout)