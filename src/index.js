import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './dashboard';
import Verify from './verify/Verify';
import Report from './report';
import Tracking from './tracking/Tracking';
import Maintenance from './maintenance/Maintenance';
import Wrapper from './Wrapper';
import { Box } from '@mui/material';
import LeftPane from './leftpane/LeftPane';
import Nav from './layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
		<App/>
	// <BrowserRouter>
	// 		<Routes>
	// 			<Route path="dashboard" element={<Dashboard />} />
	// 			<Route path="/" element={<Verify />} />
	// 			<Route path="verify" element={<Verify />} />
	// 			<Route path="report" element={<Report />} />
	// 			<Route path="tracking" element={<Tracking />} />
	// 			<Route path="maintenance" element={<Maintenance />} />
	// 		</Routes>
	
	// </BrowserRouter>
);

reportWebVitals();
