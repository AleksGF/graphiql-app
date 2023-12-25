export enum HTTP_STATUS {
  Code_100 = 100,
  Code_200 = 200,
  Code_300 = 300,
  Code_400 = 400,
  Code_401 = 401,
  Code_500 = 500,
}

export const defaultApiHeaders = {
  'Content-Type': 'application/json',
};

export const defaultApiMethod = 'POST';

export const defaultApiQuery = `
          {
  __schema {
    queryType {
      name
    }
  }
}
        `;

export const typesApiQuery = `
          {
            __schema {
              types {
                name
              }
            }
          }
        `;
