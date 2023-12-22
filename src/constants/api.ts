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
