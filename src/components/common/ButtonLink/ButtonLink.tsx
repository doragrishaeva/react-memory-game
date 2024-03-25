import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components';

interface IButtonLink {
	to: string;
	children: React.ReactNode;
}

export const ButtonLink: React.FC<IButtonLink> = ({ to, children }) => {
	const navigate = useNavigate();

	return <Button onClick={() => navigate(to)}>{children}</Button>;
};
