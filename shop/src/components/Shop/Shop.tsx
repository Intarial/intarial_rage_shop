import React, { useEffect, useState } from 'react';
import styles from './Shop.module.scss';
import { Header } from './components/Header/Header';
import { List } from '../../ui/List/List';
import config from './Shop.config.json';
import { ItemTypings } from '../../typings/Shop.typings';
import { IconMoney } from '../Icons/Icons';
import { CharacterContext } from '../../contexts/CharacterContext';

export const Shop = () => {
  const [section, setSection] = useState('eats');
  const [items, setItems] = useState<ItemTypings[]>([]);

  const updateSection = (section: string) => {
    //@ts-ignore
    global.mp.trigger('shop:get:items:section', section);
    setItems([]);
  };

  const updateItems = (items: ItemTypings[], trigger?: string) => {
    setItems(items);
    setSection(trigger ? trigger : config.navigation[0].trigger);
  };

  useEffect(() => {
    //@ts-ignore
    if (global.mp) {
      const api = {
        'shop:update:items:section:cef': (json: string, trigger: string) => updateItems(JSON.parse(json), trigger), // Принимаем обратно триггер и айтемы данной секции
      };
      for (const fn in api) {
        //@ts-ignore
        global.mp.events.add(fn, api[fn]);
      }
    }
  });

  useEffect(() => {
    //@ts-ignore
    if (!items.length && global.mp) {
      //@ts-ignore
      global.mp.trigger('shop:get:items:section', config.navigation[0].trigger);
      setItems([]);
    }
  });

  return (
    <div className={ styles.wrapper }>
      <Header />
      <main>
        <List section={ section } update={ (value: string) => updateSection(value) } list={ config.navigation } />
      </main>
      <footer>
        <h3 className={ styles.title }>Ваш баланс:</h3>
        <CharacterContext.Consumer>
          {
            character => {
              return character.value.cash && character.value.bank && (
                <div className={ styles.money }>
                  <div className={ styles.moneyBlock }>
                    <p className={ styles.name }>Денег на руках</p>
                    <p className={ styles.value }>
                      <IconMoney />
                      {character.value.cash.toLocaleString('ru')}
                    </p>
                  </div>
                  <div className={ styles.moneyBlock }>
                    <p className={ styles.name }>Денег в банке</p>
                    <p className={ styles.value }>
                      <IconMoney />
                      {character.value.bank.toLocaleString('ru')}
                    </p>
                  </div>
                </div>
              );
            }
          }
        </CharacterContext.Consumer>
      </footer>
    </div>
  );
};