import React from 'react'
import styled from 'styled-components'
import Profiles from './components/Profiles'
import Button from '@material-ui/core/Button'

const Background = styled.div`
  background-color: white;
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`

const CheckMatches = styled(Button)`
  display: block;
  bottom:0;
  margin-left: 5vh;
  background-image: linear-gradient(125deg, #c06c84 0%, #f67280 73%);
  box-shadow: 0px 4px 32px rgba(252, 56, 56, 0.4);
  border-radius: 100;
    :hover
        {   
          background-image: linear-gradient(125deg, #c70039 0%, #ff5733 73%);
          color: white;
          transition: 1s;
        }
`
const ClearMatches = styled(Button)`
  display: block;
  bottom:0;
  margin-left: 5vh;
  background-image: linear-gradient(125deg, #c06c84 0%, #f67280 73%);
  box-shadow: 0px 4px 32px rgba(252, 56, 56, 0.4);
  border-radius: 100;
    :hover
        {
          background-image: linear-gradient(125deg, #c70039 0%, #900c3f 73%);
          color: white;
          transition: 1s;
        }
`
const ContainerGeral = styled.div`
  height: 85vh;
  width: 700px;
`
const Logo = styled.div`
  margin-top: 5vh;
  display: flex;
  justify-content: center;
  align-self: center;
  flex-direction: row;
`

const ContentHolder = styled.div`

  margin-top: 5vh;
  display: flex;
`
const LeLogo = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Permanent Marker', cursive;
  font-size: 100px;
`

/*Ainda em desenvolvimento
onClickCheckMatches = () => {
}

onClickClearMatches = () => {
}
*/

function App() {
  return (
    <Background>
      <ContainerGeral>
        <Logo><LeLogo>AstroMatch</LeLogo></Logo>
        <ContentHolder> <Profiles/> </ContentHolder>
      </ContainerGeral>
      <CheckMatches>check matches</CheckMatches>
      <ClearMatches>clear matches</ClearMatches>
    </Background>
  );
}

export default App;
