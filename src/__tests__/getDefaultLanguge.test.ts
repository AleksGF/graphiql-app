import { getDefaultLanguage } from '@/utils/getDefaultLanguage';
import { Langs } from '@/constants/dictionaries';

const testCasesWithEn: string[][] = [
  ['en', 'fr'],
  ['fr', 'en'],
  ['EN', 'FR'],
  ['En', 'FR'],
  ['FR', 'EN'],
  ['FR', 'eN'],
  ['en-US', 'fr-FR'],
  ['ph', 'EN-US'],
  ['en', 'ru'],
];

const testCasesWithRu: string[][] = [
  ['ru', 'fr'],
  ['fr', 'ru'],
  ['RU', 'FR'],
  ['FR', 'RU'],
  ['FR', 'Ru'],
  ['FR', 'rU'],
  ['ru-RU', 'fr-FR'],
  ['ph', 'ru-RU'],
  ['ru', 'en'],
];

const testCasesWithoutSupportedLanguage: string[][] = [
  ['be', 'fr'],
  ['fr', 'de'],
  ['DE', 'FR'],
  ['FR', 'DE'],
  ['un-RU', 'fr-FR'],
  ['ph', 'cu-ru'],
];

describe('getDefaultLanguage should return', () => {
  afterAll(() => {
    vi.unstubAllGlobals();
  });

  it('EN when user prefer it', () => {
    testCasesWithEn.forEach((testCase) => {
      const navigatorMock = {
        languages: testCase,
      };
      vi.stubGlobal('navigator', navigatorMock);

      expect(getDefaultLanguage()).toBe(Langs.EN);
    });
  });

  it('RU when user prefer it', () => {
    testCasesWithRu.forEach((testCase) => {
      const navigatorMock = {
        languages: testCase,
      };
      vi.stubGlobal('navigator', navigatorMock);

      expect(getDefaultLanguage()).toBe(Langs.RU);
    });
  });

  it('EN when user does not prefer any available', () => {
    testCasesWithoutSupportedLanguage.forEach((testCase) => {
      const navigatorMock = {
        languages: testCase,
      };
      vi.stubGlobal('navigator', navigatorMock);

      expect(getDefaultLanguage()).toBe(Langs.EN);
    });
  });
});
