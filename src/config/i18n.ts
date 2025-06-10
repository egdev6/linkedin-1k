import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      homePage: {
        es: 'Spanish',
        en: 'English',
        logoAlt: 'Egdev Logo',
        languageSwitcher: 'Language Switcher',
        switchToSpanish: 'Switch to Spanish',
        switchToEnglish: 'Switch to English',
        title: 'Egdev - Present for you!',
        click: 'Click on the present to open it!',
        openPresent: 'Open the Present',
        message: '1000 thanks for your support! 💞 ',
        message2: 'Thank you for every like, comment, and message. I promise to keep adding value with your support.',
        linkedin: 'Linkedin link',
        github: 'github link',
        instagram: 'instagram link',
        letsParty: "let's go party!"
      }
    }
  },
  es: {
    translation: {
      homePage: {
        es: 'Español',
        en: 'Inglés',
        logoAlt: 'Egdev Logo',
        languageSwitcher: 'Selector de Idioma',
        switchToSpanish: 'Cambiar a Español',
        switchToEnglish: 'Cambiar a Inglés',
        title: 'Egdev - Regalo para ti!',
        click: '¡Click en el regalo para abrirlo!',
        openPresent: 'Abrir el Regalo',
        message: '¡1000 gracias por tu apoyo! 💞 ',
        message2: 'Gracias por cada like, comentario y mensaje. Prometo seguir aportando valor con tu apoyo.',
        linkedin: 'Enlace Linkedin',
        github: 'Enlace github link',
        instagram: 'Enlace instagram link',
        letsParty: 'Fiestaaaa!'
      }
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'es',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
