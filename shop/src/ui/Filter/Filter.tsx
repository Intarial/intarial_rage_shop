import React, { FC } from 'react';
import styles from './Filter.module.scss';

export const Filter: FC<{ children: React.ReactElement | React.ReactElement[] | string, active?: boolean }> = ({ children, active }) => {
  return (
    <div className={ [styles.wrapper, active && styles.active].join(' ') }>
      <div className={ styles.content }>
        {
          children
        }
      </div>
      <div className={ styles.filter } />
    </div>
  );
};