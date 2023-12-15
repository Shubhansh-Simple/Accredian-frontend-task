/*
 * Sign up Page of our application
 */

// React-router
import { Link } from 'react-router-dom';

// React-Bootstrap
import { Container, Card } from 'react-bootstrap'; 

// Components
import AuthRadioBtn from '../components/AuthRadioBtn';
import SignupForm   from '../components/SignupForm';

const SignupScreen = () => {
  return(

    <Container className='px-3'>
      <br />
      <br />

      {/* CARD */}
      <Card className='py-2 rounded bg-white'>

        {/* CARD HEADER */}
        <Card.Header className='bg-white text-center'>
          <AuthRadioBtn title={'Sign Up'} iconStyle={'iconSignup'}/>
        </Card.Header>

        {/* CARD BODY */}
        <Card.Body className='bg-white'>

          {/* Sign Up Form */}
          <SignupForm />

        </Card.Body>

        {/* CARD FOOTER */}
        <Card.Footer className='bg-white text-center'>
          <br />
          <br />
          <div>
            <b>Already a member ? <span> </span>
              <Link to='/login'>Login</Link>
            </b>
          </div>
        </Card.Footer>

      </Card>
      <br />
      <br />
    </Container>
  );
}

export default SignupScreen;
