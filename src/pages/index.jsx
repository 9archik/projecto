import Header from '../components/Header/header';
import RecAccess from '../components/RecAccess/RecAccess';
import VerificationForm from '../components/VerificationForm/verificationForm';
import { useLayoutEffect } from 'react';
import bg from '../assets/image/background.png';

const IndexPage = () => {

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
