import React, { useState } from 'react';
import usePokemons from '../../../hooks/usePokemons';
import SearchBar from '../../components/SearchBar';

import Placeholder from '../../../assets/placeholder-image.png';

import styles from './styles.module.scss';

function Home() {
  const [pokemonName, setName] = useState('');

  const { data: pokemon, isError, isLoading } = usePokemons({ pokemonName });
  const pokemonImage = pokemon?.sprites?.other?.officialArtwork?.frontDefault || Placeholder;

  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.title}>Pokemon Finder</h1>
        <p className={styles.subtitle}>El que quiere Pokemons, que los busque</p>
        <SearchBar setSearchQuery={setName} />
        <section className={styles.results}>
          <h2 className={styles.resultsTitle}>Resultados de la búsqueda</h2>
          {pokemon && (
          <div className={styles.pokemon}>
            <h3 className={styles.pokemonName}>{pokemon.name}</h3>
            <img className={styles.pokemonImage} src={pokemonImage} alt={pokemon.name} />
          </div>
          )}
          {isError && (
            <div className={styles.error}>
              <span className={styles.errorIcon}>:(</span>
              <p className={styles.errorMsg}>No pudimos encontrar tu pokemon</p>
            </div>
          )}
          {isLoading && <div className={styles.spinner} />}
        </section>
      </div>
    </div>
  );
}

export default Home;
