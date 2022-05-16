import { Box, Typography } from '@mui/material'
import React from 'react'
import logo from '../asset/logo.svg'
import { Link, NavLink,useResolvedPath,useMatch } from "react-router-dom";
import './leftpane.css';
import {HomeOutlined,Search, BarChartOutlined, ReportOutlined, BuildCircleOutlined,FmdGoodOutlined} from '@mui/icons-material'


function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{ textDecoration: "none" ,
        backgroundColor: match ? '#8E44AD' : '#FFF',
        color: match ? '#FFFFFF' : '#000000',
        padding: '5px',
        borderRadius:'10px',
        display:'flex'
      }}
        to={to}
        {...props}
      >
        {children}
      </Link>
      {/* {match && " (active)"} */}
    </div>
  );
}




export default function LeftPane() {
  return (
    <Box className='leftPane'
    sx={{
        flex:1,
        height:'80vh',
        display: 'flex',
        flexDirection:'column',
        backgroundColor: '#ffffff',
        padding: 1,
        margin: "0.5 0.5",
        border:'1px solid #FFFFFF',
    }}>
    <Box sx={{display:{xs:'none', sm:'none',md:'flex',lg:'flex'} }}>
        <Link to='/'> <img src={logo} alt="" className="logo" /></Link>
        
    </Box>
    <Box sx={{display:'flex',flexDirection:'column', mt:{xs:1,sm:1,md:2,lg:5}}} >
        <Box sx={{mt:4}} > 
    
        <CustomLink to='/' className='iconLink'>
            <Box className="iconNav" sx={{display:'flex',justifyContent:'flex-start', alignItems:'center'}}> 
            <HomeOutlined className='navIconMembers'sx={{mr:1}}  /> 
            <Typography sx={{display:{xs:'none',sm:'none',md:'flex',lg:'lg'} }}>  Home</Typography>
            </Box>
        </CustomLink> 
            
            
            
            <CustomLink to='/dashboard'className='iconLink'>
            <Box className="iconNav" sx={{display:'flex',justifyContent:'flex-start', alignItems:'center' }}> 
            <BarChartOutlined className='navIconMembers'sx={{mr:1}}  /> 
            <Typography sx={{display:{xs:'none',sm:'none',md:'flex',lg:'lg'} }}>  Dashboard</Typography>
            </Box>
            </CustomLink> 

            <CustomLink to='/verify'className='iconLink'>
            <Box className="iconNav" sx={{display:'flex',justifyContent:'flex-start', alignItems:'center' }}> 
            <Search className='navIconMembers'sx={{mr:1}}  /> 
            <Typography sx={{display:{xs:'none',sm:'none',md:'flex',lg:'flex'} }}> Verify </Typography>
            </Box>
            </CustomLink >

            <CustomLink to='/report'className='iconLink'>
            <Box className="iconNav" sx={{display:'flex',justifyContent:'flex-start', alignItems:'center' }}> 
            <ReportOutlined className='navIconMembers'sx={{mr:1}}  /> 
            <Typography sx={{display:{xs:'none',sm:'none',md:'flex',lg:'lg'} }}> Report </Typography>
            </Box>
            </CustomLink>


            <CustomLink to='/tracking'className='iconLink'>
            <Box className="iconNav" sx={{display:'flex',justifyContent:'flex-start', alignItems:'center' }}> 
            <FmdGoodOutlined className='navIconMembers' sx={{mr:1}} /> 
            <Typography sx={{display:{xs:'none',sm:'none',md:'flex',lg:'lg'} }}> Tracking </Typography>
            </Box>
            </CustomLink>

            <CustomLink to='/maintenance'className='iconLink'>
            <Box className="iconNav" sx={{display:'flex',justifyContent:'flex-start', alignItems:'center' }}> 
            <BuildCircleOutlined  className='navIconMembers' sx={{mr:1}}  /> 
            <Typography className='navText' sx={{display:{xs:'none',sm:'none',md:'flex',lg:'lg'} }}>  Maintenance </Typography>
            </Box>
            </CustomLink>


        </Box>

    </Box>

</Box>
  )
}
