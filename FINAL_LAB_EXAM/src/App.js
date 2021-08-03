import Login from './components/Login';
import { useState, useEffect } from 'react';
import AddEmployee from './components/AddEmployee';
import AddProduct from './components/AddProduct';
import Navbar from './components/Navbar';
import UserList from './components/UserList';
import { useFetch } from './components/useFetch';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  const url = `./components/Products`;

  const [userlist, setUserList] = useState([]);
  useFetch(url, setUserList);

  return (

    <Router>
      <Switch>
        <Route exact path='/'>
          <h1>Welcome!</h1>
          <Navbar />
        </Route>
        <Route path='/login'>
          <div>
            <Login login />
          </div>
        </Route>
        <Route path='/signup'>
          <AddEmployee AddEmployee />
        </Route>
        <Route path='/addProduct'>
          <AddProduct AddProduct />
        </Route>
        <Route path='/userlist'>
            <div>
                <UserList list={userlist}/>
            </div>
          </Route>
        <Route path='*'>
          404 not found
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
