export const PageUseToggle = () => {
	const [userIsOnline, toggleUserIsOnline] = useToggle(false);

	return (
		<>
			<h2>useToggle</h2>
			{userIsOnline ? (
				<p>User is currently online.</p>
			) : (
				<p>User is logged out.</p>
			)}
			<button onClick={() => toggleUserIsOnline()}>
				Toggle online status
			</button>
		</>
	);
};
