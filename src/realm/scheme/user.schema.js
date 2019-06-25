export const USER_SCHEMA_NAME = 'User';

export const UserSchema = {
  name: USER_SCHEMA_NAME,
  primaryKey: 'id',
  properties: {
    id: 'int',
    username: 'string',
  },
};
