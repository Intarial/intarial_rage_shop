import React, { FC } from 'react';
import styles from './List.module.scss';
import { ListTypings } from '../../typings/List.typings';
import { Filter } from '../Filter/Filter';
import { IconArrow } from '../../components/Icons/Icons';

export const ListBlock: FC<{ info: ListTypings, active: boolean, update: () => void }> = ({ info, active, update }) => {
  return (
    <li onClick={ () => update() } className={ styles.listBlock }>
      <Filter active={ active }>
        <p>{ info.name }</p>
        <IconArrow />
      </Filter>
    </li>
  );
};

export const List: FC<{ list: ListTypings[], section: string, update: (section: string) => void }> = ({ list, section, update }) => {
  return (
    <div className={ styles.wrapper }>
      <ul className={ styles.list }>
        {
          list.length > 0 && list.map(
            (value, index) => <ListBlock active={ section === value.trigger } update={ () => update(value.trigger) } key={ index } info={ value } />
          )
        }
      </ul>
    </div>
  );
};