import { useFetch } from '../hooks/useFetch';

export const PageBooks = () => {
	const [techBooks] = useFetch('https://edwardtanguay.netlify.app/share/techBooks.json');

	return (
		<div className="page_books">
			<h2>There are {techBooks.length} tech books.</h2>
		</div>
	)
}