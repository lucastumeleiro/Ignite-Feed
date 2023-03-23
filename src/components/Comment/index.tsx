import { useState } from 'react';
import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from '../Avatar';
import styles from './Comment.module.css';

interface CommentProps {
	id: number;
	content: string;
	onDeleteComment: (id: number) => void;
}

function Comment(props: CommentProps) {
	const { id, content, onDeleteComment } = props;
	const [likeCount, setlikeCount] = useState(0);

	function handleDeleteComment() {
		onDeleteComment(id);
	}

	function handleLikeComment() {
		setlikeCount(state => {
			return state + 1;
		});
	}

	return (
		<div className={styles.comment}>
			<Avatar hasBorder={false} src={'https://github.com/lucastumeleiro.png'} />

			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
					<header>
						<div className={styles.authorAndTime}>
							<strong>Lucas Tumeleiro</strong>
							<time title="20 de março de 2023" dateTime="2023-03-29 21:20:00">
								Cerca de 2h atrás
							</time>
						</div>
						<button onClick={handleDeleteComment} title="Deletar comentário">
							<Trash size={20} />
						</button>
					</header>
					<p>{content}</p>
				</div>

				<footer>
					<button onClick={handleLikeComment}>
						<ThumbsUp size={24} />
						Aplaudir
						<span>{likeCount}</span>
					</button>
				</footer>
			</div>
		</div>
	);
}

export { Comment };
