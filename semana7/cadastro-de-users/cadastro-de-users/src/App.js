import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Cadastro} from './components/Cadastro'
import {Lista} from './components/Lista'

export class App extends React.Component {
 /*Criando state pra segurar o valor de qual página tá sendo acessada */
  state= {
      page: 'Lista'
  }
/*Criando state pra segurar o valor de qual página tá sendo acessada */

/*Função que, de acordo com o resultado do ternário, altera o estado 'currentPage'*/
  onClickSwitchPages = () => {
        const pages = this.state.page === 'Cadastro' ? 'Lista ' : 'Cadastro'
        this.setState({page: pages})
  }
/*Função que, de acordo com o resultado do ternário, altera o estado 'currentPage'*/
  
render () {

  return (
    <div className="App">
      <h1>Bem-vinde</h1>
      <button onClick = {this.onClickSwitchPages}>
        {this.state.page === 'Cadastro' ? 'Lista' : 'Cadastro'}
      </button>
      {this.state.page === 'Cadastro' ? <Cadastro/> : <Lista/>}
      
    </div>
  );

}
}

