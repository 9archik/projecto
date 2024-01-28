import { useState, useRef, useEffect } from 'react';
import Input from '../Input/Input';
import styles from './style.module.css';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import { useNavigate } from 'react-router-dom';
const SMSForm = () => {
	const [input, setInput] = useState('');
	const [timer, setTimer] = useState('01:00');
	const timerRef = useRef(null);
	const [modal, setModal] = useState(false);
	const startTimerDate = useRef(new Date());
	const navigate = useNavigate();

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
						<button onClick={() => {
							navigate(-1)
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
								setModal(true);
							}
						}}>
						<Input
							label="Введите код из смс"
							value={input}
							onChange={(value) => {
								if (value.length <= 6 && !isNaN(value)) setInput(value);
							}}
							className={styles.input}
							type="number"
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
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="80"
						height="80"
						viewBox="0 0 80 80"
						fill="none">
						<path
							d="M35 53.535L22.5 41.0325L26.0325 37.5L35 46.465L53.9625 27.5L57.5 31.0375L35 53.535Z"
							fill="#0085E2"
						/>
						<path
							d="M40 5C33.0777 5 26.3108 7.05271 20.5551 10.8986C14.7993 14.7444 10.3133 20.2107 7.66423 26.6061C5.01516 33.0015 4.32205 40.0388 5.67253 46.8282C7.02301 53.6175 10.3564 59.8539 15.2513 64.7487C20.1461 69.6436 26.3825 72.977 33.1719 74.3275C39.9612 75.678 46.9985 74.9848 53.3939 72.3358C59.7893 69.6867 65.2556 65.2007 69.1015 59.445C72.9473 53.6892 75 46.9223 75 40C75 30.7174 71.3125 21.815 64.7487 15.2513C58.185 8.68749 49.2826 5 40 5ZM40 70C34.0666 70 28.2664 68.2405 23.3329 64.9441C18.3994 61.6476 14.5543 56.9623 12.2836 51.4805C10.013 45.9987 9.4189 39.9667 10.5765 34.1473C11.734 28.3279 14.5912 22.9824 18.7868 18.7868C22.9824 14.5912 28.3279 11.734 34.1473 10.5764C39.9667 9.41888 45.9987 10.013 51.4805 12.2836C56.9623 14.5542 61.6477 18.3994 64.9441 23.3329C68.2405 28.2664 70 34.0666 70 40C70 47.9565 66.8393 55.5871 61.2132 61.2132C55.5871 66.8393 47.9565 70 40 70Z"
							fill="#0085E2"
						/>
					</svg>
					<div className={styles.modalContainerText}>Регистрация успешно заверешена</div>
					<Button
						onClick={() => {
							setModal(false);
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
