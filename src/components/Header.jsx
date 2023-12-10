/*
 * Header of the entire application
 */

// React-router
import { Link } from 'react-router-dom';

// React-Material-UI
import AppBar        from '@mui/material/AppBar';
import Toolbar       from '@mui/material/Toolbar';
import Typography    from '@mui/material/Typography';
import Button        from '@mui/material/Button';

// Material Icons
import LogoutIcon    from '@mui/icons-material/Logout';

const Header = () => {
  return (
    <header>
      <AppBar position='static' style={{ backgroundColor: "#332D2D" }}>
        <Toolbar>
          {/* The Typography component applies 
               default font weights and sizes */}
          <Typography
              variant='h6'
              component='div'
              sx={{ flexGrow: 1 }}
          >
            <strong>Accredian</strong>
          </Typography>

          {/* Shows only if user is authenticated */}
          <Button component={Link} 
                  to="login" 
                  variant="contained" 
                  startIcon={<LogoutIcon />}
                  color="error"> 
            <b>Log out</b>
          </Button>
        </Toolbar>
      </AppBar>
    </header>
  );
}

export default Header;
