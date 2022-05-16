import { Box, Typography, Button } from '@mui/material'
import React from 'react'
import './verify.css'
// import ArrowBackOutlinedIcon from '@mui/icons-material';
import {
    Menu,
    NotificationsNoneOutlined,
    ArrowBackOutlined
} from '@mui/icons-material';
import hondalogo from '../asset/hondalogo.svg'
import { VehicleData } from './data';
import Wrapper from '../Wrapper';
import App from '../App';
import PageContainer from '../PageContainer';





export default function Verify() {
    return (
        <PageContainer>
        <Box sx={{ backgroundColor: '#F2F4F7', mt:{xs:1,sm:1,md:1,lg:1} , overflow: 'scroll', padding:{xs:1,sm:1,md:1,lg:1}}}>
            <Box className='mainBody' sx={{
                 display: 'flex', flexDirection: 'column',p:{xs:1,sm:1,md:4,lg:4},
                backgroundColor: '#ffffff', borderRadius: 5, mt: { xs: 1, sm: 1, md: 2, lg: 2 }
            }} >

                <Box sx={{ display: 'flex', justifyContent: 'flex-start', color: '#475467', fontSize: 14, cursor: 'pointer' }} >
                    <ArrowBackOutlined sx={{ mr: 2 }} />
                    <Typography> Back</Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'column', md: 'column', lg: 'column' }, mt: 2, }} >
                    <Typography sx={{ color: '#1D2939', fontSize: 24, textAlign: 'center' ,mb:2}} >
                        Vehicle details
                    </Typography>
                    <Box sx={{ display: 'flex', justifContent: 'space-between', flexDirection: { xs: 'column', sm: 'column', md: 'row', lg: 'row' } }} >
                        <Box className='honda' sx={{
                            height: '310px', flex: 1, minWidth: { xs: '50%', sm: '50%', md: '320px', lg: '320px' }, borderColor: '#D0D5DD',
                            borderWidth: '1px', borderRadius: '16px', borderStyle: 'solid', display: 'flex', flexDirection: 'column',padding:{xs:1,sm:1,md:4,lg:4},
                            justifyContent: 'center', alignItems: 'center', mb: { xs: 2, sm: 2, md: 0, lg: 0 },
                        }}>
                            <img src={hondalogo} alt='' className='hondaLogo' sx={{}} />
                            <Typography sx={{ fontWeight: 800, fontSize:{md:24,xs:16,sm:16,lg:24}, color: '#1D2939' }}>
                                HONDA
                            </Typography>
                            <Typography sx={{ color: '#667085', fontSize: 14 }}>
                                VIN NUMBER:
                            </Typography>
                            <Typography sx={{ color: '#1D2939', fontSize: {md:24,xs:16,sm:16,lg:24}, fontWeight: 700 }}>
                                JHLRE4859C401526Z
                            </Typography>
                        </Box>

                        <Box className='modelBox' sx={{
                            height: '310px', flex: 3, ml: { xs: 0, sm: 0, md: 3, lg: 3 }, borderColor: '#D0D5DD', borderWidth: '1px',
                            borderRadius: '16px', borderStyle: 'solid',padding:{xs:1,sm:1,md:4,lg:4}
                        }}>
                            <Box sx={{ display: 'flex', p:{xs:0,sm:0,md:4,lg:4}, maxWidth:'100%'  }}>
                                <Box sx={{ display: 'flex', flexDirection:'column',p:{xs:2,sm:2,md:4,lg:4} }}>
                                    <Typography sx={{fontSize: {md:16,xs:10,sm:12,lg:16}, }} className='title'>
                                        Model
                                    </Typography>
                                    <Typography sx={{fontSize: {md:14,xs:10,sm:10,lg:14}, }} className='description'>
                                        HONDA CR-V 2.0L
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column', p:{xs:2,sm:2,md:4,lg:4}}}>
                                    <Typography sx={{fontSize: {md:16,xs:10,sm:12,lg:16}, }} className='title'>
                                        Manufacturer
                                    </Typography>
                                    <Typography sx={{fontSize: {md:14,xs:10,sm:10,lg:14}, }} className='description'>
                                        HONDA MOTORS CO., LTD
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', p:{xs:1,sm:1,md:4,lg:4},maxWidth:'100%' }}>
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <Typography sx={{fontSize: {md:16,xs:10,sm:12,lg:16}, }} className='title'>
                                        Vehicle type
                                    </Typography>
                                    <Typography sx={{maxWidth:'250px',fontSize: {md:14,xs:10,sm:10,lg:14}, }} className='description'>
                                        MULTIPURPOSE PASSENGER VEHICLE (MPV)
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column',alignItems:'center', justifyContent :'center',  }}>
                                    <Typography sx={{fontSize: {md:16,xs:10,sm:12,lg:16}, }} className='title'>
                                        Body class
                                    </Typography>
                                    <Typography sx={{fontSize: {md:14,xs:10,sm:10,lg:14}, }} className='description'>
                                        WAGON
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', mt: 8 }}>

                        <Typography sx={{ color: '#1D2939',fontSize: {xs:18,sm:18,md:24,lg:24}, fontWeight: 500, textAlign: 'center', alignItems: 'center' }}>
                            Buy report and view detailed history for:
                        </Typography>
                        <Typography sx={{ color: '#FF8640', fontSize: {xs:18,sm:18,md:24,lg:24}, fontWeight: 700, textAlign: 'center', alignItems: 'center' }}>
                            HONDA CR-V 2.0L (JHLRE4859C401526Z)
                        </Typography>

                        <Typography sx={{ color: '#475467', fontSize: 16, fontWeight: 400, textAlign: 'center', alignItens: 'center' }}>
                            Select one or more services to buy
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Box sx={{
                            width: { xs: '80%', sm: '80%', md: '80vw', lg: '30vw' }, textAlign: 'center', display: 'flex', justifyContent: 'space-around',
                            mt: { xs: 2, sm: 2, md: 4, lg: 4 }, flexDirection: 'column'
                        }}>
                            {
                                VehicleData.map((data, index) => {

                                    return (<Box key={index} sx={{
                                        display: 'flex',
                                        justifyContent: 'space-around', alignItems: 'center', mb: 6,
                                    }} className='selectCar'>
                                        <input type="radio" name={data.name} value="track" />
                                        <p>{data.name}  </p>
                                        <Button variant='contained' color='success' size='small' sx={{ borderRadius: 5 }}>{data.price}   </Button>
                                    </Box>)
                                })
                            }
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
        </PageContainer>
    )
}
