import React from 'react'
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';

const Footer = () => {
  return (
    <footer className='footer'>
      <Container xs={'xl'}>
        <Grid container gap={'1rem'} justifyContent={'center'}>
          <Grid item xs={12} sm={4} md={3} lg={1}>
            <div className='footer__item'>
              <h3 className='footer__title'>AI Financial</h3>
            </div>
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={1}>
            <div className='footer__item'>
              <h5 className='footer__title'>Home</h5>
            </div>
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={1}>
            <div className='footer__item'>
              <h5 className='footer__title'>Solutions</h5>
            </div>
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={1}>
            <div className='footer__item'>
              <h5 className='footer__title'>FAQ</h5>
            </div>
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={1}>
            <div className='footer__item'>
              <h5 className='footer__title'>About us</h5>
            </div>
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={1}>
            <div className='footer__item'>
              <h5 className='footer__title'>Contact</h5>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className='footer__item'>
              <p className='footer__copy'>© Copyright AI Financial LLC. All Rights Reserved</p>
            </div>
          </Grid>
        </Grid>
      </Container>
    </footer>
  )
}

export default Footer