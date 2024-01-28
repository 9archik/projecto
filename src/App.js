import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import IndexPage from './pages';
import SMSPage from './pages/smsPage/smsPage';
import EmailPage from './pages/emailPage/emailPage';
import BuyLicensePage from './pages/BuyLicensePage/buyLicensePage';

function App() {
	return (
		<Routes>
			<Route path="/" element={<IndexPage />} />
			<Route path="/sms" element={<SMSPage />} />
			<Route path="/email" element={<EmailPage />} />
			<Route path="/license" element={<BuyLicensePage />} />
		</Routes>
	);
}

export default App;
