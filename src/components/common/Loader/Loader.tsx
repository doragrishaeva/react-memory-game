import React from 'react';
import { BallTriangle } from 'react-loader-spinner';

export const Loader: React.FC = () => {
	return (
		<BallTriangle
			height={100}
			width={100}
			radius={5}
			color='#000000'
			ariaLabel='ball-triangle-loading'
			wrapperStyle={{}}
			wrapperClass='flex justify-center items-center w-screen h-screen'
			visible={true}
		/>
	);
};
