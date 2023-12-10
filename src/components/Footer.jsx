/*
 * Footer Of Entire Application
 */
import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

const Footer = () => {

  // Get current year
  const currentYear = new Date().getFullYear();
  const developerId = 'shubhansh7777@gmail.com';

  return (
    <footer>
      <Paper sx={{  marginTop: 'calc(10% + 60px)',
                    position: 'fixed',
                    bottom: 0,
                    width: '100%'
             }} 
             component="footer" 
             square 
             variant="outlined">
        <Container maxWidth='lg'>

          <Box
            sx={{
              flexGrow: 1,
              justifyContent: 'center',
              display: 'flex',
            }}
          >
            <Typography variant='small' color='initial'>
              <p>
                &copy; {currentYear} Copyright :      
                <strong>{developerId}</strong>
              </p>
            </Typography>
          </Box>
        </Container>
      </Paper>










    </footer>
  );
};

export default Footer;

