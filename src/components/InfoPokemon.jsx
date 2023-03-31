import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const InfoPokemon = () => {
  const { id } = useParams();

  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    axios
      .get(url)
      .then((res) => setPokemon(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="info-pokemon">
      <img
        src={pokemon?.sprites.other['official-artwork'].front_default}
        alt=""
      />
      <h2>{pokemon?.name}</h2>
    </div>
  );
};

export default InfoPokemon;
