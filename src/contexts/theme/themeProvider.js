import { useState, createContext } from 'react';

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
	const [mode, setMode] = useState('dark');
	return (
		<ThemeContext.Provider
			value={{
				mode,
				setMode: () => setMode(mode === 'light' ? 'dark' : 'light'),
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
