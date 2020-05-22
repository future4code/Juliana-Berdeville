import React from 'react';
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'

const BackgroundDiv = styled.div`
    background-image: url("/background-futurex.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height:100vh;
    display: flex;
    flex-direction: row;
`
const InputDiv = styled.div`
    display:flex;
    flex-direction: column;
    margin-top: 20px;
    margin-left: 700px;
    height: 180px;
    align-self: center;
    justify-self: center;
    position: absolute;
`
const LoginInput = styled(TextField)`
    width: 300px;
    height:auto;
`
const DivDepoimento = styled.div`
  display: flex;
  flex-direction: column;
  height: 180px;
  margin-left: 130px;
  margin-top: 230px;
  position: fixed;
`
const H1Depoimento = styled.h1`
  font-size: 30px;
  font-family: 'Hind', sans-serif;
`
const PDepoimento = styled.h1`
  font-style: italic;
  font-size: 14px;
  font-weight: lighter;
  font-family: 'Hind', sans-serif;
  width: 200px;
`
/*Div que abrange os elementos que compoem o logo da página*/
const LogoDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 30px;
    width: 30%;
    height: 15%;
    margin-left: 500px;

`
const LogoH1Future = styled.h1`
    font-family:'Playfair Display', serif;
    font-size: 80px;
`
const LogoH1X= styled.h1`
    font-family: 'Courgette', cursive;
    font-size: 100px;
    color: #f1e3cb;
    padding-left: 2px;
    padding-top: 10px;
        :hover 
            {
                transition: 2s;
                color: #581c0c;
            }
`
/*Div que abrange os elementos que compoem o logo da página*/
const UserIcon = styled.img`
  border-radius: 100%;
  width: 250px;
  height: 250px;
  margin-left:-635px;
  margin-top: 340px;
`
/*const DivFilter = styled.div`
  border-radius: 100%;
  width: 250px;
  height: 250px;
  margin-left:-635px;
  margin-top: 340px;
  /*background: linear-gradient(29deg, rgba(88,28,12,.9), rgba(221,158,95) 70.71%);
  `
  */
  

function Login () {
  return (
    <BackgroundDiv>
      <LogoDiv>
        <LogoH1Future>Future</LogoH1Future><LogoH1X>X</LogoH1X>
      </LogoDiv>
        <UserIcon src="https://www.hypeness.com.br/wp-content/uploads/2019/09/Vira-lata_Caramelo_1.jpg" alt="user icon"/>
      <DivDepoimento>
        <H1Depoimento>Vira-lata caramelo</H1Depoimento>
        <PDepoimento>
          A viagem pra Netuno foi uma das melhores da minha vida.
          Ter feito com ajuda da Future X tornou-a ainda melhor!
        </PDepoimento>
      </DivDepoimento>
        <InputDiv>
          <LoginInput label="email" margin="normal" variant="outlined"/>
          <LoginInput label="senha" margin="normal" variant="outlined"/>
        </InputDiv>
    </BackgroundDiv>
  );
}

export default Login;