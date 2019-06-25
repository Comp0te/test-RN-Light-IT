import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { Languages } from '../utils/constants';
import en from './en';
import ru from './ru';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      [Languages.EN]: en,
      [Languages.RU]: ru,
    },
    lng: Languages.EN,
    defaultNS: 'components',
    fallbackLng: Languages.EN,
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
