import OverviewCard from './subcomponents/overviewCard';

const Overview = () => {
	return (
		<div className='overview'>
			<div className='overview__row'>
				<OverviewCard />
				<OverviewCard />
				<OverviewCard />
				<OverviewCard />
			</div>
			<div className='overview__row'>
				<OverviewCard />
				<OverviewCard />
				<OverviewCard />
				<OverviewCard />
			</div>
		</div>
	);
};

export default Overview;
