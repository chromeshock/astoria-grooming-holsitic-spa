// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "welcome": "Welcome to our app!",
      // ... more keys
    }
  },
  es: {
    translation: {
      "welcome": "¡Bienvenido a nuestra aplicación!",
      // ... more keys
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;
