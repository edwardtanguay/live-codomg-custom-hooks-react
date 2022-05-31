export const useToggle = (state) => {
	const func = () => {
		console.log('in the func');
	}
	return [false, func ]
};