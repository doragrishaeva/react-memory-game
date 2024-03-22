import React from 'react';

interface IBackButton {
    onClick: () => void;
}

export const BackButton: React.FC<IBackButton> = ({ onClick }) => {
    return <div className='back-icon' onClick={onClick}></div>;
};