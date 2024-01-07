import { isUrlValid } from '@/utils/isUrlValid';

const correctUrls = [
  'https://github.com/',
  'https://swapi-graphql.netlify.app/.netlify/functions/index',
  'http://some-new-endpoint.com/graphql',
];

const invalidUrls = [
  'github.com/',
  'https//github',
  'some-text',
  'https://',
  '1https://git',
];

describe('isUrlValid', () => {
  it('should return true for correct url', () => {
    correctUrls.forEach((url) => {
      expect(isUrlValid(url)).toBe(true);
    });
  });

  it('should return false for invalid url', () => {
    invalidUrls.forEach((url) => {
      expect(isUrlValid(url)).toBe(false);
    });
  });
});
