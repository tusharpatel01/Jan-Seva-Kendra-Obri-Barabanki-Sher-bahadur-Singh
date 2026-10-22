import React from 'react';import {createRoot} from 'react-dom/client';
import App from './App';import {LangProvider} from './hooks/useLang';import './index.css';
createRoot(document.getElementById('root')).render(<LangProvider><App/></LangProvider>);
