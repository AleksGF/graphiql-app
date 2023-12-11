export enum Langs {
  EN = 'EN',
  RU = 'RU',
}

enum Keys {
  TITLE_404 = 'TITLE_404',
  TEXT_404 = 'TEXT_404',
  TITLE_ERROR = 'TITLE_ERROR',
  GO_TO = 'GO_TO',
  HOME_PAGE = 'HOME_PAGE',
  ERROR_MESSAGE = 'ERROR_MESSAGE',
  TOOLTIP_SHOW_DOC = 'TOOLTIP_SHOW_DOC',
  TOOLTIP_HIDE_DOC = 'TOOLTIP_HIDE_DOC',
  TOOLTIP_EXECUTE = 'TOOLTIP_EXECUTE',
  TOOLTIP_PRETTIFY = 'TOOLTIP_PRETTIFY',
  QUERY_VARIABLES_TITLE = 'QUERY_VARIABLES_TITLE',
  QUERY_HEADERS_TITLE = 'QUERY_HEADERS_TITLE',
  SEARCH = 'SEARCH',
}

export type Dictionary = Record<keyof typeof Keys, string>;
type Dictionaries = Record<keyof typeof Langs, Dictionary>;

const EN: Dictionary = {
  [Keys.TITLE_404]: '404 - Not Found',
  [Keys.TEXT_404]: 'Page you are looking for not found',
  [Keys.TITLE_ERROR]: 'Oops..',
  [Keys.GO_TO]: 'Go to',
  [Keys.HOME_PAGE]: 'Home Page',
  [Keys.ERROR_MESSAGE]: 'Something went wrong...',
  [Keys.TOOLTIP_SHOW_DOC]: 'Show documentation',
  [Keys.TOOLTIP_HIDE_DOC]: 'Hide documentation',
  [Keys.TOOLTIP_EXECUTE]: 'Execute query',
  [Keys.TOOLTIP_PRETTIFY]: 'Prettify query',
  [Keys.QUERY_VARIABLES_TITLE]: 'Variables',
  [Keys.QUERY_HEADERS_TITLE]: 'Headers',
  [Keys.SEARCH]: 'Search',
};

const RU: Dictionary = {
  [Keys.TITLE_404]: '404 - Страница не найдена',
  [Keys.TEXT_404]: 'Запрашиваемая страница не найдена',
  [Keys.TITLE_ERROR]: 'Ой...',
  [Keys.GO_TO]: 'Перейти на',
  [Keys.HOME_PAGE]: 'Домашнюю страницу',
  [Keys.ERROR_MESSAGE]: 'Что-то пошло не так...',
  [Keys.TOOLTIP_SHOW_DOC]: 'Показать документацию',
  [Keys.TOOLTIP_HIDE_DOC]: 'Скрыть документацию',
  [Keys.TOOLTIP_EXECUTE]: 'Выполнить запрос',
  [Keys.TOOLTIP_PRETTIFY]: 'Отформатировать запрос',
  [Keys.QUERY_VARIABLES_TITLE]: 'Переменные',
  [Keys.QUERY_HEADERS_TITLE]: 'Заголовки',
  [Keys.SEARCH]: 'Искать',
};

export const LANGUAGES: Dictionaries = { EN, RU };
