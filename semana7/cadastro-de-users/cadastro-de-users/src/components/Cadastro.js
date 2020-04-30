import React from 'react';
import styled from 'styled-components'
import axios from 'axios'

const Bananinha = styled.div` /*sempre que for styled é letra maiuscula*/
border: 1px dotted black;
width: 40vh;
height:35vh;
margin-top: 10vh;
margin-left: 74vh;
`
const Bananete = styled.div`
  margin-top: 8vh;
  
`

export class Cadastro extends React.Component {

  /*Criação do estado que segura os valores inseridos nos inputs*/
  state = {
      nameContent: " ",
      emailContent: " "
  }
 /*Criação do estado que segura os valores inseridos nos inputs*/

  /*Alteração do estado pro nome*/
  onChangeName = (event) => {
      this.setState({nameContent: event.target.value})
  }
  /*Alteração do estado pro nome*/

  /*Alteração do estado pro email*/
  onChangeEmail = (event) => {
    this.setState({emailContent: event.target.value})
}

  /*Criação da lógica do botão de cadastro de usuários*/
  onClickSend = ( ) => {
    const bananico = {  
        usuario: this.state.nameContent,
        email: this.state.emailContent
    }
  }
  /*Criação da lógica do botão de cadastro de usuários*/

  /*Alteração do estado pro email*/
  render () {
  return (
    <div className="Cadastro">
        <Bananinha>
          <Bananete>
            <label>Nome:</label><br></br>
            <input type="text" name="text" id="text"></input><br></br>
            <br></br><label>E-mail:</label><br></br>
            <input type="text" name="text" id="text"></input><br></br>
            <br></br><button onClick={this.onClickSend}>SEND</button>
            </Bananete>
        </Bananinha>
      </div>
  );
}
}

