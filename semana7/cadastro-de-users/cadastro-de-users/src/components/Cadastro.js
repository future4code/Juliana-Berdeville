import React from 'react';
import styled from 'styled-components'

const Bananinha = styled.div` /*sempre que for styled é letra maiuscula*/
border: 1px solid black;
width: 40vh;
height:35vh;
margin-top: 10vh;
margin-left: 62vh;
`
const Bananete = styled.div`
  margin-top: 2px;
  
`


function Cadastro() {
  return (
    <div className="Cadastro">
        <Bananinha>
          <Bananete>
            <label>Nome:</label><br></br>
            <input type="text" name="text" id="text"></input><br></br>
            <label>E-mail:</label><br></br>
            <input type="text" name="text" id="text"></input>
            </Bananete>
        </Bananinha>
      </div>
  );
}

export default Cadastro;
