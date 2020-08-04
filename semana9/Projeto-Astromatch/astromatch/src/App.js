import React from 'react'
import {useState, useEffect} from 'react'
import styled from 'styled-components'
import Profiles from './components/Profiles'
import Matches from './components/Matches'
import Button from '@material-ui/core/Button'
import axios from 'axios'

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
        :hover{
                  background: -webkit-linear-gradient(#c70039, #f67280);
                  -webkit-background-clip: text;
                  -webkit-text-fill-color: transparent;
              }
`
/*Ainda em desenvolvimento
onClickCheckMatches = () => {
}
*/
// onClickClearMatches = () => {
//   alert("0 matches! :(")
// }

function App() {

   const [pplProfiles, setpplProfiles] = useState({ })
   const [selectedPage, setSelectedPage] = useState('Profiles')

    useEffect(() => {
      axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/aluno/person`)
      .then(response => { 
            setpplProfiles(response.data.profile)
          })
    }, [setpplProfiles])

   const renderSelectedPage = () => {
        switch (selectedPage) {
              case 'Profiles': 
                return <Profiles profile={pplProfiles} onClickEw={onClickEw()}/>
              case 'Matches':
                  return <Matches/>
        }
    }

  const onClickCheckMatches = () => {
      setSelectedPage('Matches')
  }

  const onClickCheckProfiles = () => {
     setSelectedPage('Profiles')
   }

  const onClickEw = () => {
      const body = {
                      choice: false, 
                      id: pplProfiles.id,
                  }
        axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/aluno/choose-person', body).then((response) =>
            console.log(response)
          )
    }

const onClickWow = () => {

}
  
  return (

            <Background>
              <ContainerGeral>
                <Logo><LeLogo onClick={() => onClickCheckProfiles()}>AstroMatch</LeLogo></Logo>
                <ContentHolder> {renderSelectedPage()}</ContentHolder>
              </ContainerGeral>
              <CheckMatches onClick={() => onClickCheckMatches()}>check matches</CheckMatches>
              <ClearMatches>clear matches</ClearMatches>
            </Background>
          )
}

export default App;
