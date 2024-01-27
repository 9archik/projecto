import styles from './style.module.css';
const Header = () => {
	return (
		<header className={`container ${styles.container}`}>
			<span className={styles.logo}>Logo</span>
			<span className={styles.text}>Projecto</span>
		</header>
	);
};

export default Header;
