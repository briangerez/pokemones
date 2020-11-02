import React, { useState } from 'react';

import styles from './styles.module.scss';

// eslint-disable-next-line react/prop-types
function SearchBar({ setSearchQuery }) {
  const [inputValue, setInputValue] = useState('');

  const handleOnChange = ({ currentTarget: { value } }) => setInputValue(value);

  const handleClick = () => setSearchQuery(inputValue);

  return (
    <div className={styles.searchBar}>
      <input className={styles.searchInput} type="text" name="searchBar" placeholder="Ingrese el nombre a buscar" onChange={handleOnChange} />
      <button className={styles.searchButton} type="button" onClick={handleClick}>Buscar</button>
    </div>
  );
}

export default SearchBar;
