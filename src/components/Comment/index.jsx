import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from '../Avatar';
import styles from './Comment.module.css';

function Comment() {
	return (
		<div className={styles.comment}>
			<Avatar hasBorder={false} avatar={'https://github.com/lucastumeleiro.png'} />

			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
					<header>
						<div className={styles.authorAndTime}>
							<strong>Lucas Tumeleiro</strong>
							<time title="20 de março de 2023" dateTime="2023-03-29 21:20:00">
								Cerca de 2h atrás
							</time>
						</div>
						<button title="Deletar comentário">
							<Trash size={20} />
						</button>
					</header>
					<p>Muito bom, parabéns!! 👏👏</p>
				</div>

				<footer>
					<button>
						<ThumbsUp size={24} />
						Aplaudir
						<span>20</span>
					</button>
				</footer>
			</div>
		</div>
	);
}

export { Comment };
