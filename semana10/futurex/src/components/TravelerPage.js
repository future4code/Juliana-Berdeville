import React from 'react';
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

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
    height: 380px;
    width: 400px;
    background-color: #DD7631;
    border-radius: 50%;
    display: inline-block;
    margin-left: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
`
const RightCircleDiv = styled.div`
    height: 380px;
    width: 400px;
    background-color: #D8C593;
    border-radius: 50%;
    display: inline-block;
    margin-left: 150px;
    display: flex;
    right: 0;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    margin-top: 80px;
    margin-left: 500px;
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
const Search = styled(TextField)`
    width: 500px;
    height: auto;
    background-color: #581C0C;
    margin-top: 20px;
    align-self: center;
    justify-content: center;
    border: none;
`
const LeftCircleDivTitle = styled.h1`
    color: #F9B384;
    font-family: 'Antic Slab', serif;
    font-size: 60px;
    margin-left: -210px;
    margin-top: 20px;
    padding-bottom: 30px;
`
const LeftCircleDivP = styled.p`
    color: #fff;
    margin-left: -180px;
    padding-bottom: 30px;
    width: 250px;
    font-size: 15px;
`
const BotoesCustomizados = styled(Button)`
    margin-top: 70px;
    background-color: #581C0C;
    color: #ffff;
    box-shadow: none;
    padding: 20px;
        :hover{
                    background-color: #CA5116;
                    transition: 2s;         
               }
`
function TravelerPage () {
  return (
   <BackgroundDiv>
       <NavbarDiv> <LogoH1Future>Future</LogoH1Future><LogoH1X>X</LogoH1X> </NavbarDiv>
       <Search placeholder="pesquisar" label="pesquisar" margin="normal" variant="outlined"/>
       <CircleDivsContainer>
        <LeftCircleDiv>
            <LeftCircleDivTitle>
                Saturno
            </LeftCircleDivTitle>
            <LeftCircleDivP>
                Saturno é o sexto planeta a partir do Sol, e o segundo maior do sistema solar e 
                é conhecido pelo complexo sistema de anéis formados principalmente por gelo e poeira 
                cósmica.
                Por ser um planeta gasoso, é composto principalmente por hidrogênio e hélio.
            </LeftCircleDivP>
            <Button>inscreva-se</Button>
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

export default TravelerPage;