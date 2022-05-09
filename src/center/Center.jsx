import { Box,Typography,Button } from '@mui/material'
import React from 'react'
import './center.css'
// import ArrowBackOutlinedIcon from '@mui/icons-material';
import {
	Menu,
	NotificationsNoneOutlined,
    ArrowBackOutlined
} from '@mui/icons-material';
import hondalogo from '../asset/hondalogo.svg'
import { VehicleData } from './data';



export default function Center() {
  return (
    <Box className='mainBody' sx={{minHeight:'80%',display:'flex',flexDirection:'column',overflow:'scroll',
     backgroundColor:'#ffffff',p:2, margin:2, borderRadius:4, mt:{xs:8,sm:8,md:2,lg:2}}} > 

        <Box sx={{display:'flex', justifyContent:'flex-start', color:'#475467', fontSize:14, cursor:'pointer' }} >
            <ArrowBackOutlined  sx={{mr:2}} />
            <Typography> Back</Typography>
        </Box>
        <Box sx={{display:'flex',flexDirection:{xs:'row',sm:'row',md:'column',lg:'column'},mt:2 }} >
            <Typography sx={{color:'#1D2939',fontSize:24,textAlign:'center' }} >
            Vehicle details
            </Typography>
            <Box sx={{display:'flex',justifContent:'space-between' }} >
                <Box sx={{ height:'310px',flex:1, minWidth:'320px',borderColor:'#D0D5DD',
                borderWidth:'1px', borderRadius:'16px', borderStyle:'solid',display:'flex',flexDirection:'column',
                justifyContent:'center',alignItems:'center' }}>
                    <img src={hondalogo} alt='' className='hondaLogo' sx={{}} />
                <Typography sx={{fontWeight:800,fontSize:24,color:'#1D2939' }}>
                    HONDA
                </Typography>
                <Typography sx={{color:'#667085',fontSize:14 }}>
                VIN NUMBER:
                </Typography>
                <Typography sx={{color:'#1D2939',fontSize:24, fontWeight:700 }}>
                JHLRE4859C401526Z
                </Typography>
                </Box>

                <Box sx={{ height:'310px',flex:3,ml:3, borderColor:'#D0D5DD',borderWidth:'1px',
                 borderRadius:'16px',borderStyle:'solid'}}>
                    <Box sx={{display:'flex',p:6 }}>
                        <Box sx={{display:'flex', flexDirection:'column' }}>
                            <Typography sx={{}} className='title'>
                                Model
                            </Typography>
                            <Typography sx={{}} className='description'>
                            HONDA CR-V 2.0L
                            </Typography>
                        </Box>
                        <Box sx={{display:'flex', flexDirection:'column',ml:12 }}>
                            <Typography sx={{}} className='title'>
                            Manufacturer
                            </Typography>
                            <Typography sx={{}} className='description'>
                            HONDA MOTORS CO., LTD
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{display:'flex',pl:6, }}>
                        <Box sx={{display:'flex', flexDirection:'column' }}>
                            <Typography sx={{}} className='title'>
                            Vehicle type
                            </Typography>
                            <Typography sx={{maxWidth:'250px' }} className='description'>
                            MULTIPURPOSE PASSENGER VEHICLE (MPV)
                            </Typography>
                        </Box>
                        <Box sx={{display:'flex', flexDirection:'column', }}>
                            <Typography sx={{}} className='title'>
                            Body class
                            </Typography>
                            <Typography sx={{}} className='description'>
                            WAGON
                            </Typography>
                        </Box>
                    </Box>

                   



                </Box>

                

            </Box>
            <Box sx={{display:'flex',flexDirection:'column',mt:8 }}>
                        
                        <Typography sx={{color:'#1D2939', fontSize:24,fontWeight:500,textAlign:'center', alignItens:'center' }}>
                        Buy report and view detailed history for:
                        </Typography>
                        <Typography sx={{color:'#FF8640', fontSize:24,fontWeight:700,textAlign:'center', alignItens:'center' }}>
                        HONDA CR-V 2.0L (JHLRE4859C401526Z)
                        </Typography>

                        <Typography sx={{color:'#475467', fontSize:16,fontWeight:400,textAlign:'center', alignItens:'center' }}>
                        Select one or more services to buy
                        </Typography>
             </Box>

            <Box sx={{display:'flex', justifyContent:'center' }}>
            <Box sx={{ width:'50vw', textAlign:'center',display:'flex',justifyContent:'space-around',
             mt:4, flexDirection:'column' }}>
             {
                 VehicleData.map((data,index) =>{

                   return (<Box key={index} sx={{display:'flex',  
                   justifyContent:'space-around', alignItems:'center',mb:6,  }}  className='selectCar'> 
                   <input type="radio" name={data.name} value="track" />
                   <p>{data.name}  </p>
                   <Button variant='contained' color='success' size='small' sx={{borderRadius:5}}>{data.price}   </Button>
                   </Box>)
                 })
             }
             </Box>
            </Box>
        </Box>
	</Box>
  )
}
