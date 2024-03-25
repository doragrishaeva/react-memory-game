import React from 'react';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { ErrorModal, Game, Login, Finish } from '@/components';
import { CoreUtils } from '@/utils';
import { GameStore, SettingsStore, gameStore, settingsStore } from '@/stores';
import { GameStatus } from '@/models';

export const GamePage: React.FC = observer(() => {
	const { setUsername }: SettingsStore = settingsStore;
	const { gameStatus, moves, setGameStatus, resetGame }: GameStore =
		gameStore;

	const [showError, setShowError] = React.useState<boolean>(false);

	const navigate = useNavigate();

	const onSubmit = (login: string) => {
		if (!CoreUtils.isEmptyString(login)) {
			setGameStatus(GameStatus.InProgress);
			setUsername(login);
		} else {
			setShowError(true);
		}
	};

	const defineContent = () => {
		let content;
		switch (gameStatus) {
			case GameStatus.Login:
				content = <Login onSubmit={onSubmit} />;
				break;
			case GameStatus.InProgress:
				content = <Game />;
				break;
			case GameStatus.Win:
				content = (
					<Finish
						moves={moves}
						onPlayClick={() => resetGame()}
						onQuitClick={() => navigate('/')}
					/>
				);
				break;
			default:
				content = <div>Unknown status</div>;
		}
		return content;
	};

	React.useEffect(() => {
		if (showError) {
			setTimeout(() => {
				setShowError(false);
			}, 3000);
		}
	}, [showError]);

	const content = defineContent();

	return (
		<div
			className='w-screen h-screen overflow-hidden relative'
			data-testid='game-page'
		>
			<ErrorModal text='Please enter a username' show={showError} />

			{content}
		</div>
	);
});
