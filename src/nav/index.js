import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import {
	Typography,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	ListSubheader,
  Link,
} from '@mui/material';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {
	NotificationsNoneOutlined,
	KeyboardArrowDownOutlined,
} from '@mui/icons-material';
import avatar from '../asset/Avatar.png';

export default function Nav() {
	const [detail, setDetail] = useState(false);
	return (
		<Box sx={{  }}>
			<AppBar
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
									<InputLabel htmlFor="grouped-select">Hire vehicle</InputLabel>
									<Select size='small' defaultValue="" id="grouped-select" label="Grouping">
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
							<Box position='relative'>
								<img src={avatar} alt="the avatar" />
								<KeyboardArrowDownOutlined 
									onClick={()=> setDetail(!detail)}
									sx={{ cursor: 'pointer' }}
								/>
                {
                  detail && <Box sx={{display:'flex',position:'absolute', flexDirection:'column', right:-10, top:45 }}> 
                    <Link href="#" underline="none" > Dashboard</Link>
                    <Link href="#" underline="none"> Subscribe</Link>
                    <Link href="#" underline="none"> Account</Link>
                    
                     </Box>
                }
							</Box>
						</Box>
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
