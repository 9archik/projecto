import { useState, useRef, useEffect, useContext } from 'react';
import Input from '../Input/Input';
import styles from './style.module.css';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import { useNavigate } from 'react-router-dom';
import { get } from '../../lib/api';
import { UserContext } from '../../context/user';

const SMSForm = () => {
	const [input, setInput] = useState('');
	const [timer, setTimer] = useState('01:00');
	const timerRef = useRef(null);
	const [modal, setModal] = useState(false);
	const startTimerDate = useRef(new Date());
	const navigate = useNavigate();
	const tg = window.Telegram.WebApp;
	const user = useContext(UserContext);
	const sendWelcomeMessage = () => {
		get(`/users/sendWelcome`, { token: user.token });
	};
	const inputRef = useRef(null);

	useEffect(() => {
		timerRef.current = setInterval(() => {
			const dateNow = new Date();
			const diffInSeconds = Math.round((dateNow - startTimerDate.current) / 1000);
			const seconds = 60 - diffInSeconds;

			if (seconds < 0) {
				clearInterval(timerRef.current);
				console.log(timerRef);
				return;
			}
			let minutes = Math.floor(seconds / 60);
			let remainingSeconds = seconds % 60;
			let formattedMinutes = minutes.toString().padStart(2, '0');
			let formattedSeconds = remainingSeconds.toString().padStart(2, '0');
			setTimer(`${formattedMinutes}:${formattedSeconds}`);
		}, 500);

		return () => clearInterval(timerRef.current);
	}, []);

	return (
		<>
			{!modal && (
				<div className={styles.container}>
					<div className={styles.header}>
						<button
							onClick={() => {
								navigate(-1);
							}}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="27"
								height="27"
								viewBox="0 0 27 27"
								fill="none">
								<path
									d="M11.025 19.35L5.4 13.725L11.025 8.10001"
									stroke="black"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M21.375 14.475C21.7892 14.475 22.125 14.1392 22.125 13.725C22.125 13.3108 21.7892 12.975 21.375 12.975L21.375 14.475ZM6.075 14.475L21.375 14.475L21.375 12.975L6.075 12.975L6.075 14.475Z"
									fill="black"
								/>
							</svg>
						</button>
						Введите код
					</div>

					<form
						onSubmit={(e) => {
							e.preventDefault();
							if (input.length === 6) {
								sendWelcomeMessage();
								setModal(true);
							}
						}}>
						<Input
							label="Введите код из смс"
							value={input}
							onChange={(value) => {
								if (value.length <= 6 && !isNaN(value)) {
									setInput(value);
									if (value.length === 6) {
										inputRef.current.blur();
									}
								}
							}}
							inputRef={inputRef}
							className={styles.input}
							type="tel"
						/>

						<div className={styles.timer}>
							Повторно отправить код можно через <span>{timer}</span>
						</div>

						<Button className={styles.submitBtn} type="submit">
							Подтвердить
						</Button>
					</form>
				</div>
			)}

			<Modal active={modal}>
				<div className={`${styles.modalContainer} ${styles.active}`}>
					<div className={styles.modalContainerText}>Добро пожаловать в Проджекто</div>
					<Button
						onClick={() => {
							tg.close();
						}}
						className={styles.modalCloseBtn}>
						Закрыть
					</Button>
				</div>
			</Modal>
		</>
	);
};

export default SMSForm;
