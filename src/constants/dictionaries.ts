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
  SEARCH = 'SEARCH',
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
  USER_FORM_EMAIL = 'USER_FORM_EMAIL',
  USER_FORM_EMAIL_REQUIRED = 'USER_FORM_EMAIL_REQUIRED',
  USER_FORM_EMAIL_INVALID = 'USER_FORM_EMAIL_INVALID',
  USER_FORM_PASSWORD = 'USER_FORM_PASSWORD',
  USER_FORM_PASSWORD_REQUIRED = 'USER_FORM_PASSWORD_REQUIRED',
  USER_FORM_PASSWORD_NUMBER = 'USER_FORM_PASSWORD_NUMBER',
  USER_FORM_PASSWORD_DOWN_LETTER = 'USER_FORM_PASSWORD_DOWN_LETTER',
  USER_FORM_PASSWORD_UP_LETTER = 'USER_FORM_PASSWORD_UP_LETTER',
  USER_FORM_PASSWORD_SPECIAL = 'USER_FORM_PASSWORD_SPECIAL',
  USER_FORM_PASSWORD_LENGTH = 'USER_FORM_PASSWORD_LENGTH',
  USER_FORM_VALIDATION = 'USER_FORM_VALIDATION',
  SIGNIN_TITLE = 'SIGNIN_TITLE',
  SIGNIN_LINK = 'SIGNIN_LINK',
  SIGNIN_MESSAGE = 'SIGNIN_MESSAGE',
  SIGNUP_TITLE = 'SIGNUP_TITLE',
  SIGNUP_LINK = 'SIGNUP_LINK',
  SIGNUP_MESSAGE = 'SIGNUP_MESSAGE',
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
  [Keys.SEARCH]: 'Search',
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
  [Keys.USER_FORM_EMAIL]: 'Email',
  [Keys.USER_FORM_EMAIL_REQUIRED]: 'Email is a required field',
  [Keys.USER_FORM_EMAIL_INVALID]: 'Email must be valid email',
  [Keys.USER_FORM_PASSWORD]: 'Password',
  [Keys.USER_FORM_PASSWORD_REQUIRED]: 'Password is a required field',
  [Keys.USER_FORM_PASSWORD_NUMBER]: 'Password must contain number',
  [Keys.USER_FORM_PASSWORD_DOWN_LETTER]:
    'Password must contain down cased letter',
  [Keys.USER_FORM_PASSWORD_UP_LETTER]:
    'Password must contain upper cased letter',
  [Keys.USER_FORM_PASSWORD_SPECIAL]: 'Password must contain special character',
  [Keys.USER_FORM_PASSWORD_LENGTH]: 'Password must be minimum 8 symbols',
  [Keys.USER_FORM_VALIDATION]: 'Incorrect type',
  [Keys.SIGNIN_TITLE]: 'Sign In',
  [Keys.SIGNIN_LINK]: "Don't have an account? Sign Up",
  [Keys.SIGNIN_MESSAGE]: 'Incorrect email or password',
  [Keys.SIGNUP_TITLE]: 'Sign Up',
  [Keys.SIGNUP_LINK]: 'Already have an account? Sign in',
  [Keys.SIGNUP_MESSAGE]: 'This email already exists.',
};

const RU: Dictionary = {
  [Keys.TITLE_404]: '404 - Страница не найдена',
  [Keys.TEXT_404]: 'Запрашиваемая страница не найдена',
  [Keys.TITLE_ERROR]: 'Ой...',
  [Keys.GO_TO]: 'Перейти на',
  [Keys.HOME_PAGE]: 'Домашнюю страницу',
  [Keys.ERROR_MESSAGE]: 'Что-то пошло не так...',
  [Keys.SEARCH]: 'Искать',
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
  [Keys.USER_FORM_EMAIL]: 'Почта',
  [Keys.USER_FORM_EMAIL_REQUIRED]: 'Почта обязательное поле',
  [Keys.USER_FORM_EMAIL_INVALID]: 'Почта должна быть валидным адресом',
  [Keys.USER_FORM_PASSWORD]: 'Пароль',
  [Keys.USER_FORM_PASSWORD_REQUIRED]: 'Пароль обязательное поле',
  [Keys.USER_FORM_PASSWORD_NUMBER]: 'Пароль должен содержать цифры',
  [Keys.USER_FORM_PASSWORD_DOWN_LETTER]:
    'Пароль должен содержать прописные буквы',
  [Keys.USER_FORM_PASSWORD_UP_LETTER]:
    'Пароль должен содержать заглавные буквы',
  [Keys.USER_FORM_PASSWORD_SPECIAL]:
    'Пароль должен содержать специальные символы',
  [Keys.USER_FORM_PASSWORD_LENGTH]: 'Пароль должен быть минимум 8 символов',
  [Keys.USER_FORM_VALIDATION]: 'Неверный ввод',
  [Keys.SIGNIN_TITLE]: 'Вход',
  [Keys.SIGNIN_LINK]: 'Еще нет аккаунта? Зарегистрироваться',
  [Keys.SIGNIN_MESSAGE]: 'Неправильный логин или пароль',
  [Keys.SIGNUP_TITLE]: 'Регистрация',
  [Keys.SIGNUP_LINK]: 'Уже есть аккаунт? Войти',
  [Keys.SIGNUP_MESSAGE]: 'Данный адрес почты уже используется',
};

export const LANGUAGES: Dictionaries = { EN, RU };
