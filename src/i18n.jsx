import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';

i18n.use(Backend)
    .use(initReactI18next)
    .init({
        lng: 'en',
        backend: {
            loadPath: `${CONFIG.PATH_FX_RATE_FOLDER}/{{ns}}/{{lng}}.json`
        },
        fallbackLng: 'es',
        debug: true,
        ns: ['i18n'],
        defaultNS: 'i18n',
        keySeparator: false,
        interpolation: {
            escapeValue: false,
            formatSeparator: ','
        },
        react: {
            wait: true
        },
        initImmediate: false
    });

export default i18n;
