
import Card from './subcomponents/card';
import '../../styles/components.scss';
import fb from '../../images/icon-facebook.svg';
import twitter from '../../images/icon-twitter.svg';
import ig from '../../images/icon-instagram.svg';
import yt from '../../images/icon-youtube.svg';


const Main = () => {


	return (
		<div className='main_row'>
			<Card
				icon={fb}
				platform={'facebook'}
				name={'nathanf'}
				number={'1978'}
				trendDir={'upTrend'}
				countDiff={'12'}
				countType={'Followers'}
			/>
			<Card
				icon={twitter}
				platform={'twitter'}
				name={'nathanf'}
				number={'1044'}
				trendDir={'upTrend'}
				countDiff={'99'}
				countType={'Followers'}
			/>
			<Card
				icon={ig}
				platform={'ig'}
				name={'realnathanf'}
				number={'11k'}
				trendDir={'upTrend'}
				countDiff={'1099'}
				countType={'Followers'}
			/>
			<Card
				icon={yt}
				platform={'yt'}
				name={'Nathan F.'}
				number={'8239'}
				trendDir={'downTrend'}
				countDiff={'144'}
				countType={'Subscribers'}
			/>
		</div>
	);
};

export default Main;
