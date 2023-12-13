/*
 * Signup Page of our application
 */

import React, {useState } from 'react';

// React-router
import { Link } from 'react-router-dom';

//import axios    from 'axios';

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

// Local
import { 
  paperStyle,
  avatarStyle
} from '../css/style.js';


const SignupScreen = () => {

  /*
   * Following fields required for signup
   * Username, Email, Password, Confirm Password
   */
  const [ username, setUsername ]               = useState('');
  const [ password, setPassword ]               = useState('');
  const [ email, setEmail ]                     = useState('');
  const [ confirmPassword, setConfirmPassword ] = useState('');


  /* Detect Change In Username */
  const onUsernameChange = (e) => {
    setUsername(e.target.value);
  }

  /* Detect Change In Email */
  const onEmailChange = (e) => {
    setEmail(e.target.value);
  }

  /* Detect Change In Password */
  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  }

  /* Detect Change In Confirm Password */
  const onConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  }

  /* Submitting form data to backend */
  const handleSubmit = e => {
    e.preventDefault();
    console.log('handleSubmit value is ',
       username, password, email, confirmPassword );
  }

  return(
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align='center'>
          <Avatar style={avatarStyle}>
            <LockIcon />
          </Avatar>
          <h2>Sign Up</h2>
        </Grid>

        {/* Submit Form */}
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
          {/* Email Field */}
          <TextField label='Email' 
                     placeholder='Enter your email' 
                     type='email'
                     value={email}
                     onChange={onEmailChange}
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

          {/* Password Field Confirm */}
          <br />
          <br />
          <TextField label='Confirm Password' 
                     placeholder='Confirm your password' 
                     type='password'
                     value={confirmPassword}
                     onChange={onConfirmPasswordChange}
                     variant='outlined' 
                     fullWidth 
                     required />

          {/* Submit Button */}
          <br />
          <br />
          <br />
          <Button type='submit' 
                  variant='contained' 
                  style={{ backgroundColor:'#DC4C64', color:'#FBFBFB' }} 
                  fullWidth>
            <strong>
              Register
            </strong>
          </Button>
        </form>

        { /* Signup Link */ }
        <br />
        <br />
        <Typography >
          Already have an account ?<span> </span>  
          <Link to='/login' >
            Login
          </Link>
        </Typography>

      </Paper>
    </Grid>
  );
}

export default SignupScreen;
