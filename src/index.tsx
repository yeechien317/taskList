import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import { AlertProvider } from './context/AlertContext';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <AuthProvider>
            <AlertProvider>
                <App />
            </AlertProvider>
        </AuthProvider>
    </React.StrictMode>
);
