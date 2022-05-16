import { Box } from '@mui/material'
import React from 'react'
import Nav from './layout'
import LeftPane from './leftpane/LeftPane'
import Wrapper from './Wrapper'
// import {Outlet} from 'react-router-dom'

export default function PageContainer({children}) {
  return (
    <Box sx={{ display: 'flex', width: '100vw' }}>
			<Box sx={{ lenght: '100vh', flex: 1 }}>
				<LeftPane />
			</Box>
			<Box
				sx={{
					height: '100vh',
					overflowY: 'scroll',
					flex: 7,
					display: 'flex',
					flexDirection: 'column',
				}}>
				<Nav />
				{children}
        
			</Box>
		</Box>
  )
}
