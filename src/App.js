import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList'
import AddTodoForm from './components/AddTodoForm'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login';
import Logout from './components/Logout';
import Registration from './components/Registration'
function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Registration</Link>
          </li>
          <li>
            <Link to="/todo">Todo</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li> 
        </ul>
      </nav>

      <Switch>
        <Route path="/todo">
          <TodoList></TodoList>
        </Route>
        <Route path="/register">
          <Registration></Registration>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/logout">
          <Logout></Logout>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
