import React from 'react'
import styled, {keyframes} from 'styled-components'
import LoginPage from './LoginPage'
import IconButton from '@material-ui/core/IconButton'
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff'
import {useHistory} from 'react-router'


const BackgroundDiv = styled.div`
    background-image: url("/background-futurex.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height:100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`
/*Div que abrange os elementos que compoem o logo da página*/
const LogoDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 60px;
    width: 30%;
`
const LogoH1Future = styled.h1`
    font-family:'Playfair Display', serif;
    font-size: 150px;
`
const LogoH1X= styled.h1`
    font-family: 'Courgette', cursive;
    font-size: 180px;
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

const RounderDivI = styled.div`
    height: px;
    width: 25px;
    background-color: #f9b384;
    border-radius: 50%;
    display: inline-block;
  `
const IntroParagraph = styled.p`
    color: #F1E3CB;
    font-family: 'Hind', sans-serif;
    font-size: 1.3rem;
    font-weight: bold;
`
const ParagraphDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
 const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
 `
function HomePage () {

  const history = useHistory()

  const goToLoginPage = () => {
    history.push("/Login");
   }
 
  const goToTravelerPage = () => {
   history.push("/Viagens");
  }

  return (
    <BackgroundDiv>
      <LogoDiv>
        <LogoH1Future>Future</LogoH1Future><LogoH1X>X</LogoH1X>
      </LogoDiv>

      <ParagraphDiv>
          <IntroParagraph>
              Descobrindo mundos, criando (ou apagando) memórias e vivendo momentos inesquecíveis.
          </IntroParagraph>
      </ParagraphDiv> 

      <ButtonsDiv>
          <IconButton title="Sou viajante" onClick={goToTravelerPage}> <FlightTakeoffIcon/> </IconButton> 
          <IconButton title="Sou administrador" onClick={goToLoginPage}> <FingerprintIcon/> </IconButton>
      </ButtonsDiv>
    </BackgroundDiv>
  );
}

export default HomePage;