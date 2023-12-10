/*
 * HomeScreen of our application
 */

import { useEffect, useState } from 'react';
import { Grid } from '@mui/material'

/*
 * Sending the get request
 * with the token
 * if authenticated then stay
 * otherwise redirect to the 
 * Login page
 * useEffect()
 */

const HomeScreen = () => {

  /* Send get request to the server 
   * which decides weather i stay 
   * or redirected to login page
   */
  useEffect( () => {
    console.log('Use Effect is called.');
  },[]); 


  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '90vh' }}
    >
        <h2>Welcome To Home</h2>
        <small style={{ color:'green' }}>( Login Successfully )</small>
    </Grid>
  );
}

export default HomeScreen;


