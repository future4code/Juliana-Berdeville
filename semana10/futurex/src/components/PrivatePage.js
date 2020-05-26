import React from 'react';
import styled from 'styled-components'
import Button from '@material-ui/core/Button'

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
    margin-top: 150px;
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
function PrivatePage () {
  return (
    <BackgroundDiv>
        <NavbarDiv> <LogoH1Future>Future</LogoH1Future><LogoH1X>X</LogoH1X> </NavbarDiv>
        <AdminParapraph><HelloH1>Olá,</HelloH1><AdminH1>Administrador</AdminH1></AdminParapraph>
        <CircleDiv>
            <CircleDivParagraph>inscrições realizadas recentemente</CircleDivParagraph>
            <StyledButtons>Listar viagens</StyledButtons>
            <StyledButtons>Gerenciar viagens</StyledButtons>
            <StyledButtons>Criar viagem</StyledButtons>
        </CircleDiv>
    </BackgroundDiv>
  );
}

export default PrivatePage;