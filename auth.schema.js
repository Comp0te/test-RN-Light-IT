export const AuthSchema = {
    name: 'Auth',
    properties: {
        token:  'string',
        userId: 'string?',
        username: 'string?',
        isTouchIDActive: 'bool?'
    }
};