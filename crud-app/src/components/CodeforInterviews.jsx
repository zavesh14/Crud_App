import React from 'react'
import { Typography, styled  } from '@mui/material'

const PStyled = styled(Typography)`
  margin: 200px 200px 200px 300px;
`  
const CodeforInterviews = () => {
  return (
    <>
      <PStyled variant='h3'> Welcome to CRUD Application Example</PStyled>
    </>
  )
}

export default CodeforInterviews