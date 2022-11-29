import { createContext } from 'react';
import { CharacterContextTypings } from '../typings/Character.typings';

export const CharacterContext = createContext<CharacterContextTypings>({} as CharacterContextTypings);