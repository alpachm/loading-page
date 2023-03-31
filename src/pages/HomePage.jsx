import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import PokemonCard from '../components/PokemonCard';
import './homePage.css';
import LoadingPage from '../components/LoadingPage';

const HomePage = () => {
  const [pokemons, setPokemons] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`;

    axios
      .get(url)
      .then((res) => setPokemons(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  return (
    <div>
      <h1>Loading Page</h1>
      <div className="pokemons-box">
        {pokemons?.map((poke) => (
          <PokemonCard key={poke.url} poke={poke.url} />
        ))}
      </div>
      <LoadingPage loading={isLoading} />
    </div>
  );
};

export default HomePage;
