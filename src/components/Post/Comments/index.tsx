import { Dispatch, FormEvent, SetStateAction, useState } from 'react';

import styles from '../Post.module.css';

import { Comment } from '../../Comment';
import { Toast, ToastType } from '../../Toast';

export interface CommentsPost {
	id: number;
	content: string;
}

interface CommentsProps {
	comments: CommentsPost[];
	setComments: Dispatch<SetStateAction<CommentsPost[]>>;
	postId: number;
}

function Comments(props: CommentsProps) {
	const { comments, setComments, postId } = props;
	const [commentText, setCommentText] = useState('');

	const isNewCommentEmpty = commentText.length <= 0;

	function handleCreateNewComment(e: FormEvent) {
		e.preventDefault();
		if (commentText.length <= 5) {
			Toast('Área de comentário deve conter mais de 5 caracteres!', ToastType.ERROR);
			return;
		}

		const idComment = parseInt(String(postId) + String(comments.length + 1));

		setComments([...comments, { id: idComment, content: commentText }]);
		setCommentText('');
	}

	function deleteComment(id: number) {
		const commentsWithoutDeletedOne = comments.filter(comment => {
			return comment.id !== id;
		});

		setComments(commentsWithoutDeletedOne);
	}

	return (
		<>
			<form className={styles.commentForm}>
				<strong>Deixe seu feedback</strong>
				<textarea
					placeholder="Deixe um comentário"
					value={commentText}
					onChange={e => setCommentText(e.target.value)}
				/>
				<footer>
					<button type="submit" onClick={handleCreateNewComment} disabled={isNewCommentEmpty}>
						Comentar
					</button>
				</footer>
			</form>

			<div className={styles.commentList}>
				{comments?.map(comment => {
					return (
						<Comment
							key={comment.id}
							id={comment.id}
							content={comment.content}
							onDeleteComment={deleteComment}
						/>
					);
				})}
			</div>
		</>
	);
}

export { Comments };
