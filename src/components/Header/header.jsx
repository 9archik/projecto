import styles from './style.module.css';
const Header = () => {
	return (
		<header className={`container ${styles.container}`}>
			<span className={styles.text}>Projecto - управление делами</span>
		</header>
	);
};

export default Header;
