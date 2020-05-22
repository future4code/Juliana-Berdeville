import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Home from './Home'
import Adminpage from './AdminPage'
import TravelerPage from './TravelerPage'


function FuturexRoutes () 
{
  return (
    <BrowserRouter>
        <Switch>
                <Route exact path="/"> <Home /> </Route>
                <Route exact path="/Administrador"> <Adminpage /> </Route>
                <Route exact path="/Traveler"> <TravelerPage /> </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default FuturexRoutes;