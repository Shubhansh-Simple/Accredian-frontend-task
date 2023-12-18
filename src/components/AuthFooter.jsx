/*
 * Card Footer of Signup/Login Form
 */

// React-router
import { Link } from 'react-router-dom';

/*
 * Link to switch b/w login and signup page
 */
const AuthSwitchFooter = ( {msg='', title='', navigate='/'} ) =>{
  return (
    <>
      <br />
      <br />
      <div>
        <b>{msg} <span> </span>
          <Link to={`/${navigate}`}>{title}</Link>
        </b>
      </div>
    </>
  );
}

export default AuthSwitchFooter;
