import React from 'react';
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { useHistory } from 'react-router'
import {useValidaSessao} from '../hooks/useValidaSessao'

const BackgroundDiv = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: #CA5116;
`

const CircleDivContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const CircleDiv = styled.div`
    height: 640px;
    width: 660px;
    background-color: #DD7631;
    border-radius: 50%;
    margin-top: -30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`
const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const NavbarDiv = styled.div`
    background-color: #CA5116;
    width: 100vw;
    height: 50px;
    display: flex;
    flex-direction: row;
`
const LogoH1Future = styled.div`
    font-size: 40px;
    font-family:'Playfair Display', serif;
    margin-left: 30px;
`
const LogoH1X = styled.div`
    font-size: 48px;
    font-family: 'Courgette', cursive;
    color: #f1e3cb;
    margin-left: 4px;
    margin-top: 2px;
`
const BotoesCustomizados = styled.button`
    margin-top: 70px;
    background-color: #581C0C;
    color: #ffff;
    box-shadow: none;
    padding: 5px;
    border-radius: 5%;
        :hover{
                    background-color: #CA5116;
                    transition: 2s;         
               }
`
const ItensDoFormulario = styled(TextField)`
    width: 400px;
`
const TripTitle = styled.h1`
    color: #F9B384;
    font-family: 'Antic Slab', serif;
    font-size: 40px;
    padding-bottom: 15px;
`

function AddTripPage () {

    /*Custom hook para validação da sessão*/
    useValidaSessao()
    /*Custom hook para validação da sessão*/

    /*Toggle entre páginas*/
    const history = useHistory()
    const goToPrivatedPage=()=>{
        history.replace("/Administrador")
    }
     /*Toggle entre páginas*/
  return (
   <BackgroundDiv>
       <NavbarDiv> <LogoH1Future onClick={goToPrivatedPage}>Future</LogoH1Future><LogoH1X>X</LogoH1X> </NavbarDiv>
    <CircleDivContainer>
        <CircleDiv>
                <TripTitle>Gerenciar Inscrições</TripTitle>
                <div>Ainda estou em desenvolvimento, mas em breve estarei 100%</div>
        </CircleDiv>
    </CircleDivContainer>
   </BackgroundDiv>
  );
}

export default AddTripPage;