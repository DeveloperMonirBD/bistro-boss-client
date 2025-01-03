import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import AuthProvider from './providers/AuthProvider';
import { router } from './Routes/Routes';

// tanstack query 
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AuthProvider>
            <QueryClientProvider client={queryClient}>
                <div className="max-w-screen-xl mx-auto px-3">
                    <RouterProvider router={router} />
                </div>
            </QueryClientProvider>
        </AuthProvider>
    </StrictMode>
);
