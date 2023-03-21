import styles from './Avatar.module.css';

function Avatar(props) {
	const { avatar, hasBorder = true } = props;
	return <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} src={avatar} />;
}

export { Avatar };
