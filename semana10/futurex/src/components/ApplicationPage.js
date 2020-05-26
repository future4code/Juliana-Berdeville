import React from 'react';
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Input from '@material-ui/core/Input'
import { useHistory } from 'react-router';

const BackgroundDiv = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: #CA5116;
`
const CircleDivsContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 70px;
`
const LeftCircleDiv = styled.div`
    height: 600px;
    width: 600px;
    background-color: #DD7631;
    border-radius: 50%;
    margin-left: 140px;
    margin-top: -70px;
    display: flex;
    align-items: center;
    justify-content: center;
    
`
const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const RightCircleDiv = styled.div`
    height: 380px;
    width: 400px;
    background-color: #D8C593;
    border-radius: 50%;
    display: inline-block;
    display: flex;
    right: 0;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    margin-top: 150px;
    margin-left: 210px;
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
const Search = styled(Input)`
    width: 500px;
    height: 40px;
    background-color: #581C0C;
    margin-top: 20px;
    align-self: center;
    justify-content: center;
    text-align: center;
    display: flex;
    margin-left: 730px;
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

function ApplicationPage () {

    const history = useHistory()
    const goToHomePage=()=>{
        history.replace("/")
    }
    const onClickReservaAlert=()=>{
        alert('Vaga reservada!')
        let count=0
        count++
    }

  return (
   <BackgroundDiv>
       <NavbarDiv> <LogoH1Future onClick={goToHomePage}>Future</LogoH1Future><LogoH1X>X</LogoH1X> <Search placeholder="pesquisar"/></NavbarDiv>
       <CircleDivsContainer>
        <LeftCircleDiv>
            <FormContainer>
            <ItensDoFormulario label="nome" variant="outlined" />
            <ItensDoFormulario label="e-mail" variant="outlined" />
            <ItensDoFormulario label="CPF" variant="outlined" />
            <ItensDoFormulario label="RG" variant="outlined" />
            <ItensDoFormulario
                 id="outlined-multiline-static"
                 multiline
                 rows={8}
                 defaultValue="Observações"
                 variant="outlined"
               />
            <Button onClick={onClickReservaAlert}>Reservar vaga</Button>
            </FormContainer>
        </LeftCircleDiv>

        <RightCircleDiv>
            <BotoesCustomizados variant="contained">Achados&Perdidos</BotoesCustomizados>
            <BotoesCustomizados variant="contained">Fale conosco</BotoesCustomizados>
            <BotoesCustomizados variant="contained">Sobre nós</BotoesCustomizados>
        </RightCircleDiv>
        </CircleDivsContainer>
   </BackgroundDiv>
  );
}

export default ApplicationPage;