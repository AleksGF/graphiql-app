import { Keys } from '@/constants/dictionaries';
import { schema, schemaWithConfirmPass } from '@/types/validationSchema';

const validEmail = 'test@example.com';
const invalidEmail = 'invalid';
const validPassword = 'Password1!';
const weakPassword = 'password';
const confirmPassword = 'DifferentPassword';

describe('schema', () => {
  it('should pass with a valid email and password', async () => {
    await expect(
      schema.validate({ email: validEmail, password: validPassword }),
    ).resolves.toBeTruthy();
  });

  it('should fail with an invalid email', async () => {
    await expect(
      schema.validate({ email: invalidEmail, password: validPassword }),
    ).rejects.toThrowError(Keys.USER_FORM_EMAIL_INVALID);
  });

  it('should fail with a weak password', async () => {
    await expect(
      schema.validate({ email: validEmail, password: weakPassword }),
    ).rejects.toThrowError(Keys.USER_FORM_PASSWORD_NUMBER);
  });

  it('should fail with an invalid email anda weak password', async () => {
    await expect(
      schema.validate({ email: invalidEmail, password: weakPassword }),
    ).rejects.toThrowError(Keys.USER_FORM_PASSWORD_NUMBER);
  });
});

describe('schemaWithConfirmPass', () => {
  it('should pass with a valid email and password', async () => {
    await expect(
      schemaWithConfirmPass.validate({
        email: validEmail,
        password: validPassword,
        confirmPassword: validPassword,
      }),
    ).resolves.toBeTruthy();
  });

  it('should fail with an invalid email', async () => {
    await expect(
      schemaWithConfirmPass.validate({
        email: invalidEmail,
        password: validPassword,
        confirmPassword: validPassword,
      }),
    ).rejects.toThrowError(Keys.USER_FORM_EMAIL_INVALID);
  });

  it('should fail with a weak password', async () => {
    await expect(
      schemaWithConfirmPass.validate({
        email: validEmail,
        password: weakPassword,
        confirmPassword: weakPassword,
      }),
    ).rejects.toThrowError(Keys.USER_FORM_PASSWORD_NUMBER);
  });

  it('should fail with an invalid email anda weak password', async () => {
    await expect(
      schemaWithConfirmPass.validate({
        email: invalidEmail,
        password: weakPassword,
        confirmPassword: weakPassword,
      }),
    ).rejects.toThrowError(Keys.USER_FORM_PASSWORD_NUMBER);
  });

  it('should fail with an invalid password confirmation', async () => {
    await expect(
      schemaWithConfirmPass.validate({
        email: validEmail,
        password: validPassword,
        confirmPassword: confirmPassword,
      }),
    ).rejects.toThrowError(Keys.USER_FORM_CONFIRM_PASSWORD_MATCH);
  });
});
