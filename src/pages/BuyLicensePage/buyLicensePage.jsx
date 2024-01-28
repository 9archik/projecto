import { useEffect, useLayoutEffect, useState } from 'react';
import Button from '../../components/Button/Button';
import InputFields from './inputFields';
import styles from './style.module.css';
import Select from '../../components/Select/Select';

const variants = ['1-100', '101-200', '201-300'];

const BuyLicensePage = () => {
	const [selectValue, setSelectValue] = useState(0);

	const [faceValue, setFaceValue] = useState(1);

	const [typePayment, setTypePayment] = useState(1);

	useEffect(() => {
		document.body.style.background = "white"
	})

	return (
		<>
			<header className={`container ${styles.header}`}>
				<button>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="27"
						height="27"
						viewBox="0 0 27 27"
						fill="none">
						<path
							d="M11.025 19.35L5.39999 13.725L11.025 8.09998"
							stroke="black"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M21.375 14.475C21.7892 14.475 22.125 14.1392 22.125 13.725C22.125 13.3108 21.7892 12.975 21.375 12.975L21.375 14.475ZM6.07501 14.475L21.375 14.475L21.375 12.975L6.07501 12.975L6.07501 14.475Z"
							fill="black"
						/>
					</svg>
				</button>
				Пробная лицензия
			</header>

			<form className={`container ${styles.forms}`}>
				<div className={`${styles.nameField} ${styles.user}`}>Выберите кол-во пользователей:</div>
				<Select variants={variants} value={selectValue} setValue={setSelectValue} />

				<div className={styles.payInfo}>
					<span className={styles.nameField}>Дата оплаты:</span>
					<span className={styles.fieldValue}>25.02.2024</span>
				</div>

				<div style={{ margin: '4px 0 0 0' }} className={styles.payInfo}>
					<span className={styles.nameField}>Цена:</span>
					<span className={styles.fieldValue}>380 ₽</span>
				</div>

				<div className={styles.boldNameField}>Выберите тип контрагента</div>

				<div className={styles.faceRadio}>
					<label>
						<input
							defaultChecked
							onChange={() => {
								setFaceValue(1);
								setTypePayment(1);
							}}
							type={'radio'}
							name="face"
							value="1"
						/>
						<span>Физлицо</span>
					</label>

					<label>
						<input
							type={'radio'}
							name="face"
							value="2"
							onChange={() => {
								setFaceValue(2);
							}}
						/>
						<span>Юрлицо</span>
					</label>
				</div>

				<div className={styles.boldNameField}>Выберите способ оплаты</div>

				<div className={styles.paymentValues}>
					<label>
						<input
							onChange={() => {
								setTypePayment(1);
							}}
							defaultChecked
							checked={typePayment === 1}
							type="radio"
							name="payment"
							value="1"
						/>
						<span>Картой</span>
					</label>

					{faceValue === 2 && (
						<label>
							<input
								onChange={() => {
									setTypePayment(2);
								}}
								checked={typePayment === 2}
								name="payment"
								type="radio"
								value="2"
							/>
							<span>По реквизитам</span>
						</label>
					)}

					<label>
						<input
							onChange={() => {
								setTypePayment(3);
							}}
							checked={typePayment === 3}
							name="payment"
							type="radio"
							value="3"
						/>
						<span>Robokassa</span>
					</label>
				</div>

				<InputFields variant={typePayment === 2 ? 2 : 1} />

				<div className={styles.formFooter}>
					<Button>Готово</Button>
					<div className={styles.questions}>
						Остались вопросы? <span>Пригласить менеджера</span>{' '}
					</div>
				</div>
			</form>
		</>
	);
};

export default BuyLicensePage;
