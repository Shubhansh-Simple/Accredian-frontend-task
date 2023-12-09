/*
 * Signup Page of our application
 */

import React from 'react'
import { 
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from '@mui/material'

import LockIcon from '@mui/icons-material/Lock';

const SignupScreen = () => {
    const paperStyle = { padding :20,
                         height:'70vh',
                         width:280, 
                         margin:'20px auto'
    }
    const avatarStyle = { backgroundColor:'#1bbd7e' }
    const btnstyle = { margin:'8px 0' }

    return(
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align='center'>
            <Avatar style={avatarStyle}>
              <LockIcon />
            </Avatar>
            <h2>Sign Up</h2>
          </Grid>

          {/* Username Field */}
          <TextField label='Username' 
                     placeholder='Enter username' 
                     variant='outlined' fullWidth required />

          {/* Email Field */}
          <TextField label='Email' 
                     placeholder='Enter email' 
                     type='email'
                     variant='outlined' fullWidth required />

          {/* Password Field */}
          <TextField label='Password' 
                     placeholder='Enter password' 
                     type='password' 
                     variant='outlined' fullWidth required/>

          {/* Password Field Confirm */}
          <TextField label='Confirm Password' 
                     placeholder='Confirm password' 
                     type='password' 
                     variant='outlined' fullWidth required/>

          <br />
          { /* Submit Button */ }
          <Button type='submit' 
                  color='error' 
                  variant='contained' 
                  style={btnstyle} fullWidth>
            Register
          </Button>

          { /* Signup Link */ }
          <Typography >
            Already have an account ? 
            <Link href='/login' >
              Login
            </Link>
          </Typography>

        </Paper>
      </Grid>
    );
}

export default SignupScreen;
