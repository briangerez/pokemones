import React from 'react';

import SearchBar from '../../components/SearchBar';

import PlaceholderImg from '../../../assets/placeholder-image.png';

import styles from './styles.module.scss';

function Home() {
  return (
    <div className={styles.container}>
      <h1>Pokemon Finder</h1>
      <h3>El que quiere Pokemons, que los busque</h3>
      <SearchBar />
      <h2>Resultados de la busqueda</h2>
      <img src={PlaceholderImg} alt="" />
      <p>name</p>
    </div>

  );
}

export default Home;
