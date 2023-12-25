export enum Langs {
  EN = 'EN',
  RU = 'RU',
}

export enum Keys {
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
  ENDPOINT_ADD_ERROR_DEFAULT = 'ENDPOINT_ADD_ERROR_DEFAULT',
  REQUEST_ERROR_UNKNOWN = 'REQUEST_ERROR_UNKNOWN',
  REQUEST_ERROR_BASE = 'REQUEST_ERROR_BASE',
  REQUEST_ERROR_100 = 'REQUEST_ERROR_100',
  REQUEST_ERROR_300 = 'REQUEST_ERROR_300',
  REQUEST_ERROR_400 = 'REQUEST_ERROR_400',
  REQUEST_ERROR_401 = 'REQUEST_ERROR_401',
  REQUEST_ERROR_500 = 'REQUEST_ERROR_500',
  TITLE_WELCOME = 'TITLE_WELCOME',
  TITLE_WELCOME_2 = 'TITLE_WELCOME_2',
  TEXT_WELCOME = 'TEXT_WELCOME',
  TEXT_OUR_TEAM = 'TEXT_OUR_TEAM',
  MEMBER_1_NAME = 'MEMBER_1_NAME',
  MEMBER_1_OCCUPATION = 'MEMBER_1_OCCUPATION',
  MEMBER_1_DESC = 'MEMBER_1_DESC',
  MEMBER_2_NAME = 'MEMBER_2_NAME',
  MEMBER_2_OCCUPATION = 'MEMBER_2_OCCUPATION',
  MEMBER_2_DESC = 'MEMBER_2_DESC',
  MEMBER_3_NAME = 'MEMBER_3_NAME',
  MEMBER_3_OCCUPATION = 'MEMBER_3_OCCUPATION',
  MEMBER_3_DESC = 'MEMBER_3_DESC',
  BUTTON_SIGNIN = 'BUTTON_SIGNIN',
  BUTTON_SIGNUP = 'BUTTON_SIGNUP',
  BUTTON_SIGNOUT = 'BUTTON_SIGNOUT',
  BUTTON_MAIN = 'BUTTON_MAIN',
  QUERY_EDITOR_PLACEHOLDER = 'QUERY_EDITOR_PLACEHOLDER',
  RESPONSE_VIEWER_PLACEHOLDER = 'RESPONSE_VIEWER_PLACEHOLDER',
  HEADERS_ENTER_NOT_VALID = 'HEADERS_ENTER_NOT_VALID',
  HEADERS_SERVER_NOT_ACCEPT_ANY = 'HEADERS_SERVER_NOT_ACCEPT_ANY',
  HEADERS_SERVER_ACCEPT_ONLY = 'HEADERS_SERVER_ACCEPT_ONLY',
}

export type Dictionary = Record<keyof typeof Keys, string>;
type Dictionaries = Record<keyof typeof Langs, Dictionary>;

