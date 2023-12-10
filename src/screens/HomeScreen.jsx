/*
 * HomeScreen of our application
 */

import { 
  Grid,
} from '@mui/material'

const HomeScreen = () => {
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


