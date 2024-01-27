import { useState } from 'react';
import Input from '../Input/Input';
import styles from './style.module.css';
import Button from '../Button/Button';
const SMSForm = () => {
	const [input, setInput] = useState('');
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<button>
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

			<form>
				<Input
					label="Введите код из смс"
					value={input}
					onChange={(value) => {
						setInput(value);
					}}
					className={styles.input}
				/>

				<div className={styles.timer}>
					Повторно отправить код можно через <span>01:00</span>
				</div>

				<Button className={styles.submitBtn} type="submit">
					Подтвердить
				</Button>
			</form>
		</div>
	);
};

export default SMSForm;
