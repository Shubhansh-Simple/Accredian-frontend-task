/*
 * Card Header of Signup/Login Form
 */

// React-router
import {LinkContainer} from 'react-router-bootstrap';

// React-icons
import { MdLockOutline } from "react-icons/md";

// React-bootstrap
import ToggleButton    from 'react-bootstrap/ToggleButton';
import ButtonGroup     from 'react-bootstrap/ButtonGroup';

/*
 * Radio button to switch b/w login and signup page
 */
const AuthSwitchHeader = ( {title, iconStyle} ) =>{
  return (
    <>
      <span className={`${iconStyle}`}>
        <MdLockOutline/>
      </span>
      <br />
      <br />
      <h3><strong>{title}</strong></h3>
      <br />

      <ButtonGroup style={{ width:'100%' }}>

        {/* Navigate to Login Form */}
        <LinkContainer to='/login'>
          <ToggleButton className='' 
                        type='radio' 
                        variant='outline-dark' 
                        size='lg'>
            Login
          </ToggleButton>
        </LinkContainer>
        {/* Navigate to Signup Form */}
        <LinkContainer to='/signup'>
          <ToggleButton className=''
                        type='radio' 
                        variant='outline-dark' 
                        size='lg'>
            Sign Up
          </ToggleButton>
        </LinkContainer>

      </ButtonGroup>
      <br />
      <br />
    </>
  );
}

export default AuthSwitchHeader;

