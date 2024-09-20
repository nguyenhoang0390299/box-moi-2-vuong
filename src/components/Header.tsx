import React from 'react';
import MetaLogo from '@assets/facebook-icon.png';
const Header: React.FC = () => {
	return (
		<div className='sticky flex items-center gap-2 left-0 right-0 top-0 h-12 bg-gray-200 px-4 py-1'>
			<img src={MetaLogo} alt='' className='h-full' />
			<b>Help Center</b>
		</div>
	);
};

export default Header;
