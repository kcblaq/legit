import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import {
	Typography,
} from '@mui/material';
import {
	Menu,
	NotificationsNoneOutlined,
	KeyboardArrowDownOutlined,
} from '@mui/icons-material';
import avatar from '../asset/Avatar.png';
// import logo from '../asset/logo.png';
import logo from '../asset/logo.svg'
import './layout.css';
import { BrowserRouter as Router, Switch, Route, Link, useLocation } from 'react-router-dom';
import LeftPane from '../leftpane/LeftPane';





export default function Nav() {
	const [detail, setDetail] = useState(false);
	const [showMobileMenu, setShowMobileMenu] = useState(false)
	let [title, setTitle] = useState('')
	
	const location = useLocation()
	useEffect(()=> {
		const path = location.pathname.lengtht < 1 ? "Home": location.pathname.split('/').pop()
		console.log(path);
		setTitle(path)
	}, [location.pathname])


	return (
			<Box sx={{ display: 'flex',  width:'100%'  }}>
			<Box
				sx={{
					flex: { xs: 7, sm: 7, md: 5, lg: 5 },
					display: 'flex',
					flexDirection:'column'
				}}>
				<Box className='navContainer'  sx={{width:'100%', backgroundColor:'#FFFFFF', height:'60px'}}> 
					<Box className='mobileMenu' sx={{display:{xs:'flex',sm:'flex',md:'none',lg:'none'},justifyContent:'space-between',alignItems:'center',position:'relative' }}>
					<Box>
					<img src={logo} alt="" className="logo" />
					
				</Box>
						<Menu onClick={() =>setShowMobileMenu(!showMobileMenu) } />
					</Box>

					<Box className='browserMenu' sx={{display:{xs:'none',sm:'none',md:'flex',lg:'flex'},justifyContent:'space-between',alignItems:'center',position:'relative',padding:2 }}>
						<Typography variant='h5' sx={{ml:4, textTransform:'capitalize'}}>
							{title}
						</Typography>
						<Box sx={{display:'flex', alignItems:'center'}}>
							<Box>
								<select className='menuSelect'>
									<option> Select vehicle </option>
									<option> Mac </option>
									<option> Honda </option>
									<option> Volkswagen </option>
								</select>
							</Box>
							<NotificationsNoneOutlined sx={{mr:2,cursor:'pointer'}} />
							<Box>
							<img src={avatar} alt="" className="avatarImage" />
							<KeyboardArrowDownOutlined onClick={()=>setDetail(!detail) } sx={{cursor:'pointer'}} />
							
							{detail && (
										<Box sx={{position:'absolute', right:8, display:'flex', flexDirection:'column'}} className='userDetailCont' > 
											<Link to='/dashboard' className='userDetail'> Dashboard</Link> 
											<Link to='#' className='userDetail'> Account</Link> 
											<Link to='#' className='userDetail'> Setting</Link> 
											<Link to='#' className='userDetail'> welcome</Link> 
											<Link to='#' className='userDetail'> welcome</Link> 
										</Box>
									)}
							</Box>
						</Box>
					</Box>
				</Box>
								

				

								
			
				
				

			</Box>
		</Box>
	
	);
}

