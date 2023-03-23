import { useState } from 'react';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import styles from './Post.module.css';

import { Avatar } from '../Avatar';
import { Comments, CommentsPost } from './Comments';

const posts: PostProps[] = [
	{
		id: 1,
		author: {
			avatarUrl: 'https://github.com/lucastumeleiro.png',
			name: 'Lucas Tumeleiro',
			role: 'Dev frontend',
		},
		content: [
			{ type: 'paragraph', content: 'Fala galeraa 👋' },
			{
				type: 'paragraph',
				content:
					'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
			},
			{ type: 'link', content: '#novoprojeto' },
			{ type: 'link', content: '#nlw' },
			{ type: 'link', content: '#rocketseat' },
		],
		publishedAt: new Date(),
	},
	{
		id: 2,
		author: {
			avatarUrl: 'https://github.com/lucastumeleiro.png',
			name: 'Lucas Tumeleiro',
			role: 'Dev backend',
		},
		content: [
			{ type: 'paragraph', content: 'Fala galeraa 👋' },
			{
				type: 'paragraph',
				content:
					'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
			},
			{ type: 'link', content: '#novoprojeto' },
			{ type: 'link', content: '#nlw' },
			{ type: 'link', content: '#rocketseat' },
		],
		publishedAt: new Date(),
	},
];

interface Author {
	name: string;
	role: string;
	avatarUrl: string;
}

interface Post {}

interface PostContent {
	type: 'paragraph' | 'link';
	content: string;
}

interface PostProps {
	id: number;
	author: Author;
	publishedAt: Date;
	content: PostContent[];
}

function Post(props: PostProps) {
	const { id, author, content, publishedAt } = props;
	const [comments, setComments] = useState<CommentsPost[]>([]);

	const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm", { locale: ptBR });
	const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, { locale: ptBR, addSuffix: true });

	return (
		<article className={styles.post}>
			<header className={styles.postHeader}>
				<div className={styles.author}>
					<Avatar src={author.avatarUrl} />
					<div className={styles.authorInfo}>
						<strong>{author.name}</strong>
						<span>{author.role}</span>
					</div>
				</div>

				<time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
					{publishedDateRelativeToNow}
				</time>
			</header>

			<div className={styles.content}>
				{content?.map(line => {
					if (line.type === 'paragraph') {
						return <p key={line.content}>{line.content}</p>;
					} else if (line.type === 'link') {
						return (
							<span key={line.content}>
								<a href="#">{line.content}</a>{' '}
							</span>
						);
					}
				})}
			</div>

			<Comments comments={comments} setComments={setComments} postId={id} />
		</article>
	);
}

export { Post, posts };
