import { useContext } from 'react';

import OverviewCard from './subcomponents/overviewCard';
import './../../styles/components.scss';
import fb from './../../images/icon-facebook.svg';
import twitter from './../../images/icon-twitter.svg';
import ig from './../../images/icon-instagram.svg';
import yt from './../../images/icon-youtube.svg';

import { theme } from '../../contexts/theme/theme';
import { ThemeContext } from '../../contexts/theme/themeProvider';

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

const Overview = () => {
	const { mode } = useContext(ThemeContext);
	const styles = getStyles(mode);

	return (
		<div className='overview'>
			<div className='overview__grid'>
				<h1 className='title' style={styles.darkText}>Overview - Today</h1>
				<div className='overview__row'>
					<OverviewCard
						icon={fb}
						metricType={'Page Views'}
						number={'87'}
						trendDir={'upTrend'}
						percentageDiff={'3'}
					/>
					<OverviewCard
						icon={fb}
						metricType={'Likes'}
						number={'52'}
						trendDir={'downTrend'}
						percentageDiff={'2'}
					/>
					<OverviewCard
						icon={ig}
						metricType={'Likes'}
						number={'5462'}
						trendDir={'upTrend'}
						percentageDiff={'2257'}
					/>
					<OverviewCard
						icon={ig}
						metricType={'Profile Views'}
						number={'52k'}
						trendDir={'upTrend'}
						percentageDiff={'1375'}
					/>
				</div>
				<div className='overview__row'>
					<OverviewCard
						icon={twitter}
						metricType={'Retweets'}
						number={'117'}
						trendDir={'upTrend'}
						percentageDiff={'303'}
					/>
					<OverviewCard
						icon={twitter}
						metricType={'Likes'}
						number={'507'}
						trendDir={'upTrend'}
						percentageDiff={'553'}
					/>
					<OverviewCard
						icon={yt}
						metricType={'Likes'}
						number={'107'}
						trendDir={'downTrend'}
						percentageDiff={'19'}
					/>
					<OverviewCard
						icon={yt}
						metricType={'Total Views'}
						number={'1407'}
						trendDir={'downTrend'}
						percentageDiff={'12'}
					/>
				</div>
			</div>
		</div>
	);
};

export default Overview;
