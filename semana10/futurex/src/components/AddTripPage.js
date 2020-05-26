import React from 'react';
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { useHistory } from 'react-router'

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

    const history = useHistory()
    const goToHomePage=()=>{
        history.replace("/")
    }

    const onClickTripAdded=()=>{
        alert('Viagem criada com sucesso!')
    }
  return (
   <BackgroundDiv>
       <NavbarDiv> <LogoH1Future onClick={goToHomePage}>Future</LogoH1Future><LogoH1X>X</LogoH1X> </NavbarDiv>
    <CircleDivContainer>
        <CircleDiv>
                <TripTitle>Criar nova viagem</TripTitle>
                <FormContainer>
                        <ItensDoFormulario label="Nome" variant="outlined" />
                        <ItensDoFormulario label="Preço" variant="outlined" />
                        <ItensDoFormulario label="Guia" variant="outlined" />
                        <ItensDoFormulario label="Destino" variant="outlined" />
                        <ItensDoFormulario
                        id="outlined-multiline-static"
                        multiline
                        rows={8}
                        defaultValue="Descrição"
                        variant="outlined"
                        />
                        <Button onClick={onClickTripAdded}>Criar viagem</Button>
                </FormContainer>
        </CircleDiv>
    </CircleDivContainer>
   </BackgroundDiv>
  );
}

export default AddTripPage;