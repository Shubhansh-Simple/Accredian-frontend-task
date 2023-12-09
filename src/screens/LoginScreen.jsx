/*
 * Login Page of our application
 */

import React from 'react'
import { 
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Checkbox,
  Link,
  FormControlLabel
} from '@mui/material'

import LockIcon from '@mui/icons-material/Lock';

const LoginScreen = () => {
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
            <h2>Sign In</h2>
          </Grid>

          {/* Username Field */}
          <TextField label='Username' 
                     placeholder='Enter username' 
                     variant='outlined' fullWidth required />

          {/* Password Field */}
          <TextField label='Password' 
                     placeholder='Enter password' 
                     type='password' 
                     variant='outlined' fullWidth required/>

          <FormControlLabel
              control={
                <Checkbox name='checkedB' color='primary' />
              }
              label='Remember me' />

          { /* Submit Button */ }
          <Button type='submit' 
                  color='success' 
                  variant='contained' 
          style={btnstyle} fullWidth>
            Sign in
          </Button>

          { /* Signup Link */ }
          <Typography >
            New User ?   
            <Link href='/signup' >
                    Register
            </Link>
          </Typography>

        </Paper>
      </Grid>
    );
}

export default LoginScreen;
