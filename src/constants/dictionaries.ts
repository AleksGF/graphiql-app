export enum Langs {
  EN = 'EN',
  RU = 'RU',
}

enum Keys {
  TITTLE_404 = 'TITTLE_404',
  TEXT_404 = 'TEXT_404',
  GO_TO = 'GO_TO',
  HOME_PAGE = 'HOME_PAGE',
  ERROR_MESSAGE = 'ERROR_MESSAGE',
  SEARCH = 'SEARCH',
  TITLE_WELCOME = 'TITLE_WELCOME',
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
}

export type Dictionary = Record<keyof typeof Keys, string>;
type Dictionaries = Record<keyof typeof Langs, Dictionary>;

// TODO Add team members info with correct translation
// TODO Rephrase welcome title and text
const EN: Dictionary = {
  [Keys.TITTLE_404]: '404 - Not Found',
  [Keys.TEXT_404]: 'Page you are looking for not found',
  [Keys.GO_TO]: 'Go to',
  [Keys.HOME_PAGE]: 'Home Page',
  [Keys.ERROR_MESSAGE]: 'Something went wrong...',
  [Keys.SEARCH]: 'Search',
  [Keys.TITLE_WELCOME]: 'Welcome to our GraphiQL clone',
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
};

const RU: Dictionary = {
  [Keys.TITTLE_404]: '404 - Страница не найдена',
  [Keys.TEXT_404]: 'Запрашиваемая страница не найдена',
  [Keys.GO_TO]: 'Перейти на',
  [Keys.HOME_PAGE]: 'Домашнюю страницу',
  [Keys.ERROR_MESSAGE]: 'Что-то пошло не так...',
  [Keys.SEARCH]: 'Искать',
  [Keys.TITLE_WELCOME]: 'Добро пожаловать, это наш клон GraphiQL',
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
};

export const LANGUAGES: Dictionaries = { EN, RU };
