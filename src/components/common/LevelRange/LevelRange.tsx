import React from 'react';

import { Level, LevelRangeSize } from '@/models';
import { Star } from '@/components';
import { LEVEL_RANGE_SIZE } from '@/constants';

interface ILevelRange {
	level: Level;
	dynamic: boolean;
	size: LevelRangeSize;
	onClick?: (level: Level) => void;
}

export const LevelRange: React.FC<ILevelRange> = ({
	level,
	dynamic = false,
	size,
	onClick
}) => {
	const [hoveredLevel, setHoveredLevel] = React.useState<Level | null>(null);

	const levelToInt = parseInt(level, 10);

	const handleMouseEnter = (newLevel: Level) => {
		if (dynamic) {
			setHoveredLevel(newLevel);
		}
	};

	const handleMouseLeave = () => {
		if (dynamic) {
			setHoveredLevel(null);
		}
	};

	const handleClick = (newLevel: Level) => {
		if (dynamic && onClick) {
			onClick(newLevel);
		}
	};

	const isFilled = (index: number) => {
		const hoveredLevelInt = hoveredLevel
			? parseInt(hoveredLevel, 10)
			: null;
		return dynamic
			? hoveredLevelInt !== null
				? index <= hoveredLevelInt
				: index <= levelToInt
			: index <= levelToInt;
	};

	return (
		<div className='flex justify-center'>
			{Object.values(Level).map((value, index) => (
				<Star
					key={index}
					filled={isFilled(index + 1)}
					onMouseEnter={() => handleMouseEnter(value)}
					onMouseLeave={handleMouseLeave}
					onClick={() => handleClick(value)}
					style={LEVEL_RANGE_SIZE[size]}
				/>
			))}
		</div>
	);
};
