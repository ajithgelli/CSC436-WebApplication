import React, { Component, Suspense, lazy } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import TodoList from './components/TodoList'
import AddTodoForm from './components/AddTodoForm'
import Login from './components/Login';
import Logout from './components/Logout';
import Registration from './components/Registration'
import Home from './components/Home';
import Users from './components/Users';
import Profile from './components/Profile';

export class AppRoutes extends Component {
    render() {
        return (
            <Router fallback=''>
                <Switch>
                    <Route path="/todo">
                        <TodoList></TodoList>
                    </Route>
                    <Route path="/home">
                        <Home></Home>
                    </Route>
                    <Route path="/register">
                        <Registration></Registration>
                    </Route>
                    <Route path="/login">
                        <Login></Login>
                    </Route>
                    <Route path="/user">
                        <Users></Users>
                    </Route>
                    <Route path="/profile">
                        <Profile></Profile>
                    </Route>
                    <Route path="/logout">
                        <Logout></Logout>
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default AppRoutes