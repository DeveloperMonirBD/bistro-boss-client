import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import AuthProvider from './providers/AuthProvider';
import { router } from './Routes/Routes';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AuthProvider>
            <div className="max-w-screen-xl mx-auto px-3">
                <RouterProvider router={router} />
            </div>
        </AuthProvider>
    </StrictMode>
);
