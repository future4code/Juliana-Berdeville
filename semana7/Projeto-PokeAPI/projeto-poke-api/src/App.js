import React from "react";
import axios from "axios";
import styled from 'styled-components'

const Divzinha = styled.div`
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-content:center;
  height: 50vh;
  width: 80vh;
  margin-top: 2%;
  margin-left: 30%;
`

const Divzete = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-content:center;
  width: 80vh;
  margin-top: 20%;
  
`
/*estado -> lista vazia pra segurar os pokemons que serão buscados pela GET*/
 class App extends React.Component {
 
  state = {
        pokemon: [ ],
        fotinho: " "
  }
/*estado -> lista vazia pra segurar os pokemons que serão buscados pela GET*/

/*componentDidMount -> lista vazia pra segurar os pokemons que serão buscados pela GET*/
  componentDidMount = () => {
      axios
        .get('https://pokeapi.co/api/v2/pokemon/?limit=151')
        .then(response => {
                console.log("Puxando tudo sobre todos os pokemons do BD")
                this.setState({pokemon: response.data.results});
        })
        .catch(err => {console.log(err)})
  }
/*componentDidMount -> lista vazia pra segurar os pokemons que serão buscados pela GET*/

/*getNaFotinho -> método que faz uma request (GET) pra puxar só a foto (front_default) do pokemon selecionado*/
getNaFotinho = event => {
    const pokemonSelecionado = event.target.value
      axios 
        .get(`https://pokeapi.co/api/v2/pokemon/${pokemonSelecionado}`)
        .then(response => {
            console.log("Pegando a foto do pokemon")
            this.setState({fotinho: response.data.sprite.front_default})
        .catch(error => {
            console.log("Ih, deu erro! Veja: " , error)
        })
        })
}
/*getNaFotinho -> método que faz uma request (GET) pra puxar só a foto (front_default) do pokemon selecionado*/

render() {
  const fotinhoDoPokemon = this.state.fotinho ? (<fotinhoDoPokemon src={this.state.fotinho} alt="É um pokemon"/>) : (<div>{" "}</div>)
    return (
      <Divzinha>
        <h1>Olá e seja bem-vinde à sua Pokedéx: </h1>
        <h1>Vamos começar? Selecione seu Pokemón:</h1>
        <select id="pokemons">
          <optgroup>
          <option value={" "}>Choose your Pokemon</option> 
              {this.state.pokemon.map (pokemon => {
                return <option key={pokemon.name} value={pokemon.name}>{pokemon.name} </option>
            })}
          </optgroup>
        </select>
            <Divzete>
              <strong>Fotinho:</strong><br></br>{fotinhoDoPokemon}
            </Divzete>
      </Divzinha>
    );
  }
}

export default App;