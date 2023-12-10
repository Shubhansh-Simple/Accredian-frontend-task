/*
 * Signup Page of our application
 */

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

const SignupScreen = () => {
    const paperStyle = { padding :20,
                         height:'75vh',
                         width:280, 
                         margin:'20px auto'
    }

    const avatarStyle = { backgroundColor:'#DC4C64' }

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
          <br />
          <br />
          <TextField label='Email' 
                     placeholder='Enter email' 
                     type='email'
                     variant='outlined' fullWidth required />

          {/* Password Field */}
          <br />
          <br />
          <TextField label='Password' 
                     placeholder='Enter password' 
                     type='password' 
                     variant='outlined' fullWidth required/>

          {/* Password Field Confirm */}
          <br />
          <br />
          <TextField label='Confirm Password' 
                     placeholder='Confirm password' 
                     type='password' 
                     variant='outlined' fullWidth required/>

          {/* Submit Button */}
          <br />
          <br />
          <br />
          <Button type='submit' 
                  component={Link}
                  to='/'
                  variant='contained' 
                  style={{ backgroundColor:'#DC4C64', color:'#FBFBFB' }} 
                  fullWidth>
            <strong>
              Register
            </strong>
          </Button>

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
