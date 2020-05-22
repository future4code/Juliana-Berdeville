import React from 'react';
import {FutureXRoutes} from './components/FutureXRoutes'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import TravelerPage from './components/TravelerPage'
import Adminpage from './components/AdminPage'



function App () 
{
  return (
    <BrowserRouter>
        <Switch>
                <Route exact path="/"> <Home /> </Route>
                <Route exact path="/Administrador"> <Adminpage /> </Route>
                <Route exact path="/Traveler"> <TravelerPage /> </Route>
                <Route exact path="/Login"> <Login /> </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;