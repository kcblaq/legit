import React, { useState } from 'react';
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
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import LeftPane from '../leftpane/LeftPane';
import Center from '../center/Center';

const useStyles = makeStyles({
	browser: {
		display: { xs: 'none', sm: 'none', md: 'block', lg: 'block' },
	},
	mobile: {
		display: { xs: 'block', sm: 'block', md: 'none', lg: 'none' },
	},
});

export default function Nav() {
	const [detail, setDetail] = useState(false);
	const [showMobileMenu, setShowMobileMenu] = useState(false)

	const classes = useStyles();
	return (
		<Box sx={{ display: 'flex', width: '100vw', backgroundColor: '#F2F4F7' }}>
			<LeftPane/>
			<Box
				sx={{
					flex: { xs: 7, sm: 7, md: 5, lg: 5 },
					display: 'flex',
					height: '100vh',
					flexDirection:'column'
				}}>
				<Box className='navContainer'  sx={{width:'100%', backgroundColor:'#FFFFFF', minHeight:50}}> 
					<Box className='mobileMenu' sx={{display:{xs:'flex',sm:'flex',md:'none',lg:'none'},justifyContent:'space-between',alignItems:'center',position:'relative' }}>
					<Box>
					<img src={logo} alt="" className="logo" />
					
				</Box>
						<Menu onClick={() =>setShowMobileMenu(!showMobileMenu) } />
					</Box>

					<Box className='browserMenu' sx={{display:{xs:'none',sm:'none',md:'flex',lg:'flex'},justifyContent:'space-between',alignItems:'center',position:'relative',padding:2 }}>
						<Typography>
							Verify
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
											<a href='#' className='userDetail'> Dashboard</a> 
											<a href='#' className='userDetail'> Account</a> 
											<a href='#' className='userDetail'> Setting</a> 
											<a href='#' className='userDetail'> welcome</a> 
											<a href='#' className='userDetail'> welcome</a> 
										</Box>
									)}
							</Box>
						</Box>
					</Box>
				</Box>


				<Center />
				
				

			</Box>
		</Box>
	);
}



























{/* <AppBar
					position="static"
					elevation={0}
					sx={{ backgroundColor: '#ffffff', color: '#000' }}>
					<Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
						<IconButton
							size="large"
							edge="start"
							color="inherit"
							aria-label="menu"
							sx={{ mr: 2 }}>
							<Typography> Verify </Typography>
						</IconButton>
						<Box variant="h6" component="div" sx={{}}>
							<Box sx={{ display: 'flex', alignItems: 'center' }}>
								<Box>
									<FormControl sx={{ minWidth: 130, mr: 2 }}>
										<InputLabel htmlFor="grouped-select">
											Hire vehicle
										</InputLabel>
										<Select
											size="small"
											defaultValue=""
											id="grouped-select"
											label="Grouping">
											<MenuItem value="">
												<em>Hire vehicle</em>
											</MenuItem>
											<ListSubheader>Category 1</ListSubheader>
											<MenuItem value={1}>Option 1</MenuItem>
											<MenuItem value={2}>Option 2</MenuItem>
											<ListSubheader>Category 2</ListSubheader>
											<MenuItem value={3}>Option 3</MenuItem>
											<MenuItem value={4}>Option 4</MenuItem>
										</Select>
									</FormControl>
								</Box>
								<Box>
									<IconButton
										size="large"
										edge="start"
										color="inherit"
										aria-label="menu"
										sx={{ mr: 2 }}>
										<NotificationsNoneOutlined />
									</IconButton>
								</Box>
								<Box position="relative">
									<img src={avatar} alt="the avatar" />
									<KeyboardArrowDownOutlined
										onClick={() => setDetail(!detail)}
										sx={{ cursor: 'pointer' }}
									/>
									{detail && (
										<Box
											sx={{
												display: 'flex',
												position: 'absolute',
												flexDirection: 'column',
												right: -10,
												top: 45,
											}}>
											<Link href="#" underline="none">
												{' '}
												Dashboard
											</Link>
											<Link href="#" underline="none">
												{' '}
												Subscribe
											</Link>
											<Link href="#" underline="none">
												{' '}
												Account
											</Link>
										</Box>
									)}
								</Box>
							</Box>
						</Box>
					</Toolbar>
				</AppBar> */}