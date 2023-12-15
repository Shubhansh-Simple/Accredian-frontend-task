/*
 * Login Page of our application
 */

// React

// React-router
import { Link } from 'react-router-dom';

// React-Bootstrap
import { Form, 
  Container,
  Card,
  Button,
} from 'react-bootstrap'; 

// Components
import AuthRadioBtn from '../components/AuthRadioBtn';

const LoginScreen = () => {
  /*
   * Fields Required for login
   * Username/Email and Password
   */
  // const [ username, setUsername ] = useState('');
  // const [ password, setPassword ] = useState('');

  // /* Detect Change In Username */
  // const onUsernameChange = (e) => {}

  // /* Detect Change In Password */
  // const onPasswordChange = (e) => {}

  // /* Submitting form data to backend */
  // const handleSubmit = e => {
  //   console.log('Submit function working');
  // }

  /* JSX CODE */
  return(

    <Container className='px-3'>
      <br />
      <br />

      {/* CARD */}
      <Card className='py-2 rounded bg-white'>

        {/* CARD HEADER */}
        <Card.Header className='bg-white text-center'>
          <AuthRadioBtn title={'Sign In'} iconStyle={'iconLogin'}/>
        </Card.Header>

        { /* CARD BODY */ }
        <Card.Body className='bg-white'>

          {/* Form */}
          <Form>

            {/* Username */}
            <Form.Group className='mb-2 px-2 py-3' controlId='formBasicEmail'>
              <Form.Label>
                <strong>Username Or Email</strong>
              </Form.Label>
              <Form.Control size='lg' type='email' placeholder='name@example.com' />
            </Form.Group>

            {/* Password */}
            <Form.Group className='mb-3 px-2 py-3' controlId='formBasicPassword'>
              <Form.Label>
                <strong>Password</strong>
              </Form.Label>
              <Form.Control size='lg' type='password' placeholder='Password' />
            </Form.Group>

            {/* Submit Button */}
            <br />
            <div className='text-center'>
              <Button variant='primary w-60' 
                      size='lg' 
                      className='px-5'>
                Sign In
              </Button>
            </div>
          </Form>
        </Card.Body>

        <Card.Footer className='bg-white text-center'>
          <br />
          <br />
          <div>
            <b>Not a member ? <span> </span>
              <Link to='/signup'>Register</Link>
            </b>
          </div>
        </Card.Footer>
      </Card>
      <br />
      <br />
      <br />
    </Container>
  );
}

export default LoginScreen;
