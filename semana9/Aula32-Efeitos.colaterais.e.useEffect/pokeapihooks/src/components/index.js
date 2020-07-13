import React from "react";
import axios from "axios";
import React, {usestate, useEffect} from 'react'

function PokeCard(props) {

    const [pokemon, setPokemon] = usestate([ ])

    componentDidMount() {
        pegaPokemon(props.pokemon);
    }


  componentDidUpdate(prevProps) {
    if (prevProps.pokemon !== props.pokemon) 
            {
                  pegaPokemon(props.pokemon)
            }
    }

  const pegaPokemon = useEffect(() => {
    axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`).then(response => {setPokemon(response.data)})
        .catch(err => {console.log(err)})
    }, [ ])

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