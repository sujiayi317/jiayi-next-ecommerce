import { AppBar, Container, Toolbar, Typography } from '@material-ui/core'
import Head from 'next/head'
import React from 'react'

export default function Layout({children}) {
  return (
    <div>
      <Head>
        <title>Jiayi-ecommerce</title>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography>Jiayi-store</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        {children}
      </Container>
    </div>
  )
}
