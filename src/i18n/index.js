import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import pt from '../locales/pt.json';
import en from '../locales/en.json';

const savedLang = localStorage.getItem('i18nextLng');

let detectedLang = 'pt';
if (savedLang) {
	detectedLang = savedLang;
} else {
	const browserLang = navigator.language || '';
	detectedLang = browserLang.startsWith('pt') ? 'pt' : 'en';
}

i18n.use(initReactI18next).init({
	resources: {
		pt: { translation: pt },
		en: { translation: en },
	},
	lng: detectedLang,
	fallbackLng: 'pt',
	interpolation: {
		escapeValue: false,
	},
});

i18n.on('languageChanged', (lng) => {
	localStorage.setItem('i18nextLng', lng);
	document.documentElement.lang = lng;
});

document.documentElement.lang = detectedLang;

export default i18n;
