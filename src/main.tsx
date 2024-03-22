import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from './App';

import './index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter  basename={import.meta.env.PROD ? '/react-memory-game' : ''}>
        <App />  
    </BrowserRouter>
);
