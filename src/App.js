import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { UserContext } from './context/user';
import './App.css';
import IndexPage from './pages';
import SMSPage from './pages/smsPage/smsPage';
import EmailPage from './pages/emailPage/emailPage';
import { post } from './lib/api';
import loaderSvg from './assets/image/loader.svg'

function App() {
	const WebApp = window.Telegram.WebApp;

	if(WebApp) {
		WebApp.expand();
	}

	const [ isLoading, setIsLoading ] = useState(true);
	const [ user, setUser ] = useState(null);

	useEffect(() => {
		let _mounted = true;
		if(WebApp.initData) {
			setIsLoading(true)
			post('/users/loginByInitData', {},
				decodeURIComponent(WebApp.initData)).then(
				data => {
					if (_mounted) {
						setUser(data);
						setIsLoading(false);
					}
				}
			).catch(alert)
		}
		return () => _mounted = false
	}, [WebApp.initData]);


	if(isLoading) {
		return <div style={{ textAlign: 'center', padding: '20px', height: '100vh', display: 'flex', justifyContent: 'center' }}>
			<img src={ loaderSvg } alt='Loading' style={{ width: 64 }} />
		</div>
	}

	return (
		<UserContext.Provider value={user}>
			<Routes>
				<Route path="/" element={<IndexPage />} />
				<Route path="/sms" element={<SMSPage />} />
				<Route path="/email" element={<EmailPage />} />
			</Routes>
		</UserContext.Provider>
	);
}

export default App;
