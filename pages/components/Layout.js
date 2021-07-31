import {
  AppBar,
  Container,
  Link,
  Toolbar,
  Typography,
} from '@material-ui/core';
import Head from 'next/head';
import React from 'react';
import useStyles from '../../utils/styles';
import NextLink from 'next/link';

export default function Layout({ title, description, children }) {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>{title ? `${title} - Jiayi Store` : 'Jiayi-ecommerce'}</title>
        {description && <meta name="description" content={description} ></meta> }
      </Head>
      <AppBar position='static' className={classes.navbar}>
        <Toolbar>
          <NextLink href='/' passHref>
            <Link>
              <Typography className={classes.brand}>Jiayi-Store</Typography>
            </Link>
          </NextLink>
          <div className={classes.grow}>

          </div>
          <div>
            <NextLink href='/cart' passHref>
              <Link>Cart</Link>
            </NextLink>
            <NextLink href='/login' passHref>
              <Link>Login</Link>
            </NextLink>
          </div>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography>All rights reserved. Next Jiayi-Ecommerce Store</Typography>
      </footer>
    </div>
  );
}
