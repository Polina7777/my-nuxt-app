import en from './locales/en.json';
import ru from './locales/ru.json'
export default defineI18nConfig(() => ({
     legacy: false,
    // legacy: true,
    locale: 'ru',
    messages: {
      en: en,
     ru: ru
    },

  }))
  