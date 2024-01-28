import styles from './style.module.css';
const Input = ({
	label,
	value,
	onChange,
	placeholder,
	required,
	className,
	inputChildren,
	type,
	onKeyDown,
	ref
}) => {
	return (
		<label className={`${styles.container} ${className}`}>
			{label && <span>{label}</span>}

			<input
				type={type}
				value={value}
				ref={ref}
				onChange={(e) => {
					if (typeof onChange === 'function') onChange(e.target.value);
				}}
				onKeyDown={(e) => {
					if (typeof onKeyDown === 'function') onKeyDown(e);
				}}
				placeholder={placeholder}
				required={required}
			/>
		</label>
	);
};

export default Input;
