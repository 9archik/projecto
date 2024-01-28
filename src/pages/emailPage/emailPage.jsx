import { useLayoutEffect } from 'react';
import EmailForm from '../../components/EmailForm/emailForm';
import Header from '../../components/Header/header';
import SMSForm from '../../components/SmsForm/smsForm';
import bg from "../../assets/image/background.png"
const EmailPage = () => {

	return (
		<>
			<Header />
			<main className={`container vertical-center`}>
				<EmailForm />
			</main>
		</>
	);
};

export default EmailPage;
