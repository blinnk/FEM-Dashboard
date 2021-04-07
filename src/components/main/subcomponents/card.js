import '../../../styles/components.scss';
import upTrend from '../../../images/icon-up.svg';
import downTrend from '../../../images/icon-down.svg';

const Card = ({ platform, icon, name, number, countDiff, trendDir, countType }) => {
	return (
		<div className='card'>
			<div className={`color__bar ${platform}`}></div>
			<div className='card__name'>
				<img src={icon} alt={icon} className='icon' />
				<span className='name'>@{name}</span>
			</div>
			<div className='card__number'>
				<h1 className='number'>{number}</h1>
				<p className='count-type'>{countType}</p>
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
