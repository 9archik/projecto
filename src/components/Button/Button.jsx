
import styles from './style.module.css';

const Button = ({ onClick, className, children, type }) => {
	return (
		<button
		    type={type}
			className={`${className} ${styles.button}`}
			onClick={() => {
				if (typeof onClick === 'function') {
					onClick();
				}
			}}>
			{children}
		</button>
	);
};

export default Button;
