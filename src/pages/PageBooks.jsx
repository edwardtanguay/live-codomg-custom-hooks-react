import { useFetch } from '../hooks/useFetch';

export const PageBooks = () => {
	const [techBooks, totalBooks] = useFetch(
		'https://edwardtanguay.netlify.app/share/techBooks.json'
	);
	const [employees, whatever, employeesAreLoading] = useFetch(
		'https://edwardtanguay.netlify.app/share/employees.json', true
	);
	const [flashcards, totalFlashcards, flashcardsAreLoading] = useFetch(
		'https://edwardtanguay.netlify.app/share/flashcards.json',
		true
	);

	return (
		<div className="page_books">
			<p>
				{employeesAreLoading ? (
					<p>Employees are loading...</p>
				) : (
					<p>
						Note: There are {employees.length} employees who have
						access to this page.
					</p>
				)}
			</p>
			{flashcardsAreLoading ? (
				<p>Flashcards are loading...</p>
			) : (
				<p>There are {totalFlashcards} flashcards about books.</p>
			)}
			<h2>There are {totalBooks} tech books.</h2>

			<ul>
				{techBooks.map((techBook, index) => {
					return <li key={index}>{techBook.title}</li>;
				})}
			</ul>
		</div>
	);
};
