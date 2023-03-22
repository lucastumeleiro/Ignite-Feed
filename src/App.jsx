import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './global.css';
import styles from './App.module.css';

import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post, posts } from './components/Post';

function App() {
	return (
		<>
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="colored"
			/>
			<Header />
			<div className={styles.wrapper}>
				<Sidebar />
				<main>
					{posts?.map(post => {
						return (
							<Post
								key={post.id}
								author={post.author}
								content={post.content}
								publishedAt={post.publishedAt}
							/>
						);
					})}
				</main>
			</div>
		</>
	);
}

export default App;
