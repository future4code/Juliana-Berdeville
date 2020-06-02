import React from 'react';
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
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
    display: inline-block;
    margin-left: 140px;
    margin-top: -70px;
    display: flex;
    flex-direction: row;
`
const LadoEsquerdo = styled.div`
    height: 400px;
    margin-top: 100px;
`
const TripTitle = styled.h1`
    color: #F9B384;
    font-family: 'Antic Slab', serif;
    font-size: 50px;
    margin-top: 20px;
    padding-bottom: 30px;
`
const TripDescription = styled.p`
    color: whitesmoke;
    width: 300px;
    height: 100px;
`
const LadoDireito = styled.div`
    margin-left: 180px;
    margin-top: 150px;

`
const TripInfo = styled.p`
    color: whitesmoke;
    padding-bottom: 30px;
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
const BotaoDeReserva = styled(Button)`
    background-color: blue;
`
function PublicTripsPage () {
    const history = useHistory()
    const goToHomePage=()=>{
        history.replace("/")
    }
    const goToApplicationPage=()=>{
        history.replace("/Viagens/Inscricao")
    }
  return (
   <BackgroundDiv>
       <NavbarDiv> <LogoH1Future onClick={goToHomePage}>Future</LogoH1Future><LogoH1X>X</LogoH1X> <Search placeholder="pesquisar"/></NavbarDiv>
       <CircleDivsContainer>
        <LeftCircleDiv>
            <LadoEsquerdo>
                    <TripTitle>Trip name</TripTitle>
                    <TripDescription>
                        Lorem Ipsum dollor mitches some latin text that i dunno how to type yadda yadda.
                    </TripDescription>
                    <BotaoDeReserva onClick={goToApplicationPage}>Reservar vaga</BotaoDeReserva>
            </LadoEsquerdo>

            <LadoDireito>
                    <TripInfo>Info 1</TripInfo>
                    <TripInfo>Info 2</TripInfo>
                    <TripInfo>Info 3</TripInfo>
                    <TripInfo>Info 4</TripInfo>
                    <TripInfo>Info 5</TripInfo>
            </LadoDireito>
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

export default PublicTripsPage;