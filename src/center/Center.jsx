import { Box,Typography } from '@mui/material'
import React from 'react'
// import ArrowBackOutlinedIcon from '@mui/icons-material';
import {
	Menu,
	NotificationsNoneOutlined,
    ArrowBackOutlined
} from '@mui/icons-material';


export default function Center() {
  return (
    <Box className='mainBody' sx={{minHeight:'80%',display:'flex',flexDirection:'column',
     backgroundColor:'#ffffff',p:2, margin:2, borderRadius:4}} > 

        <Box sx={{display:'flex', justifyContent:'flex-start', color:'#475467', fontSize:14, cursor:'pointer' }} >
            <ArrowBackOutlined  sx={{mr:2}} />
            <Typography> Back</Typography>
        </Box>
        <Box sx={{display:'flex',flexDirection:'column',mt:2 }} >
            <Typography sx={{color:'#1D2939',fontSize:24,textAlign:'center' }} >
            Vehicle details
            </Typography>
            <Box sx={{display:'flex' }} >
                {/* <Box sx={{flex:1, borderRadius:5,height:'310px', borderColor:'#D0D5DD' ,width:'320px' }} > Hello </Box>
                <Box sx={{flex:2, borderRadius:5,height:'310px', borderColor:'#D0D5DD'  }} > Hello </Box> */}

            </Box>
        </Box>
	</Box>
  )
}
