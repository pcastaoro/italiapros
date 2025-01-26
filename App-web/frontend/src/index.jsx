import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';

// Create the root of the React application and link it to the HTML element with the ID 'root'.
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the application with routing support and strict mode enabled.
root.render(
    <React.StrictMode>
        {/* BrowserRouter enables client-side routing for the application */}
        <BrowserRouter>
            {/* AppRoutes handles the definition and rendering of all routes */}
            <AppRoutes />
        </BrowserRouter>
    </React.StrictMode>
);