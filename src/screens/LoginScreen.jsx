/*
 * Login Page of our application
 */

import React, {useState } from 'react';
//import axios    from 'axios';

// React-router
import { Link } from 'react-router-dom';

// React-Bootstrap
import { Container, Card, Button, Row, Col } from 'react-bootstrap'; 

// React-icons

// Components
import AuthRadioBtn from '../components/AuthRadioBtn';

const LoginScreen = () => {

  /*
   * Fields Required for login
   * Username/Email and Password
   */
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  /* Detect Change In Username */
  const onUsernameChange = (e) => {}

  /* Detect Change In Password */
  const onPasswordChange = (e) => {}

  /* Submitting form data to backend */
  const handleSubmit = e => {}

  /* JSX CODE */
  return(
    <div className='text-center'>
      <Container>
        <AuthRadioBtn />

        {/* CARD */}
        <Card className='my-2 py-5 rounded px-2'>

          {/* CARD HEADER */}
          <div className='text-center'>
            <Card.Text as='h3'>
              Header
            </Card.Text>
          </div>

          { /* CARD BODY */ }
          <Card.Body>
            Body
          </Card.Body>


          { /* CARD FOOTER */ }
          <Card.Footer className='bg-white'>
            { /* Login button */ }
            <br />
            <Button variant='outline-primary' 
                    size='md' 
                    onClick={{}}
                    className='px-5'>
              Sign In
            </Button>
          </Card.Footer>
        </Card>
        <br />
        <br />
        <b>Not a member ? <span> </span>
          <Link to='/signup'>Register</Link>
        </b>
      </Container>
    </div>
  );
}

export default LoginScreen;
