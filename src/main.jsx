import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Make sure your CSS file is properly imported // Import the App component
import { Routers } from './Router.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Routers /> {/* Render the App component */}
  </StrictMode>
);
