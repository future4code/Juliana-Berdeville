/*Importações necessárias*/
import React, {useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import {useValidaSessao} from '../hooks/useValidaSessao'
/*Importações necessárias*/


/*Estilização dos componentes da página*/
const StyledButtons = styled(Button)`
    background-color: #581C0C;
    color: #ffff;
    box-shadow: none;
    padding: 20px;
        :hover{
                    background-color: #CA5116;
                    transition: 2s;         
               }
`;
const BackgroundDiv = styled.div`
background-color: #CA5116;
height: 100vh;

`
const NavbarDiv = styled.div`
    background-color: #CA5116;
    width: 100vw;
    height: 50px;
    display: flex;
    flex-direction: row;
`
const CircleDiv = styled.div`
    height: 400px;
    width: 400px;
    background-color: #F9B384;
    border-radius: 50%;
    display: inline-block;
    margin-left: 150px;
    margin-top: -50px;
    display: flex;
    position:fixed;
    flex-direction: column;
    align-items: center;
    justify-items: center;
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
const CircleDivParagraph = styled.p`
    margin-top: 130px;
    padding: 10px;
    font-family: 'Hind', sans-serif;
`
const AdminParapraph = styled.p`
   margin-left: 900px;
   margin-top: 70px;
`
const HelloH1 = styled.h1`
    font-size: 60px;
    font-weight: lighter;
`
const AdminH1 = styled.h1`
    color: #F1E3CB;
    font-family: 'Julius Sans One', sans-serif;
    font-size: 60px;
`
/*Estilização dos componentes da página*/

function PrivatePage (props) {

/*Custom hook para validação da sessão*/
useValidaSessao()
/*Custom hook para validação da sessão*/

/*Toggle entre práginas*/
const history = useHistory()
const goToAddTripPage=()=>{
    history.replace("/Administrador/Adicionar-viagem")
}
const goToListTripsPage=()=>{
    history.replace("/Administrador/Listar-viagens")
}
const goToManageApllicationPage=()=>{
    history.replace("/Administrador/Gerenciar-inscricoes")
}
/*Toggle entre práginas*/

  return (
    <BackgroundDiv>
        <NavbarDiv> <LogoH1Future>Future</LogoH1Future><LogoH1X>X</LogoH1X> </NavbarDiv>
        <AdminParapraph><HelloH1>Olá,</HelloH1><AdminH1>Administrador</AdminH1></AdminParapraph>
        <CircleDiv>
            <CircleDivParagraph>Painel de ações:</CircleDivParagraph>
            <StyledButtons onClick={goToListTripsPage}>Listar viagens</StyledButtons>
            <StyledButtons onClick={goToManageApllicationPage}>Gerenciar viagens</StyledButtons>
            <StyledButtons onClick={goToAddTripPage}>Criar viagem</StyledButtons>
        </CircleDiv>
    </BackgroundDiv>
  )
}

/*Exportação do componente*/
export default PrivatePage;
/*Exportação do componente*/