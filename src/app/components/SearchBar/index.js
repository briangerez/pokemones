import React from 'react';

import styles from './styles.module.scss';

function SearchBar() {
  return (
    <div className={styles.searchBar}>
      <input className={styles.input} type="text" name="searchBar" placeholder="Ingrese el nombre a buscar" />
      <button type="submit">Buscar</button>
    </div>
  );
}

export default SearchBar;
