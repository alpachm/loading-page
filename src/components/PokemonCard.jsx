import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import './pokemonCard.css';
import { useNavigate } from 'react-router-dom';

const PokemonCard = ({ poke }) => {
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    axios
      .get(poke)
      .then((res) => setPokemon(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleClick = () => {
    navigate(`/pokemon/${pokemon?.id}`);
  };

  return (
    <div onClick={handleClick} className="card-pokemon">
      <img
        src={pokemon?.sprites.other['official-artwork'].front_default}
        alt=""
      />
      <h2>{pokemon?.name}</h2>
    </div>
  );
};

export default PokemonCard;