// TODO Add team members info with correct translation
// TODO Rephrase welcome title and text
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
  [Keys.ENDPOINT_ADD_ERROR_DEFAULT]: 'Error while adding new endpoint',
  [Keys.REQUEST_ERROR_UNKNOWN]: 'Something went wrong',
  [Keys.REQUEST_ERROR_BASE]: 'Api request error',
  [Keys.REQUEST_ERROR_100]: 'Api request error',
  [Keys.REQUEST_ERROR_300]: 'Server redirect request',
  [Keys.REQUEST_ERROR_400]: 'Request error',
  [Keys.REQUEST_ERROR_401]: 'Authenticate header must be added',
  [Keys.REQUEST_ERROR_500]: 'Server error',
  [Keys.TITLE_WELCOME]: 'Welcome',
  [Keys.TITLE_WELCOME_2]: "It's our clone of ",
  [Keys.TEXT_WELCOME]:
    'This project is a final task of React Course by The Rolling Scopes School. It is an interactive in-browser GraphQL playground.',
  [Keys.TEXT_OUR_TEAM]: 'Our Team',
  [Keys.MEMBER_1_NAME]: 'Danil Bogdanov',
  [Keys.MEMBER_1_OCCUPATION]: 'Lorem ipsum dolor sit',
  [Keys.MEMBER_1_DESC]:
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum vitae asperiores magni ex fugiat quibusdam dolore soluta quidem voluptates neque, odio earum facere rem sed omnis enim quas beatae consequatur.',
  [Keys.MEMBER_2_NAME]: 'Oleksiy Chuguyenko',
  [Keys.MEMBER_2_OCCUPATION]: 'Lorem ipsum dolor sit',
  [Keys.MEMBER_2_DESC]:
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum vitae asperiores magni ex fugiat quibusdam dolore soluta quidem voluptates neque, odio earum facere rem sed omnis enim quas beatae consequatur.',
  [Keys.MEMBER_3_NAME]: 'Sergey Vergun',
  [Keys.MEMBER_3_OCCUPATION]: 'HPC System Administrator',
  [Keys.MEMBER_3_DESC]:
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum vitae asperiores magni ex fugiat quibusdam dolore soluta quidem voluptates neque, odio earum facere rem sed omnis enim quas beatae consequatur.',
  [Keys.BUTTON_SIGNIN]: 'Sign In',
  [Keys.BUTTON_SIGNUP]: 'Sign Up',
  [Keys.BUTTON_SIGNOUT]: 'Sign Out',
  [Keys.BUTTON_MAIN]: 'Main',
  [Keys.QUERY_EDITOR_PLACEHOLDER]: '# Input your GraphQL query here.',
  [Keys.RESPONSE_VIEWER_PLACEHOLDER]: '{"Here will be server response."}',
  [Keys.HEADERS_ENTER_NOT_VALID]: 'Not valid input:',
  [Keys.HEADERS_SERVER_NOT_ACCEPT_ANY]: 'Server does not accept any Headers',
  [Keys.HEADERS_SERVER_ACCEPT_ONLY]: 'Server accept only next Headers:',
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
  [Keys.ENDPOINT_ADD_ERROR_DEFAULT]: 'Не удалось добавить новый адрес',
  [Keys.REQUEST_ERROR_UNKNOWN]: 'Что-то пошло не так',
  [Keys.REQUEST_ERROR_BASE]: 'Ошибка при запросе данных сервера',
  [Keys.REQUEST_ERROR_100]: 'Ошибка при запросе данных сервера',
  [Keys.REQUEST_ERROR_300]: 'Сервер перенаправил запрос',
  [Keys.REQUEST_ERROR_400]: 'Ошибка при отправке запроса на сервер',
  [Keys.REQUEST_ERROR_401]: 'Необходима аутентификация',
  [Keys.REQUEST_ERROR_500]: 'Ошибка на стороне сервера',
  [Keys.TITLE_WELCOME]: 'Добро пожаловать',
  [Keys.TITLE_WELCOME_2]: 'Это наш клон ',
  [Keys.TEXT_WELCOME]:
    'Этот проект является финальным заданием React Course от The Rolling Scopes School. Он представляет собой интерактивную GraphQL песочницу.',
  [Keys.TEXT_OUR_TEAM]: 'Наша команда',
  [Keys.MEMBER_1_NAME]: 'Данил Богданов',
  [Keys.MEMBER_1_OCCUPATION]: 'Lorem ipsum dolor sit',
  [Keys.MEMBER_1_DESC]:
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum vitae asperiores magni ex fugiat quibusdam dolore soluta quidem voluptates neque, odio earum facere rem sed omnis enim quas beatae consequatur.',
  [Keys.MEMBER_2_NAME]: 'Алексей Чугуенко',
  [Keys.MEMBER_2_OCCUPATION]: 'Lorem ipsum dolor sit',
  [Keys.MEMBER_2_DESC]:
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum vitae asperiores magni ex fugiat quibusdam dolore soluta quidem voluptates neque, odio earum facere rem sed omnis enim quas beatae consequatur.',
  [Keys.MEMBER_3_NAME]: 'Сергей Вергун',
  [Keys.MEMBER_3_OCCUPATION]: 'HPC Системный администратор',
  [Keys.MEMBER_3_DESC]:
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum vitae asperiores magni ex fugiat quibusdam dolore soluta quidem voluptates neque, odio earum facere rem sed omnis enim quas beatae consequatur.',
  [Keys.BUTTON_SIGNIN]: 'Войти',
  [Keys.BUTTON_SIGNUP]: 'Регистрация',
  [Keys.BUTTON_SIGNOUT]: 'Выйти',
  [Keys.BUTTON_MAIN]: 'Главная',
  [Keys.QUERY_EDITOR_PLACEHOLDER]: '# Введите свой GraphQL запрос.',
  [Keys.RESPONSE_VIEWER_PLACEHOLDER]: '{"Здесь будет ответ сервера."}',
  [Keys.HEADERS_ENTER_NOT_VALID]: 'Не валидный ввод:',
  [Keys.HEADERS_SERVER_NOT_ACCEPT_ANY]:
    'Сервер не принимает никаких заголовков',
  [Keys.HEADERS_SERVER_ACCEPT_ONLY]: 'Сервер принимает следующие заголовки:',
};

export const LANGUAGES: Dictionaries = { EN, RU };
