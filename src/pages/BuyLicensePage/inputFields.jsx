import Input from '../../components/Input/Input';
import styles from './style.module.css';
const InputFields = ({ variant = 1 }) => {
	if (variant === 1) {
		return (
			<div className={styles.inputFields}>
				<Input className={styles.inputField} label="Номер карты" value={''} />
				<Input className={styles.inputField} label="Фамилия и имя владельца карты" value={''} />

				<div className={styles.doubleinputs}>
					<Input className={styles.inputField} label={'Срок действия'} value={''} />
					<Input className={styles.inputField} label={'CVV / CVC'} value={''} type={'password'} />
				</div>
			</div>
		);
	} else {
		return (
			<div>
				<Input className={styles.inputField} label="ИНН" value={''} />
				<Input className={styles.inputField} label="КПП" value={''} />
				<Input className={styles.inputField} label="Наименование" value={''} />

				<div className={styles.address}>Юридический адрес</div>

				<Input className={styles.inputField} label="Регион" value={''} />
				<Input className={styles.inputField} label="Пункт" value={''} />
				<Input className={styles.inputField} label="Улица" value={''} />

				<div className={styles.doubleInputs}>
					<Input className={styles.inputField} label="Индекс" value={''} />
					<Input className={styles.inputField} label="Дом" value={''} />
				</div>
			</div>
		);
	}
};

export default InputFields;
