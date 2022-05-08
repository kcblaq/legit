import { Box, Typography } from '@mui/material'
import React from 'react'
import logo from '../asset/logo.svg'
import {HomeOutlined, BarChartOutlined, ReportOutlined, BuildCircleOutlined,FmdGoodOutlined} from '@mui/icons-material'



export default function LeftPane() {
  return (
    <Box className='leftPane'
    sx={{
        flex: { xs: 0.5, sm: 0.5, md: 1, lg: 1 },
        display: 'flex',
        flexDirection:'column',
        backgroundColor: '#ffffff',
        height: '80vh',
        padding: 1,
    }}>
    <Box sx={{display:{xs:'none', sm:'none',md:'block',lg:'block'} }}>
        <img src={logo} alt="" className="logo" />
        
    </Box>
    <Box sx={{display:'flex',flexDirection:'column', mt:{xs:10,sm:10,md:5,lg:5}}} >
        <Box sx={{}} > 
            <Box className="iconNav" sx={{display:'flex',justifyContent:'flex-start', alignItems:'center',mt:2 }}> 
            <HomeOutlined className='navIconMembers' sx={{mr:1}} /> 
            <Typography sx={{display:{xs:'none',sm:'none',md:'flex',lg:'lg'} }}> Home</Typography>
            </Box>

            <Box className="iconNav" sx={{display:'flex',justifyContent:'flex-start', alignItems:'center',mt:2 }}> 
            <BarChartOutlined className='navIconMembers'sx={{mr:1}}  /> 
            <Typography sx={{display:{xs:'none',sm:'none',md:'flex',lg:'lg'} }}> Dashboard</Typography>
            </Box>

            <Box className="iconNav" sx={{display:'flex',justifyContent:'flex-start', alignItems:'center',mt:2 }}> 
            <ReportOutlined className='navIconMembers'sx={{mr:1}}  /> 
            <Typography sx={{display:{xs:'none',sm:'none',md:'flex',lg:'lg'} }}> Report</Typography>
            </Box>

            <Box className="iconNav" sx={{display:'flex',justifyContent:'flex-start', alignItems:'center' ,mt:2}}> 
            <FmdGoodOutlined className='navIconMembers' sx={{mr:1}} /> 
            <Typography sx={{display:{xs:'none',sm:'none',md:'flex',lg:'lg'} }}> Tracking</Typography>
            </Box>

            <Box className="iconNav" sx={{display:'flex',justifyContent:'flex-start', alignItems:'center' ,mt:2}}> 
            <BuildCircleOutlined  className='navIconMembers' sx={{mr:1}}  /> 
            <Typography className='navText' sx={{display:{xs:'none',sm:'none',md:'flex',lg:'lg'} }}> Maintenance</Typography>
            </Box>
        </Box>

    </Box>

</Box>
  )
}
