import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_API || 'http://localhost:3001'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)