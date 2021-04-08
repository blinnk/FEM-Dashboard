import { useContext } from 'react';

import { Header, Main, Overview } from './components';
import './styles/base.scss';

import { theme } from './contexts/theme/theme';
import { ThemeContext } from './contexts/theme/themeProvider';

const getStyles = (mode) => ({
	app: {
		backgroundColor: theme[mode].bg,
		color: theme[mode].textColor,
	},
	bgPattern: {
		backgroundColor: theme[mode].bgPattern,
	},
});

function App() {
	const { mode } = useContext(ThemeContext);
	const styles = getStyles(mode);

	return (
		<div className='body'>
			<div className='app' style={styles.app}>
			<div className='app__bg-pattern' style={styles.bgPattern}></div>
				<Header />
				<Main />
				<Overview />
			</div>
		</div>
	);
}

export default App;
