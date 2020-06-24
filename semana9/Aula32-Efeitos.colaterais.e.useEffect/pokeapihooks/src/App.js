import React from 'react'
import logo from './logo.svg'
import './App.css'
import PokeCard from "./components/PokeCard"
import axios from "axios"
import React, {usestate, useEffect} from 'react'

function App() {

  const [pokeList, setPokeList] = usestate([ ])
  const [pokeName, setPokeName] = usestate(' ')
 
  
  componentDidMount = () => {
    // função axios que está batendo na API e buscando 151 pokemons
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then(response => {
        // função que está setando no estado os 151 pokemons
        this.setState({ pokeList: response.data.results });
      })
      .catch(err => {
        console.log(err);
      });
  };

  changePokeName = event => {
    this.setState({ pokeName: event.target.value });
  };

  return (
    <div className="App">
      {/* evento onChange chama função toda vez que o usuário 
        escolhe um novo pokemon no dropdown */}
      <select onChange={this.changePokeName}>
        <option value={""}>Nenhum</option>
        {/* renderizando a lista de pokemons como opções do select */}
        {this.state.pokeList.map(pokemon => {
          return (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          );
        })}
      </select>
      {/* expressão booleana que renderiza o componente PokeCard,
        caso o valor de pokeName, no estado, seja true */}
      {this.state.pokeName && <PokeCard pokemon={this.state.pokeName} />}
    </div>
  );
}

export default App;
