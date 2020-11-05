/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { getAllPokemons, getPokemon } from '../../../services/pokemon';
import SearchBar from '../../components/SearchBar';
import Footer from '../../components/Footer';

import Placeholder from '../../../assets/placeholder-image.png';

import styles from './styles.module.scss';

function Home() {
  const [pokemonList, setPokemon] = useState([]);
  const [pokemonToShow, setPokemonToShow] = useState([]);
  const [errorAllPokemon, setErrorAllPokemon] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(async () => {
    const response = await getAllPokemons();
    if (response.status) {
      setPokemon(response.data);
    } else {
      setErrorAllPokemon(true);
    }
  }, []);

  const handleSearchQuery = async (pokemonName) => {
    let pokemonsFiltered = [];
    let pokemonsToSearch = [];
    setIsLoading(true);
    setIsError(false);
    setPokemonToShow([]);
    if (pokemonName) {
      pokemonsFiltered = pokemonList.filter(({ name }) => name.match(new RegExp(`^${pokemonName}`)));
      if (pokemonsFiltered.length > 0) {
        pokemonsToSearch = (await Promise.all(pokemonsFiltered.map(({ name }) => getPokemon(name)))).reduce((acc, { status, data }) => {
          if (status) {
            const { name, sprites: { frontDefault } } = data;
            return [...acc, { name: name.split('-').join(' '), img: frontDefault || Placeholder }];
          }
          setIsError(true);
          return acc;
        }, []);
      } else {
        setIsLoading(false);
        setIsError(true);
      }
    }
    if (!isError) {
      setPokemonToShow(pokemonsToSearch);
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1 className={styles.title}>Pokemon Finder</h1>
        <p className={styles.subtitle}>El que quiere Pokemons, que los busque</p>
        <SearchBar setSearchQuery={handleSearchQuery} />
        <section className={styles.results}>
          <h2 className={styles.resultsTitle}>Resultados de la búsqueda</h2>
          {pokemonToShow.length > 0 && pokemonToShow.map((pokemon) => (
            <div className={styles.pokemon}>
              <h3 className={styles.pokemonName}>{pokemon.name}</h3>
              <img className={styles.pokemonImage} src={pokemon.img} alt={pokemon.name} />
            </div>
          ))}
          {errorAllPokemon && (
          <div className={styles.error}>
            <p className={styles.errorMsg}>Por favor recargar la página. Hubo un problema</p>
          </div>
          )}
          {isError && (
          <div className={styles.error}>
            <p className={styles.errorMsg}>No pudimos encontrar tu pokemon</p>
          </div>
          )}
          {isLoading && <div className={styles.spinner} />}
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
