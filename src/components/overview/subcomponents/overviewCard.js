import downTrend from '../../../images/icon-down.svg';
import upTrend from '../../../images/icon-up.svg';
import fb from '../../../images/icon-facebook.svg';
import twitter from '../../../images/icon-twitter.svg';
import ig from '../../../images/icon-instagram.svg';
import yt from '../../../images/icon-youtube.svg';

const OverviewCard = () => {
	return (
		<div className='overview__card'>
			<div className='overview__card-row'>
				<span className='type'>Page Views</span>
				<img src={fb} alt='' />
			</div>
			<div className='overview__card-row'>
				<span className='value'>89</span>
				<span className='trending'>
					<img src={downTrend} alt='' />
					<div className='card__trending'>
						<img src={downTrend} alt='' className='icon' />
						<span className='today'>52%</span>
					</div>
				</span>
			</div>
		</div>
	);
};

export default OverviewCard;
