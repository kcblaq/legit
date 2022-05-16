import React, { useState } from 'react';
import { Box } from '@mui/material';
import './App.css';
import Nav from './layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './dashboard';
import Verify from './verify/Verify';
import Report from './report';
import Tracking from './tracking/Tracking';
import Maintenance from './maintenance/Maintenance';
import LeftPane from '../src/leftpane/LeftPane';
import { matchRoutes, useParams, useLocation, Outlet } from 'react-router-dom';
import Test from './test/Test';
import Wrapper from './Wrapper';
import MyRoutes from './routes/routes';


function App() {
	return (
<>
    <MyRoutes />
    

		
    
    </>	);
}

export default App;
