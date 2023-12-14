import { Keys } from '@/constants/dictionaries';
import * as yup from 'yup';

const specialCharacters = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/;

export const schema = yup.object().shape({
  email: yup
    .string()
    .required(Keys.USER_FORM_EMAIL_REQUIRED)
    .email(Keys.USER_FORM_EMAIL_INVALID)
    .matches(/@[^.]*\./, Keys.USER_FORM_EMAIL_INVALID),
  password: yup
    .string()
    .required(Keys.USER_FORM_PASSWORD_REQUIRED)
    .matches(/[0-9]/, Keys.USER_FORM_PASSWORD_NUMBER)
    .matches(/[a-zа-я]/, Keys.USER_FORM_PASSWORD_DOWN_LETTER)
    .matches(/[A-ZА-Я]/, Keys.USER_FORM_PASSWORD_UP_LETTER)
    .matches(specialCharacters, Keys.USER_FORM_PASSWORD_SPECIAL)
    .min(8, Keys.USER_FORM_PASSWORD_LENGTH),
});
