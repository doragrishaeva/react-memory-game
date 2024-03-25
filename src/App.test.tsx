import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

import { App } from '@/App';

describe('App Routing', () => {
	test('renders the main page by default', async () => {
		render(
			<MemoryRouter initialEntries={['/']}>
				<App />
			</MemoryRouter>
		);

		await waitFor(() =>
			expect(screen.getByTestId('main-page')).toBeInTheDocument()
		);
	});

	test('renders the game page for "/play" route', async () => {
		render(
			<MemoryRouter initialEntries={['/play']}>
				<App />
			</MemoryRouter>
		);

		await waitFor(() =>
			expect(screen.getByTestId('game-page')).toBeInTheDocument()
		);
	});

	test('renders the score page for "/score" route', async () => {
		render(
			<MemoryRouter initialEntries={['/score']}>
				<App />
			</MemoryRouter>
		);

		await waitFor(() =>
			expect(screen.getByTestId('score-page')).toBeInTheDocument()
		);
	});

	test('renders the settings page for "/settings" route', async () => {
		render(
			<MemoryRouter initialEntries={['/settings']}>
				<App />
			</MemoryRouter>
		);

		await waitFor(() =>
			expect(screen.getByTestId('settings-page')).toBeInTheDocument()
		);
	});

	test('navigates to the home page when the back button is clicked', async () => {
		render(
			<MemoryRouter initialEntries={['/play']}>
				<App />
			</MemoryRouter>
		);

		const backButton = await screen.findByTestId('back-button');
		userEvent.click(backButton);

		const mainPage = await screen.findByTestId('main-page');

		expect(mainPage).toBeInTheDocument();
	});
});
