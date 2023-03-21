import styles from './Post.module.css';
import { Comment } from '../Comment';
import { Avatar } from '../Avatar';

function Post() {
	return (
		<article className={styles.post}>
			<header className={styles.postHeader}>
				<div className={styles.author}>
					<Avatar avatar={'https://github.com/lucastumeleiro.png'} />
					<div className={styles.authorInfo}>
						<strong>Lucas Tumeleiro</strong>
						<span>Frontend Developer</span>
					</div>
				</div>

				<time title="20 de março de 2023" dateTime="2023-03-29 21:20:00">
					Publicado há 1h
				</time>
			</header>

			<div className={styles.content}>
				<p>Fala galeraa 👋</p>
				<p>
					Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da
					Rocketseat. O nome do projeto é DoctorCare 🚀
				</p>
				<p>
					<a href="">#novoprojeto </a>
					<a href="">#nlw </a>
					<a href="">#rocketseat</a>
				</p>
			</div>

			<form className={styles.commentForm}>
				<strong>Deixe seu feedback</strong>
				<textarea placeholder="Deixe um comentário" />
				<footer>
					<button type="submit">Comentar</button>
				</footer>
			</form>

			<div className={styles.commentList}>
				<Comment />
				<Comment />
				<Comment />
			</div>
		</article>
	);
}

export { Post };
