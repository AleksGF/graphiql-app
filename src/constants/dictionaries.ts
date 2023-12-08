export enum Langs {
  EN = 'EN',
  RU = 'RU',
}

enum Keys {
  WELCOME = 'WELCOME',
  SEARCH = 'SEARCH',
}

export type Dictionary = Record<keyof typeof Keys, string>;
type Dictionaries = Record<keyof typeof Langs, Dictionary>;

const EN: Dictionary = {
  [Keys.WELCOME]: 'Welcome!',
  [Keys.SEARCH]: 'Search',
};

const RU: Dictionary = {
  [Keys.WELCOME]: 'Добро пожаловать!',
  [Keys.SEARCH]: 'Искать',
};

export const LANGUAGES: Dictionaries = { EN, RU };
