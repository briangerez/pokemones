import React from 'react';

import styles from './styles.module.scss';

function Footer({ className = '' }) {
  return (
    <footer className={`${styles.footer} ${className}`}>
      <p>Hecho por Brian Gerez</p>
      <a className={styles.link} href="https://github.com/briangerez/pokemones">
        Link a mi repo
      </a>
    </footer>
  );
}

export default Footer;
