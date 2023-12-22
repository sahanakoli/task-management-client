import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider
} from "react-router-dom";
import './index.css'
import router from './Routes/Routes';
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import AuthProvider from './provider/AuthProvider';
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <div className='max-w-7xl mx-auto'>
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
