export const defaultApiUrl = 'https://api.github.com/graphql';

export const defaultApiHeaders = {
  'Content-Type': 'application/json',
};

export const defaultApiMethod = 'POST';

export const defaultApiQuery = `
          {
            __schema {
              types {
                name
              }
            }
          }
        `;
