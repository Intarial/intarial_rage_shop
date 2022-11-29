import React from 'react';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={ styles.wrapper }>
      <p>Лучший в штате</p>
      <h1>
        Магазин <br />
        <p>
          24/7
        </p>
      </h1>
      <p>Круглосуточный магазин</p>
    </header>
  );
};