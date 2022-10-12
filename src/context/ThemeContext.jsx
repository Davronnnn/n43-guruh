import { useState } from 'react';
import { createContext } from 'react';

export const ThemeContext = createContext(null);

export const ThemeContextProvider = (props) => {
	const [theme, setTheme] = useState(true);
	const value = {
		theme,
		setTheme,
	};

	return (
		<ThemeContext.Provider value={value}>
			{props.children}
		</ThemeContext.Provider>
	);
};
