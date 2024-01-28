import styles from './style.module.css';
const Modal = ({ active, children }) => {
	return <div className={`${styles.container} ${active && styles.active}`}>{children}</div>;
};

export default Modal;
