import styles from './style.module.css';
const Input = ({ label, value, onChange, placeholder, required, className, inputChildren, type }) => {
	return (
		<label className={`${styles.container} ${className}`}>
			{label && <span>{label}</span>}

			<input
			    type={type}
				value={value}
				onChange={(e) => {
					if (typeof onChange === 'function') onChange(e.target.value);
				}}
				placeholder={placeholder}
				required={required}
			/>
		</label>
	);
};

export default Input;
