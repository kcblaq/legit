import { Typography,Box } from '@mui/material'
import React from 'react'
import PageContainer from '../PageContainer'
import Wrapper from '../Wrapper'


export default function Dashboard() {
  return (

    <PageContainer>
      <Box sx={{display:'flex', flex:5,mt:10}} >
        <Typography>
            Here is the dashboard
        </Typography>
    </Box>
    </PageContainer>
  )
}
