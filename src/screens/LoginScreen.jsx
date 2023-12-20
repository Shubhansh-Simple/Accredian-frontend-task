/*
 * Login Page of our application
 */

// React-Bootstrap
import { Container, Card } from 'react-bootstrap'; 

// Components
import AuthSwitchHeader from '../components/AuthHeader';
import AuthSwitchFooter from '../components/AuthFooter';
import LoginForm        from '../components/LoginForm';
// IconStyle iconSignup from index.css

const LoginScreen = () => {
  /* JSX CODE */
  return(
    <Container className='px-4'>
      <br />
      <br />

      {/* CARD */}
      <Card className='shadow-lg p-1 mb-5 bg-white py-4 bg-white'>

        {/* CARD HEADER */}
        <Card.Header className='bg-white text-center'>
          <AuthSwitchHeader title={'Sign In'} iconStyle={'iconLogin'}/>
        </Card.Header>

        {/* CARD BODY */}
        <Card.Body className='bg-white'>
          {/* Login Form */}
          <LoginForm />
        </Card.Body>

        {/* CARD FOOTER */}
        <Card.Footer className='bg-white text-center'>
          <AuthSwitchFooter 
            msg={'Not a member ?'} 
            title={'Signup'} 
            navigate={'signup'} />
        </Card.Footer>
      </Card>
      <br />
      <br />
    </Container>
  );
}

export default LoginScreen;
