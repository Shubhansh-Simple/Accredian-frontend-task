/*
 * Login Page of our application
 */

// React

// React-router
import { Link } from 'react-router-dom';

// React-Bootstrap
import { Form, 
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
  // const handleSubmit = e => {}

  /* JSX CODE */
  return(
    <div className='px-3 bg-light'>
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
          </Form>

          {/* Submit Button */}
          <br />
          <div className='text-center'>
            <Button variant='primary w-50' 
                    size='lg' 
                    onClick={{}}
                    className='px-5'>
              Sign In
            </Button>
          </div>
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
    </div>
  );
}

export default LoginScreen;
