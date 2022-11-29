import React, { useEffect, useState } from 'react';
import styles from './Project.module.scss';
import { Shop } from './components/Shop/Shop';
import { CharacterTypings } from './typings/Character.typings';
import { CharacterContext } from './contexts/CharacterContext';

export const Project = () => {
  // const [characterInfo, setCharacterInfo] = useState<CharacterTypings>({} as CharacterTypings);
  const [characterInfo, setCharacterInfo] = useState<CharacterTypings>({ bank: 2000, cash: 500000, lvl: 0, name: '' });

  const updateCharacterInfo = (info: CharacterTypings) => setCharacterInfo(info);

  useEffect(() => {
    //@ts-ignore
    if (global.mp) {
      const api = {
        'main:update:character:info:cef': (json: string) => updateCharacterInfo(JSON.parse(json)),
      };
      for (const fn in api) {
        //@ts-ignore
        global.mp.events.add(fn, api[fn]);
      }
    }
  });

  return (
    <div className={ styles.wrapper }>
      <CharacterContext.Provider value={{ value: characterInfo, update: updateCharacterInfo }}>
        <Shop />
      </CharacterContext.Provider>
    </div>
  );
};