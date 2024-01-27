import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import IndexPage from './pages';
import SMSPage from './pages/smsPage/smsPage';
import EmailPage from './pages/emailPage/emailPage';

function App() {
	return (
		<Routes>
			<Route path="/" element={<IndexPage />} />
			<Route path="/sms" element={<SMSPage />} />
			<Route path="/email" element={<EmailPage />} />
		</Routes>
	);
}

export default App;
