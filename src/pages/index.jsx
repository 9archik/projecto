import Header from '../components/Header/header';
import RecAccess from '../components/RecAccess/RecAccess';
import VerificationForm from '../components/VerificationForm/verificationForm';
import { useEffect } from 'react';
import bg from '../assets/image/background.png';
import { useNavigate } from 'react-router-dom';

const IndexPage = () => {
	const navigate = useNavigate();

	useEffect(() => {
		const url = new URL(window.location.href);
		const params = new URLSearchParams(url.search);
		const redirect = params.get('redirect');
		if (redirect) {
			navigate(`/${redirect}`);
		}
	}, [])


	return (
		<>
			<Header />
			<main className={`container vertical-center`}>
				<VerificationForm />
			</main>
			<RecAccess />
		</>
	);
};

export default IndexPage;
