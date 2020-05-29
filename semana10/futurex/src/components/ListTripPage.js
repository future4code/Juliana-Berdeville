import React from 'react'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import {useValidaSessao} from '../hooks/useValidaSessao'
import axios from 'axios'

const StyledButtons = styled(Button)`
    background-color: #581C0C;
    color: #ffff;
    box-shadow: none;
    padding: 20px;
        :hover{
                    background-color: #CA5116;
                    transition: 2s;         
               }
`
const BackgroundDiv = styled.div`
background-color: #CA5116;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

// `
 const NavbarDiv = styled.div`
     background-color: #CA5116;
     width: 100vw;
     height: 50px;
     display: flex;
     flex-direction: row;
     justify-content: space-between;
 `
// const CircleDiv = styled.div`
//     height: 400px;
//     width: 400px;
//     background-color: #F9B384;
//     border-radius: 50%;
//     display: inline-block;
//     margin-left: 150px;
//     margin-top: -50px;
//     display: flex;
//     position:fixed;
//     flex-direction: column;
//     align-items: center;
//     justify-items: center;
// `
const LogoH1Future = styled.div`
    font-size: 40px;
    font-family:'Playfair Display', serif;
    margin-left: 30px;
`
const LogoH1X = styled.div`
    font-size: 48px;
    font-family: 'Courgette', cursive;
    color: #f1e3cb;
    margin-left: -1100px;
    margin-top: 2px;
`
// const CircleDivParagraph = styled.p`
//     margin-top: 130px;
//     padding: 10px;
//     font-family: 'Hind', sans-serif;
// `
// const AdminParapraph = styled.p`
//    margin-left: 900px;
//    margin-top: 70px;
// `
// const HelloH1 = styled.h1`
//     font-size: 60px;
//     font-weight: lighter;
// `
// const AdminH1 = styled.h1`
//     color: #F1E3CB;
//     font-family: 'Julius Sans One', sans-serif;
//     font-size: 60px;
// `
const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 90%;
`
function ListTripPage () {

    /*Custom hook para validação da sessão*/
        useValidaSessao()
    /*Custom hook para validação da sessão*/

    /*Toggle entre páginas*/
    const history = useHistory()
    const goToPrivatedPage=()=>{
        history.replace("/Administrador")
    }
     /*Toggle entre páginas*/

    /*Requisição axios*/
    const GetTripsDetails = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/juliana-julian/trips')
            .then(response=>{console.log(response)})
    }
    /*Requisição axios*/
  return (
    <BackgroundDiv>
        <NavbarDiv> <LogoH1Future onClick={goToPrivatedPage}>Future</LogoH1Future><LogoH1X>X</LogoH1X> <Button variant="filled" onClick={GetTripsDetails}>Listar viagens</Button></NavbarDiv>
        <InfoContainer>
                <p>Info das trips vem aqui</p>
        </InfoContainer>
    </BackgroundDiv>
  )
}

export default ListTripPage;