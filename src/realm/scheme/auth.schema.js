export const AUTH_SCHEMA_NAME = 'Auth';

export const AuthSchema = {
    name: AUTH_SCHEMA_NAME,
    properties: {
        token:  'string',
        userId: 'string?',
        username: 'string?',
        isTouchIDActive: 'bool?'
    }
};