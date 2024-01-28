import { useLayoutEffect } from 'react';
import Header from '../../components/Header/header';
import SMSForm from '../../components/SmsForm/smsForm';
import bg from '../../assets/image/background.png';
const SMSPage = () => {

	return (
		<>
			<Header />
			<main className={`container vertical-center`}>
				<SMSForm />
			</main>
		</>
	);
};

export default SMSPage;
