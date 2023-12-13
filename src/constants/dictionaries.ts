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
  ENDPOINT_INPUT_LABEL = 'ENDPOINT_INPUT_LABEL',
  TOOLTIP_ENDPOINT_EDIT = 'TOOLTIP_ENDPOINT_EDIT',
  TOOLTIP_ENDPOINT_CLEAR = 'TOOLTIP_ENDPOINT_CLEAR',
  TOOLTIP_ENDPOINT_SUBMIT_OK = 'TOOLTIP_ENDPOINT_SUBMIT_OK',
  TOOLTIP_ENDPOINT_SUBMIT_INVALID = 'TOOLTIP_ENDPOINT_SUBMIT_INVALID',
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
  [Keys.ENDPOINT_INPUT_LABEL]: 'GraphQL API Endpoint',
  [Keys.TOOLTIP_ENDPOINT_EDIT]: 'Edit endpoint',
  [Keys.TOOLTIP_ENDPOINT_CLEAR]: 'Clear input',
  [Keys.TOOLTIP_ENDPOINT_SUBMIT_OK]: 'Submit new endpoint',
  [Keys.TOOLTIP_ENDPOINT_SUBMIT_INVALID]: 'You should provide full correct URL',
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
  [Keys.ENDPOINT_INPUT_LABEL]: 'Адрес GraphQL',
  [Keys.TOOLTIP_ENDPOINT_EDIT]: 'Изменить адрес',
  [Keys.TOOLTIP_ENDPOINT_CLEAR]: 'Очистить поле',
  [Keys.TOOLTIP_ENDPOINT_SUBMIT_OK]: 'Подтвердить изменение',
  [Keys.TOOLTIP_ENDPOINT_SUBMIT_INVALID]:
    'Необходимо ввести полный корректный адрес',
};

export const LANGUAGES: Dictionaries = { EN, RU };
