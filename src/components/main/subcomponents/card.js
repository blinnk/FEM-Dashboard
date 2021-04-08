import '../../../styles/components.scss';
import upTrend from '../../../images/icon-up.svg';
import downTrend from '../../../images/icon-down.svg';

import { useContext } from 'react';

import { theme } from '../../../contexts/theme/theme';
import { ThemeContext } from '../../../contexts/theme/themeProvider';

const getStyles = (mode) => ({
	card: {
		backgroundColor: theme[mode].cardBg,
	},
	darkText: {
		color: theme[mode].darkText,
	},
	textColor: {
		color: theme[mode].textColor,
	},
});

const Card = ({ platform, icon, name, number, countDiff, trendDir, countType }) => {
	const { mode } = useContext(ThemeContext);
	const styles = getStyles(mode);

	function changeBackground(e) {
		e.target.style.background = theme[mode].cardHover;
		e.target.style.cursor = 'pointer';
	}

	function returnBackground(e) {
		e.target.style.background = theme[mode].cardBg;
	}

	return (
		<div
			className='card'
			style={styles.card}
			onMouseOver={changeBackground}
			onMouseOut={returnBackground}
		>
			<div className={`color__bar ${platform}`}></div>
			<div className='card__name'>
				<img src={icon} alt={icon} className='icon' />
				<span className='name' style={styles.textColor}>
					@{name}
				</span>
			</div>
			<div className='card__number'>
				<h1 className='number' style={styles.darkText}>
					{number}
				</h1>
				<p className='count-type' style={styles.textColor}>
					{countType}
				</p>
			</div>
			<div className={`card__trending ${trendDir}`}>
				<img
					src={trendDir === 'upTrend' ? `${upTrend}` : `${downTrend}`}
					alt={trendDir}
					className='trendir-icon'
				/>
				<span className='countDiff'>{countDiff} Today</span>
			</div>
		</div>
	);
};

export default Card;
