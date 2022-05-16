import { Typography,Box } from '@mui/material'
import React from 'react'
import PageContainer from '../PageContainer'
// import PageContainer from '@/PageContainer'
import Wrapper from '../Wrapper'


export default function Tracking() {
  return (
    <PageContainer>
      <Box sx={{display:'flex', flex:5,mt:10}} >
        <Typography>
            Here is the Tracking page 
        </Typography>
    </Box>
    </PageContainer>
  )
}
