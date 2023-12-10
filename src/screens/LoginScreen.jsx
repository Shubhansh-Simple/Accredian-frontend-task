/*
 * Login Page of our application
 */

import React, {useState } from 'react';
//import axios    from 'axios';

// React-router
import { Link } from 'react-router-dom';

// React-Material-UI
import { 
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
} from '@mui/material'

// Material-ui-icons
import LockIcon from '@mui/icons-material/Lock';


const LoginScreen = () => {

  /*
   * Required
   * Username/Email & Password for Login
   */
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');


  /* Submitting form data to backend */
  const handleSubmit = e => {
    e.preventDefault();
    console.log('handleSubmit value is ',username, password );
  }

  const onUsernameChange = (e) => {
    console.log('onUsernameChange is call and value is ',e.target.value);
    setUsername(e.target.value);
  }

  const onPasswordChange = (e) => {
    console.log('onPasswordChange is call and value is ',e.target.value);
    setPassword(e.target.value);
  }

  /* CSS Properties */
  const paperStyle = { padding :20,
                       height:'70vh',
                       width:280, 
                       margin:'20px auto'
                     }
  const avatarStyle = { backgroundColor:'#14A44D' }

  /* JSX CODE */
  return(
    <Grid>
      <Paper elevation={10} style={paperStyle}>

        {/* Heading Section */}
        <Grid align='center'>
          <Avatar style={avatarStyle}>
            <LockIcon />
          </Avatar>
          <h2>Sign In</h2>
        </Grid>

        {/* Login Form */}
        <form onSubmit={handleSubmit}>

          {/* Username Field */}
          <TextField label='Username' 
                     placeholder='Enter your username' 
                     type='text'
                     value={username}
                     onChange={onUsernameChange}
                     variant='outlined' 
                     fullWidth 
                     required />

          <br />
          <br />
          {/* Password Field */}
          <TextField label='Password' 
                     placeholder='Enter your password' 
                     type='password'
                     value={password}
                     onChange={onPasswordChange}
                     variant='outlined' 
                     fullWidth 
                     required />

          <br />
          <br />
          <br />
          {/* Submit Button */}
          <Button type='submit' 
                  variant='contained' 
                  style={{ backgroundColor:'#14A44D', color:'#FBFBFB' }} 
                  fullWidth>
            <strong>
              Sign in
            </strong>
          </Button>
        </form>

        {/* Account doesn't exist, Signup Link */}
        <br />
        <br />
        <Typography >
          New User ?<span> </span>  
          <Link to='/signup' style={{ color:'#3B71CA' }} >
            Register
          </Link>
        </Typography>

      </Paper>
    </Grid>
  );
}

export default LoginScreen;
