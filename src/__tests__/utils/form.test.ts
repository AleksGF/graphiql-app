import {
  getPasswordStrength,
  getStrengthColor,
  StrengthColor,
} from '@/utils/form';

describe('getPasswordStrength', () => {
  it('should return the correct strength for a given password', () => {
    expect(getPasswordStrength('')).toBe(0);
    expect(getPasswordStrength('p')).toBe(20);
    expect(getPasswordStrength('password')).toBe(40);
    expect(getPasswordStrength('Password')).toBe(60);
    expect(getPasswordStrength('Password1')).toBe(80);
    expect(getPasswordStrength('Password1!')).toBe(100);
    expect(getPasswordStrength('SecurePassword123!')).toBe(100);
  });
});

describe('getStrengthColor', () => {
  it('should return the correct color for a given strength', () => {
    expect(getStrengthColor(10)).toBe(StrengthColor.VeryWeak);
    expect(getStrengthColor(20)).toBe(StrengthColor.VeryWeak);
    expect(getStrengthColor(40)).toBe(StrengthColor.Weak);
    expect(getStrengthColor(60)).toBe(StrengthColor.Medium);
    expect(getStrengthColor(80)).toBe(StrengthColor.Strong);
    expect(getStrengthColor(100)).toBe(StrengthColor.VeryStrong);
    expect(getStrengthColor(120)).toBe(StrengthColor.VeryWeak);
  });
});
