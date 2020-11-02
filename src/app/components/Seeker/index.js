import React, { useState } from 'react';

import styles from './styles.module.scss';

// eslint-disable-next-line react/prop-types
function Seeker({ setSearchQuery }) {
  const [inputValue, setInputValue] = useState('');

  const handleOnChange = ({ currentTarget: { value } }) => setInputValue(value);

  const handleClick = () => setSearchQuery(inputValue);

  return (
    <div className={styles.searchBar}>
      <input className={styles.input} type="text" name="searchBar" placeholder="Ingrese el nombre a buscar" onChange={handleOnChange} />
      <button type="button" onClick={handleClick}>Buscar</button>
    </div>
  );
}

export default Seeker;
