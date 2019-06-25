export const SETTINGS_SCHEMA_NAME = 'Settings';

export const SettingsSchema = {
  name: SETTINGS_SCHEMA_NAME,
  primaryKey: 'id',
  properties: {
    id: 'string',
    isTouchIDAuth: 'bool?',
    language: 'string?',
  },
};
