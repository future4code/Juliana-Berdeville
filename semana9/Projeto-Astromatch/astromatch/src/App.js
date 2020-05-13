import React from 'react'
import styled from 'styled-components'
import {Profiles} from './components/Profiles'

const Background = styled.div`
  background-color: #242223;
  height: 100vh;
 
`

const LeButton = styled.button`
  display: block;
  bottom:0;
  margin-left: 5vh;
`

const AppContentHolder = styled.div`
   display: flex;
   align-self: center;
   justify-content: center;
   `

const Logo = styled.div`
  background-color: #454143;
  height: 90vh;
  width: 35vh;
  margin-top: 5vh;
  display: flex;
  justify-content: center;
  align-self: center;
  flex-direction: row;
`

const ContentHolder = styled.div`
  background-color: #454143;
  height: 90vh;
  width: 35vh;
  margin-top: 5vh;
`
const LeLogo = styled.h3
` 
  color: white;
  text-align: center;
`

function App() {
  return (
    <Background>
      <AppContentHolder>
        <Logo><LeLogo>AstroMatch</LeLogo></Logo>
        <ContentHolder> {/*<Profiles/>*/} </ContentHolder>
      </AppContentHolder>
      <LeButton>clear matches</LeButton>
    </Background>
  );
}

export default App;
