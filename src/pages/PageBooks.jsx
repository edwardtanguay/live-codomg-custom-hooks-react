import { useFetch } from '../hooks/useFetch';

export const PageBooks = () => {
	const [techBooks] = useFetch(
		'https://edwardtanguay.netlify.app/share/techBooks.json'
	);
	const [employees] = useFetch('https://edwardtanguay.netlify.app/share/employees.json');
	const [flashcards] = useFetch('https://edwardtanguay.netlify.app/share/flashcards.json');

	return (
		<div className="page_books">
			<p>Note: There are {employees.length} employees who have access to this page.</p>
			<p>There are {flashcards.length} flashcards about books.</p>
			<h2>There are {techBooks.length} tech books.</h2>

			<ul>
				{techBooks.map((techBook, index) => {
					return <li key={index}>{techBook.title}</li>;
				})}
			</ul>
		</div>
	);
};
