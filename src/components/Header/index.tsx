import styles from './Header.module.css';

import igniteLogo from '../../assets/svg/ignitelogo.svg';

function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<img src={igniteLogo} alt="logotipo ignite feed" />
				<span>Ignite Feed</span>
			</div>
		</header>
	);
}

export { Header };
