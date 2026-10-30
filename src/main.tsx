import { createRoot } from 'react-dom/client';
import './index.css';
import App from './app';

// No <React.StrictMode>: `oud` creates a global WebGL renderer in componentDidMount and never
// cleans it up, so StrictMode's double mount in dev leaves two canvases and two render loops.
createRoot(document.getElementById('root')!).render(<App />);
