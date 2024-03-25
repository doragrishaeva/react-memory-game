import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { RadioButton } from './RadioButton';

describe('RadioButton Component', () => {
	const mockOnClick = jest.fn();

	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('renders unchecked state correctly', () => {
		const { container } = render(
			<RadioButton checked={false} onClick={mockOnClick}>
				Unchecked
			</RadioButton>
		);
		const uncheckedRadioButton = container.querySelector('.bg-transparent');
		expect(uncheckedRadioButton).toBeInTheDocument();
	});

	it('renders checked state correctly', () => {
		const { container } = render(
			<RadioButton checked={true} onClick={mockOnClick}>
				Checked
			</RadioButton>
		);
		const radioButton = container.querySelector('.bg-text');
		expect(radioButton).toBeInTheDocument();
	});
});
