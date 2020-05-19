import React from 'react'
import styled from 'styled-components'

const BackgroundDiv = styled.div`
    background-color: #ca5116;
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
    border: 1px solid red;
    width: 30%;
`
const LogoH1Future = styled.h1`
    font-family:'Playfair Display', serif;
    font-size: 90px;
`
const LogoH1X= styled.h1`
    font-family: 'Courgette', cursive;
    font-size: 110px;
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

function Home () 
{
  return (
    <BackgroundDiv>
      <LogoDiv><LogoH1Future>Future</LogoH1Future><LogoH1X>X</LogoH1X></LogoDiv>
      <RounderDivI></RounderDivI>
    </BackgroundDiv>
  );
}

export default Home;