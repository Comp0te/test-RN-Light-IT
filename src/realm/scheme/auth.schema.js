export const AUTH_SCHEMA_NAME = 'Auth';

export const AuthSchema = {
  name: AUTH_SCHEMA_NAME,
  primaryKey: 'id',
  properties: {
    id: 'string',
    token: 'string',
    userId: 'string?',
    username: 'string?',
    isTouchIDActive: 'bool?',
  },
};
