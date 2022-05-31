import { useState } from 'react';

export const useToggle = (_value) => {
	const [value, setValue] = useState(_value);
	const func = () => {
		console.log('in the func');
	}
	return [value, func ]
};