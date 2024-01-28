import { useState } from 'react';
import Input from '../../components/Input/Input';
import styles from './style.module.css';

const FormState = {
	card: '',
	name: '',
	recent: '',
	cvv: '',
	inn: '',
	kpp: '',
	companyName: '',
	region: '',
	punkt: '',
	street: '',
	index: '',
	house: '',
};
const InputFields = ({ variant = 1 }) => {
	const [formState, setFormState] = useState(FormState);
	const onChangeCard = () => {
		const form = { ...formState };
	};

	const onChangeName = (value) => {
		const form = { ...formState };
		form.name = value.toUpperCase();
		setFormState(form);
	};

	const onChangeCVV = (value) => {
		if (value.length <= 3) {
			const form = { ...formState };
			form.cvv = value;
			setFormState(form);
		}
	};

	const onChangeRecent = (value) => {
		const form = { ...formState };
		const recent = value.replace(/\D/g, '');
		if (recent.length === 1) {
			form.recent = recent;
			setFormState(form);
			return;
		}

		if (recent.length === 2) {
			form.recent = `${recent}/`;
			setFormState(form);
			return;
		}

		if (recent.length >= 3 && recent.length <= 4) {
			form.recent = `${recent.slice(0, 2)}/${recent.slice(2, 4)}`;
			setFormState(form);
			return;
		}
	};

	const onBackSpaceRecent = (e) => {
		const form = { ...formState };
		if (e.keyCode === 8) {
			if (form.recent.length === 3) {
				form.recent = form.recent.slice(0, 2);
				setFormState(form);
				return;
			}

			if (form.recent.length === 1) {
				form.recent = '';
				setFormState(form);
				return;
			}
		}
	};
	if (variant === 1) {
		return (
			<div className={styles.inputFields}>
				<Input
					className={styles.inputField}
					type="tel"
					value={formState.card}
					label="Номер карты"
				/>
				<Input
					className={styles.inputField}
					value={formState.name}
					onChange={onChangeName}
					label="Фамилия и имя владельца карты"
				/>

				<div className={styles.doubleInputs}>
					<Input
						value={formState.recent}
						onChange={onChangeRecent}
						className={styles.inputField}
						onKeyDown={onBackSpaceRecent}
						type="tel"
						label={'Срок действия'}
					/>
					<Input
						value={formState.cvv}
						className={styles.inputField}
						onChange={onChangeCVV}
						label={'CVV / CVC'}
						type={'password'}
					/>
				</div>
			</div>
		);
	} else {
		return (
			<div className={styles.inputFields}>
				<Input className={styles.inputField} type="tel" label="ИНН" value={''} />
				<Input className={styles.inputField} type="tel" label="КПП" value={''} />
				<Input className={styles.inputField} label="Наименование" value={''} />

				<div className={styles.address}>Юридический адрес</div>

				<Input className={styles.inputField} label="Регион" value={''} />
				<Input className={styles.inputField} label="Пункт" value={''} />
				<Input className={styles.inputField} label="Улица" value={''} />

				<div className={styles.doubleInputs}>
					<Input className={styles.inputField} label="Индекс" value={''} />
					<Input className={styles.inputField} type="tel" label="Дом" value={''} />
				</div>
			</div>
		);
	}
};

export default InputFields;
