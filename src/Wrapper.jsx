import { Box, Button } from '@mui/material'
import React from 'react'
import Nav from './layout'
import LeftPane from './leftpane/LeftPane'


export default function Wrapper({children}) {
  return (
    <div >
      {children}
    </div>
  )
}
