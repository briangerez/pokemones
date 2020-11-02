import React, { useState } from 'react';
import usePokemons from '../../../hooks/usePokemons';
import Seeker from '../../components/Seeker';

import styles from './styles.module.scss';

function Home() {
  const [pokemonName, setName] = useState('');

  const { data: pokemon, isError, isLoading } = usePokemons({ pokemonName });
  return (
    <div className={styles.container}>
      <div>
        <h1>Pokemon Finder</h1>
        <h3>El que quiere Pokemons, que los busque</h3>
        <Seeker setSearchQuery={setName} />
        <section className={styles.results}>
          <h2 className={styles.resultsTitle}>Resultados de la búsqueda</h2>
          {pokemon && 'pokemon'}
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
