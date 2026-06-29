import { Routes, Route } from 'react-router-dom';
import useScrollToTop from './hooks/useScrollToTop.js';
import LanguageSwitcher from './components/LanguageSwitcher.jsx';
import Home from './pages/Home.jsx';
import Sobre from './pages/Sobre.jsx';
import Contacto from './pages/Contacto.jsx';
import Logistica from './pages/Logistica.jsx';
import Areas from './pages/Areas.jsx';
import AreaAlimentar from './pages/AreaAlimentar.jsx';
import AreaConstrucao from './pages/AreaConstrucao.jsx';
import AreaFarmaceutica from './pages/AreaFarmaceutica.jsx';
import AreaIT from './pages/AreaIT.jsx';
import AreaOffice from './pages/AreaOffice.jsx';
import AreaOfficeMob from './pages/AreaOfficeMob.jsx';
import Instalacoes from './pages/Instalacoes.jsx';

function App() {
	useScrollToTop();

	return (
		<>
			<Routes>
					<Route path="/" element={<Home />} />
				<Route path="/sobre" element={<Sobre />} />
				<Route path="/contacto" element={<Contacto />} />
				<Route path="/logistica" element={<Logistica />} />
				<Route path="/areas" element={<Areas />} />
				<Route path="/areas/alimentar" element={<AreaAlimentar />} />
				<Route path="/areas/construcao" element={<AreaConstrucao />} />
				<Route path="/areas/farmaceutica" element={<AreaFarmaceutica />} />
				<Route path="/areas/it" element={<AreaIT />} />
				<Route path="/areas/office" element={<AreaOffice />} />
				<Route path="/areas/office-mob" element={<AreaOfficeMob />} />
				<Route path="/instalacoes" element={<Instalacoes />} />
			</Routes>
			<LanguageSwitcher />
		</>
	);
}

export default App;
