import React from 'react';
import Toggle from 'react-toggle';

import './../../styles/components.scss';
import './../../styles/toggle.scss';

const Header = () => {
	return (
		<div className='header'>
			<div className='group__left'>
				<h1 className='title'>Social Media Dashboard</h1>
				<p className='total-followers'>Total Followers: 224</p>
			</div>
			<div className='group__right'>
				<div className='mode__group'>
					<span className='mode__type'>Dark </span>
					<span className='mode'>Mode</span>
				</div>
				<Toggle />
			</div>
		</div>
	);
};

export default Header;
