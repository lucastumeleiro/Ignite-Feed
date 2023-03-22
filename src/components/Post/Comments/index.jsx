import { useState } from 'react';

import styles from '../Post.module.css';

import { Comment } from '../../Comment';
import { Toast, ToastType } from '../../Toast';

function Comments(props) {
	const { comments, setComments } = props;
	const [comment, setComment] = useState('');

	function handleCreateNewComment(e) {
		e.preventDefault();
		if (comment.length <= 0) {
			Toast('Área de comentário vazia!', ToastType.ERROR);
			return;
		}
		setComments([...comments, comment]);
		setComment('');
	}

	return (
		<>
			<form className={styles.commentForm}>
				<strong>Deixe seu feedback</strong>
				<textarea
					placeholder="Deixe um comentário"
					value={comment}
					onChange={e => setComment(e.target.value)}
				/>
				<footer>
					<button type="submit" onClick={handleCreateNewComment}>
						Comentar
					</button>
				</footer>
			</form>

			<div className={styles.commentList}>
				{comments?.map(comment => {
					return <Comment key={comment} content={comment} />;
				})}
			</div>
		</>
	);
}

export { Comments };
