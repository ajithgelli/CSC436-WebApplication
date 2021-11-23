import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList'
import AddTodoForm from './components/AddTodoForm'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'


import { Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import AppRoutes from './AppRoutes'; 
import Header from './Header'; 

function App() {
  return (

    <div>
       <Header></Header>
       <br />
        <div className="content">
          <AppRoutes/>
        </div>
     </div>
    // <Router>


     
      /* { <nav>
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
        <ul> 
          <li> <Button>Final</Button></li>
         </ul>
      </nav> */
    //}

      // <Switch>
      //   <Route path="/todo">
      //     <TodoList></TodoList>
      //   </Route>
      //   <Route path="/register">
      //     <Registration></Registration>
      //   </Route>
      //   <Route path="/login">
      //     <Login></Login>
      //   </Route>
      //   <Route path="/logout">
      //     <Logout></Logout>
      //   </Route>
      // </Switch>
    // {/* </Router> */}

  );
}

export default App;
