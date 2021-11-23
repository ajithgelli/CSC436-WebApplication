import React, { useEffect, useState } from 'react'
import '../App.css'
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';
import { useResource } from 'react-request-hook';
import Button from 'react-bootstrap/Button';
import { Modal } from 'react-bootstrap';
import Login from './Login';
import Registration from './Registration';

const Home = () => {
    return (
        <>
            <Login></Login>
            <Registration></Registration>
        </>
    )
};

export default Home