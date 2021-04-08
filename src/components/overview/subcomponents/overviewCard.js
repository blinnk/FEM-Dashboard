import { useContext } from 'react';

import downTrend from '../../../images/icon-down.svg';
import upTrend from '../../../images/icon-up.svg';
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

const OverviewCard = ({ metricType, icon, number, trendDir, percentageDiff }) => {
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
			className='overview__card'
			style={styles.card}
			onMouseOver={changeBackground}
			onMouseLeave={returnBackground}
		>
			<div className='overview__card-row'>
				<span className='type' style={styles.textColor}>
					{metricType}
				</span>
				<img src={icon} alt={icon} className='icon' />
			</div>
			<div className='overview__card-row'>
				<span className='number' style={styles.darkText}>
					{number}
				</span>
				<div className='trending'>
					<div className={`card__trending ${trendDir}`}>
						<img
							src={trendDir === 'upTrend' ? `${upTrend}` : `${downTrend}`}
							alt={trendDir}
							className='trendir-icon'
						/>
						<span className='trend-number'>{percentageDiff}%</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OverviewCard;
