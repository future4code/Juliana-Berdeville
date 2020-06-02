import React from "react";
import axios from "axios";

function PokeCard(props) {
  state = {
    pokemon: {}
  };

  // componentDidMount() {
  //   this.pegaPokemon(this.props.pokemon);
  // }


  // componentDidUpdate(prevProps) {
  //   if (prevProps.pokemon !== this.props.pokemon) {
  //     this.pegaPokemon(this.props.pokemon);
  //   }
  // }

  pegaPokemon = pokeName => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then(response => {
        // guarda as infos do pokemon no estado
        this.setState({ pokemon: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  const pokemon = this.state.pokemon;

  return (
    <div>
      <p>Nome: {pokemon.name}</p>
      <p>Peso: {pokemon.weight} Kg</p>
      {pokemon.types && <p>Habilidade: {pokemon.types[0].type.name}</p>}
      {pokemon.sprites && (
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      )}
    </div>
  );
}

export default PokeCard;