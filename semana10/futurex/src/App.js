import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import HomePage from './components/HomePage'
import LoginPage from './components/LoginPage'
import PublicPage from './components/PublicPage'
import PrivatePage from './components/PrivatePage'
import PublicTripsPage from './components/PublicTripsPage'
import ApplicationPage from './components/ApplicationPage'
import AddTripPage from './components/AddTripPage'
import ManageApplicationPage from './components/ManageApplicationPage'
import ListTripPage from './components/ListTripPage'

function App () 
{
  return (
    <BrowserRouter>
        <Switch>
                <Route exact path="/"> <HomePage/> </Route>
                <Route exact path="/Administrador"> <PrivatePage/> </Route>
                <Route exact path="/Viagens"> <PublicPage/> </Route>
                <Route exact path="/login"> <LoginPage/> </Route>
                <Route exact path="/Viagens/detalhes-da-viagem"> <PublicTripsPage/> </Route>
                <Route exact path="/Viagens/Inscricao"> <ApplicationPage/> </Route>
                <Route exact path="/Administrador/Adicionar-viagem"> <AddTripPage/> </Route>
                <Route exact path="/Administrador/Gerenciar-inscricoes"> <ManageApplicationPage/> </Route>
                <Route exact path="/Administrador/Listar-viagens"> <ListTripPage /> </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;