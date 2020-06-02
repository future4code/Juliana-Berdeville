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
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-content:center;
  width: 80vh;
  height: auto;
  margin-top: 20%;
  
`

const Fotinho = styled.img`
  width: 20vh;
  height: 30vh;
  margin-top: -15vh;
  margin-left: -1vh;
`

const Titles = styled.h1 `
margin-top: 5vh;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
font-size: 20px;
`
const Aqueleh1 = styled.h1 `
margin-top: 18vh;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
font-size: 20px;
`


/*estado -> lista vazia pra segurar os pokemons que serão buscados pela GET*/
 class App extends React.Component {
 
  state = {
        pokemon: [ ],
        fotinho: "",
        altura: "",
        peso: ""
  }
/*estado -> lista vazia pra segurar os pokemons que serão buscados pela GET*/

/*componentDidMount -> lista vazia pra segurar os pokemons que serão buscados pela GET - o que importa é o NOME do pokemon*/
  componentDidMount = () => {
      axios
        .get('https://pokeapi.co/api/v2/pokemon/?limit=151')
        .then(response => {
                this.setState({pokemon: response.data.results})
        })
        .catch(err => {console.log(err)})
  }
/*componentDidMount -> lista vazia pra segurar os pokemons que serão buscados pela GET - o que importa é o NOME do pokemon*/

/*getNaFotinho -> método que faz uma request (GET) pra puxar só a foto (front_default) do pokemon selecionado*/
getNasInfos = event => {
    const pokemonSelecionado = event.target.value
      axios 
        .get(`https://pokeapi.co/api/v2/pokemon/${pokemonSelecionado}`)
        .then(response => {
            this.setState({fotinho: response.data.sprites.front_default})
            this.setState({nome: response.data.name}) 
            this.setState({altura: response.data.height})
            this.setState({peso: response.data.weight})
          
          })
          .catch(err => {
            console.log(err)
        })
}
/*getNaFotinho -> método que faz uma request (GET) pra puxar só a foto (front_default) do pokemon selecionado*/


render() {
  const fotinhoDoPokemon = this.state.fotinho ? (<Fotinho src={this.state.fotinho} alt=" "/>) : (<div>{" "}</div>)
    return (
      <Divzinha>
        <Aqueleh1>Olá e seja bem-vinde à sua Pokedéx: </Aqueleh1>
        <Titles>Vamos começar? Selecione seu Pokemón:</Titles>
        <select id="pokemons" onChange={this.getNasInfos}>
          <optgroup>
          <option value={" "}>Choose your Pokemon</option> 
              {this.state.pokemon.map (pokemon => {
                return <option key={pokemon.name} value={pokemon.name}>{pokemon.name} </option>
            })}
          </optgroup>
        </select>
            <Divzete>
                <span>{fotinhoDoPokemon}</span>
                <p><strong>Nome:</strong> {this.state.nome}</p>
                <p><strong>Altura:</strong> {this.state.altura} metros</p>
                <p><strong>Peso:</strong> {this.state.peso} kgs</p>
            </Divzete>
      </Divzinha>
    );
  }
}

export default App;