import { useContext } from 'react';
import Toggle from 'react-toggle';

import './../../styles/components.scss';
import './../../styles/toggle.scss';

import { theme } from '../../contexts/theme/theme';
import { ThemeContext } from '../../contexts/theme/themeProvider';

const getStyles = (mode) => ({
	darkText: {
		color: theme[mode].darkText,
	},
	lightText: {
		color: theme[mode].textColor,
	},
	border: {
		backgroundColor: theme[mode].cardHover
	}
});

const Header = () => {
	const { mode, setMode } = useContext(ThemeContext);
	const styles = getStyles(mode);

	function changeTextColor(e) {
		e.currentTarget.previousSibling.style.color = theme[mode].darkText;
	}

	function returnTextColor(e) {
		e.currentTarget.previousSibling.style.color = theme[mode].textColor;
	}

	return (
		<div className='header'>
			<div className='group__left'>
				<h1 className='title' style={styles.darkText}>
					Social Media Dashboard
				</h1>
				<p className='total-followers' style={styles.lightText}>
					Total Followers: 224
				</p>
				<div className='border-bottom' style={styles.border}></div>
			</div>
			<div className='group__right'>
				<div className='mode__group' style={styles.lightText}>
					<span className='mode__type'>Dark </span>
					<span className='mode'>Mode</span>
				</div>
				<div
					className='toggle-wrapper'
					onMouseOver={changeTextColor}
					onMouseOut={returnTextColor}
				>
					<Toggle
						checked={mode === 'light' ? true : false}
						onChange={setMode}
						icons={false}
					/>
				</div>
			</div>
		</div>
	);
};

export default Header;
