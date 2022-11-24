import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import App from './App';
import AuthProvider from './contexts/AuthProvider';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    {/* <QueryClientProvider client={queryClient}> */}
      <AuthProvider>
        <App />
        <Toaster />
      </AuthProvider>
    {/* </QueryClientProvider> */}
  </React.StrictMode>
  

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
