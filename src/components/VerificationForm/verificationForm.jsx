import Button from '../Button/Button';
import Input from '../Input/Input';
import styles from './style.module.css';
import { useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const FORMSTATE = {
	phone: {
		value: '',
	},
	eMail: {
		value: '',
	},
	address: {
		value: '',
	},
};
const VerificationForm = () => {
	const [formType, setFormType] = useState('phone');
	const [formState, setFormState] = useState(FORMSTATE);
	const phoneRef = useRef(null);
	const navigate = useNavigate();

	const onChangeEmail = (value) => {
		const form = { ...formState };
		form.eMail.value = value;
		setFormState(form);
	};

	const onChangePhone = (value) => {
		const phoneNumber = value.replace(/\D/g, '');
		const form = { ...formState };

		console.log(phoneRef)

		if (value === '') {
			form.phone.value = '';
			setFormState(form);
			return;
		}

		if (phoneNumber.length <= 1) {
			if (value === '+' || phoneNumber[0] === '7' || phoneNumber[0] === '8') {
				form.phone.value = `+7`;
				setFormState(form);
				return;
			} else {
				form.phone.value = `+7(${phoneNumber[0]}`;
				setFormState(form);
				return;
			}
		}

		if (phoneNumber.length > 1 && phoneNumber.length < 5) {
			form.phone.value = `+7 (${phoneNumber.slice(1)}`;
			setFormState(form);
			return;
		}

		if (phoneNumber.length >= 5 && phoneNumber.length < 8) {
			form.phone.value = `+7 (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(4, 7)}`;
			setFormState(form);
			return;
		}

		if (phoneNumber.length >= 8 && phoneNumber.length < 10) {
			form.phone.value = `+7 (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(
				4,
				7,
			)} ${phoneNumber.slice(7, 9)}`;
			setFormState(form);
			return;
		}

		if (phoneNumber.length >= 10) {
			form.phone.value = `+7 (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(
				4,
				7,
			)} ${phoneNumber.slice(7, 9)} ${phoneNumber.slice(9, 11)}`;
			setFormState(form);
			if (phoneNumber.length === 11) {
				phoneRef.current.blur();
				console.log('blue')
			}
			return;
		}
	};

	const onBackSpacePhone = (e) => {
		console.log(e.keyCode);

		const form = { ...formState };

		if (e.keyCode === 8 && form.phone.value === '+7') {
			form.phone.value = '';
			setFormState(form);
		}
	};

	const onChangeAddress = (value) => {
		const form = { ...formState };
		form.address.value = value;
		setFormState(form);
	};

	const submitForm = (e) => {
		e.preventDefault();
		if (formType === 'phone') {
			navigate('/sms');
		} else {
			navigate(`/email?email=${formState.eMail.value}`);
			localStorage.setItem('email', formState.eMail.value);
		}
	};
	return (
		<div className={styles.container}>
			<div className={styles.header}>Создать аккаунт</div>
			<div className={styles.toggler}>
				<label>
					<input
						onChange={() => {
							setFormType('phone');
						}}
						defaultChecked
						name="form toggle"
						type="radio"
						value="phone"
					/>
					<span>По номеру телефона</span>
				</label>

				<label>
					<input
						onChange={() => {
							setFormType('email');
						}}
						name="form toggle"
						type="radio"
						value="email"
					/>
					<span>Через E-mail</span>
				</label>

				<div className={`${styles.togglerLine} ${formType === 'email' ? styles.email : ''}`}></div>
			</div>

			<form onSubmit={submitForm}>
				{formType === 'phone' ? (
					<Input
						className={styles.input}
						label={'Введите номер телефона'}
						placeholder={'+7 (123) 456 78 90'}
						value={formState.phone.value}
						onChange={onChangePhone}
						onKeyDown={onBackSpacePhone}
						type="tel"
						inputRef={phoneRef}
					/>
				) : (
					<Input
						className={styles.input}
						label={'Введите E-mail'}
						placeholder={'name@domain.ru'}
						value={formState.eMail.value}
						onChange={onChangeEmail}
					/>
				)}

				<div className={styles.fieldBase}>
					<span>Введите адрес базы</span>
					<div style={{ display: 'flex' }}>
						https://
						<Input
							onChange={onChangeAddress}
							value={formState.address.value}
							className={styles.baseInput}
						/>
						.project.pro
						<button
							type="button"
							onClick={() => {
								if (formState.address.value !== '') {
									navigator.clipboard.writeText(`https://${formState.address.value}.project.pro`);
								}
							}}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 20 20"
								fill="none">
								<path
									d="M5 9.16666C5 6.80999 5 5.63082 5.7325 4.89916C6.46417 4.16666 7.64333 4.16666 10 4.16666H12.5C14.8567 4.16666 16.0358 4.16666 16.7675 4.89916C17.5 5.63082 17.5 6.80999 17.5 9.16666V13.3333C17.5 15.69 17.5 16.8692 16.7675 17.6008C16.0358 18.3333 14.8567 18.3333 12.5 18.3333H10C7.64333 18.3333 6.46417 18.3333 5.7325 17.6008C5 16.8692 5 15.69 5 13.3333V9.16666Z"
									stroke="#0085E2"
									stroke-width="1.5"
								/>
								<path
									d="M5 15.8333C4.33696 15.8333 3.70107 15.5699 3.23223 15.1011C2.76339 14.6323 2.5 13.9964 2.5 13.3333V8.33332C2.5 5.19082 2.5 3.61916 3.47667 2.64332C4.4525 1.66666 6.02417 1.66666 9.16667 1.66666H12.5C13.163 1.66666 13.7989 1.93005 14.2678 2.39889C14.7366 2.86773 15 3.50362 15 4.16666"
									stroke="#0085E2"
									stroke-width="1.5"
								/>
							</svg>
						</button>
					</div>
				</div>

				<div className={styles.checkboxCont}>
					<label>
						<input type="checkbox" />
						<span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 20 20"
								fill="none">
								<path
									d="M8.14025 13.3273L5.96977 10.6989C5.86184 10.5726 5.7173 10.5028 5.56726 10.5044C5.41722 10.5059 5.2737 10.5788 5.1676 10.7073C5.06151 10.8358 5.00133 11.0096 5.00002 11.1913C4.99872 11.373 5.0564 11.548 5.16063 11.6787L7.73568 14.7971C7.84299 14.927 7.98851 15 8.14025 15C8.29198 15 8.4375 14.927 8.54481 14.7971L14.8394 7.17439C14.9436 7.04369 15.0013 6.86865 15 6.68695C14.9987 6.50526 14.9385 6.33145 14.8324 6.20297C14.7263 6.07448 14.5828 6.00161 14.4327 6.00003C14.2827 5.99845 14.1382 6.0683 14.0302 6.19453L8.14025 13.3273Z"
									fill="white"
								/>
							</svg>
						</span>
					</label>

					<div>
						Принимаю <span>оферту</span>
					</div>
				</div>

				<Button className={styles.submitBtn} type={'submit'}>
					Далее
				</Button>

				<div className={styles.noAcc}>
					{'Нет аккаунта? '}
					<Link path="/">{'Регистрация'}</Link>
				</div>
			</form>
		</div>
	);
};

export default VerificationForm;
