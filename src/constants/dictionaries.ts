export enum Langs {
  EN = 'EN',
  RU = 'RU',
}

enum Keys {
  TITTLE_404 = 'TITTLE_404',
  TEXT_404 = 'TEXT_404',
  TITTLE_ERROR = 'TITTLE_ERROR',
  GO_TO = 'GO_TO',
  HOME_PAGE = 'HOME_PAGE',
  ERROR_MESSAGE = 'ERROR_MESSAGE',
  SEARCH = 'SEARCH',
}

export type Dictionary = Record<keyof typeof Keys, string>;
type Dictionaries = Record<keyof typeof Langs, Dictionary>;

const EN: Dictionary = {
  [Keys.TITTLE_404]: '404 - Not Found',
  [Keys.TEXT_404]: 'Page you are looking for not found',
  [Keys.TITTLE_ERROR]: 'Oops..',
  [Keys.GO_TO]: 'Go to',
  [Keys.HOME_PAGE]: 'Home Page',
  [Keys.ERROR_MESSAGE]: 'Something went wrong...',
  [Keys.SEARCH]: 'Search',
};

const RU: Dictionary = {
  [Keys.TITTLE_404]: '404 - Страница не найдена',
  [Keys.TEXT_404]: 'Запрашиваемая страница не найдена',
  [Keys.TITTLE_ERROR]: 'Ой...',
  [Keys.GO_TO]: 'Перейти на',
  [Keys.HOME_PAGE]: 'Домашнюю страницу',
  [Keys.ERROR_MESSAGE]: 'Что-то пошло не так...',
  [Keys.SEARCH]: 'Искать',
};

export const LANGUAGES: Dictionaries = { EN, RU };
