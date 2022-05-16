import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from '../dashboard';
import Verify from '../verify/Verify';
import Report from '../report';
import Tracking from '../tracking/Tracking';
import Maintenance from '../maintenance/Maintenance';
// import Maintenance from './maintenance/Maintenance';



export default function MyRoutes() {
  return (
    <BrowserRouter>
			<Routes>
				<Route path="dashboard" element={<Dashboard />} />
				<Route path="/" element={<Verify />} />
				<Route path="verify" element={<Verify />} />
				<Route path="report" element={<Report />} />
				<Route path="tracking" element={<Tracking />} />
				<Route path="maintenance" element={<Maintenance />} />
			</Routes>
	
	</BrowserRouter>
  )
}
