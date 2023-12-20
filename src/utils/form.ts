const hasNumber = /[0-9]/;
const hasDownLetter = /\p{Ll}/u;
const hasUpLetter = /\p{Lu}/u;
const hasSpecialCharacters = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/;
const MIN_LENGTH = 8;
const STEP = 20;

export const getPasswordStrength = (password: string) => {
  let strength = 0;

  if (hasNumber.test(password)) {
    strength += STEP;
  }

  if (hasDownLetter.test(password)) {
    strength += STEP;
  }

  if (hasUpLetter.test(password)) {
    strength += STEP;
  }

  if (hasSpecialCharacters.test(password)) {
    strength += STEP;
  }

  if (password.length >= MIN_LENGTH) {
    strength += STEP;
  }

  return strength;
};

export enum StrengthColor {
  VeryWeak = 'error',
  Weak = 'warning',
  Medium = 'secondary',
  Strong = 'primary',
  VeryStrong = 'success',
}

const veryWeakPass = 20;
const weakPass = 40;
const mediumPass = 60;
const strongPass = 80;
const veryStrongPass = 100;

export const getStrengthColor = (strength: number): StrengthColor => {
  switch (strength) {
    case veryWeakPass:
      return StrengthColor.VeryWeak;
    case weakPass:
      return StrengthColor.Weak;
    case mediumPass:
      return StrengthColor.Medium;
    case strongPass:
      return StrengthColor.Strong;
    case veryStrongPass:
      return StrengthColor.VeryStrong;
    default:
      return StrengthColor.VeryWeak;
  }
};
