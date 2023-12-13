import * as yup from 'yup';

const specialCharacters = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/;

export const schema = yup.object().shape({
  email: yup
    .string()
    .required()
    .email()
    .matches(/@[^.]*\./),
  password: yup
    .string()
    .required()
    .matches(/[0-9]/, 'must contain number')
    .matches(/[a-z]/, 'must contain down cased letter')
    .matches(/[A-Z]/, 'must contain upper cased letter')
    .matches(specialCharacters, 'must contain special character')
    .min(6),
});
