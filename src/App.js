import GlobalStyle from './globalStyles';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Footer from './components/Footer';
import Offer from './components/Offer';

function App() {
	return (
		<Router>
			<GlobalStyle />
			<Navbar />
			<HeroSection />
			<About />
			<Offer />
			<Footer />
		</Router>
	);
}

export default App;
