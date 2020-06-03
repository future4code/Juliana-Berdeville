import React from 'react';
import styled from 'styled-components'

export class Lista extends React.Component {

  /*Criação de um estado que guarde os usuários cadastrados num array*/
  state = {  
      UsersList: [ ]
  }; 
/*Criação de um estado que guarde os usuários cadastrados num array*/

/*Criação da função que deleta usuários da lista. API AKI!*/
onClickTossEmOut = () => {
  alert('Daqui a pouco eu excluo')
}
/*Criação da função que deleta usuários da lista. API AKI!*/

  render () {
  /*A var LesUsuarios recebe a função map, que percorre todo o array (state) e devolve
    um novo array de acordo com o que está exposto abaixo: uma div que contém um <p> com nome
    do usuário e botão pra apagar esse usuário.*/
    const LesUsuarios = this.state.UsersList.map((users) => {
      return (<div> 
                <p>{users.name}</p><br></br>
                {/*Nesse botão, chamamos a função onClick - 'Toss'em out' - que pega o id desse user pra deleção*/}
                <button onClick = {() => this.onClickTossEmOut(users.id)}>Toss'em out</button>
              </div>);
                                                              })
  return (
    <div className="App">
        <div>
          {/*Exibe os usuarios que estão na lista*/}
            {LesUsuarios}
          {/*Exibe os usuarios que estão na lista*/}
        </div>
    </div>
  );
}
}

