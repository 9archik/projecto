import Header from '../../components/Header/header';
import SMSForm from '../../components/SmsForm/smsForm';
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
