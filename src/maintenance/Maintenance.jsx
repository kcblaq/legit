import { Typography,Box } from '@mui/material'
import React from 'react'
import App from '../App'
import Wrapper from '../Wrapper'
import PageContainer from '../PageContainer'
// import PageContainer from '@/PageContainer'
import LeftPane from 'leftpane/LeftPane'


export default function Maintenance() {
  return (

    <PageContainer>
      <Box sx={{display:'flex', flex:5,mt:10}} >
        <Typography>
            Maintenance page goes here...
        </Typography>
    </Box>
    </PageContainer>
  )
}
