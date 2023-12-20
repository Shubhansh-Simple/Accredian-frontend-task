/*
 * Sign up Page of our application
 */

// React-Bootstrap
import { Container, Card } from 'react-bootstrap'; 

// Components
import AuthSwitchHeader from '../components/AuthHeader';
import AuthSwitchFooter from '../components/AuthFooter';
import SignupForm       from '../components/SignupForm';
// IconStyle iconSignup from index.css

const SignupScreen = () => {
  /* JSX CODE */
  return(
    <Container className='px-4'>
      <br />
      <br />

      {/* CARD */}
      <Card className='shadow-lg p-1 mb-5 bg-white py-4 bg-white'>

        {/* CARD HEADER */}
        <Card.Header className='bg-white text-center'>
          <AuthSwitchHeader title={'Sign Up'} iconStyle={'iconSignup'}/>
        </Card.Header>

        {/* CARD BODY */}
        <Card.Body className='bg-white'>
          {/* Sign Up Form */}
          <SignupForm />
        </Card.Body>

        {/* CARD FOOTER */}
        <Card.Footer className='bg-white text-center'>
          <AuthSwitchFooter 
            msg={'Already a member ?'} 
            title={'Login'} 
            navigate={'login'} />
        </Card.Footer>

      </Card>
      <br />
      <br />
    </Container>
  );
}

export default SignupScreen;
