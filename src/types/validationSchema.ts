import { Keys } from '@/constants/dictionaries';
import * as yup from 'yup';

const specialCharacters = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/;

const email = yup
  .string()
  .required(Keys.USER_FORM_EMAIL_REQUIRED)
  .email(Keys.USER_FORM_EMAIL_INVALID)
  .matches(/@[^.]*\.\S{2,}/, Keys.USER_FORM_EMAIL_INVALID);

const password = yup
  .string()
  .required(Keys.USER_FORM_PASSWORD_REQUIRED)
  .matches(/[0-9]/, Keys.USER_FORM_PASSWORD_NUMBER)
  .matches(/\p{Ll}/u, Keys.USER_FORM_PASSWORD_DOWN_LETTER)
  .matches(/\p{Lu}/u, Keys.USER_FORM_PASSWORD_UP_LETTER)
  .matches(specialCharacters, Keys.USER_FORM_PASSWORD_SPECIAL)
  .min(8, Keys.USER_FORM_PASSWORD_LENGTH);

const confirmPassword = yup
  .string()
  .oneOf([yup.ref('password')], Keys.USER_FORM_CONFIRM_PASSWORD_MATCH)
  .required(Keys.USER_FORM_CONFIRM_PASSWORD_REQUIRED);

export const schema = yup.object().shape({
  email,
  password,
});

export const schemaWithConfirmPass = yup.object().shape({
  email,
  password,
  confirmPassword,
});
