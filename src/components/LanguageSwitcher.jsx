import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
	const { i18n } = useTranslation();

	return (
		<div className="lang-switcher">
			<button
				className={`lang-btn${i18n.language === 'pt' ? ' active' : ''}`}
				onClick={() => i18n.changeLanguage('pt')}
				title="Português"
			>
				PT
			</button>
			<button
				className={`lang-btn${i18n.language === 'en' ? ' active' : ''}`}
				onClick={() => i18n.changeLanguage('en')}
				title="English"
			>
				EN
			</button>
		</div>
	);
}
