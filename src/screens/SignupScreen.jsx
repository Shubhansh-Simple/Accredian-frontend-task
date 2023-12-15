/*
 * Signup Page of our application
 */

import React, {useState } from 'react';

// React-router
import { Link } from 'react-router-dom';

// React-bootstrap
import { Container, Card, Button } from 'react-bootstrap';


const SignupScreen = () => {

  /*
   * Following fields required for signup
   * Username, Email, Password, Confirm Password
   */
  const [ username, setUsername ]               = useState('');
  const [ password, setPassword ]               = useState('');
  const [ email, setEmail ]                     = useState('');
  const [ confirmPassword, setConfirmPassword ] = useState('');


  /* Detect Change In Username */
  const onUsernameChange = (e) => {
    setUsername(e.target.value);
  }

  /* Detect Change In Email */
  const onEmailChange = (e) => {
    setEmail(e.target.value);
  }

  /* Detect Change In Password */
  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  }

  /* Detect Change In Confirm Password */
  const onConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  }

  /* Submitting form data to backend */
  const handleSubmit = e => {
    e.preventDefault();
    const formSubmitData = {
      'username' : username,
      'password' : password,
      'email'    : email,
      'confirmPassword' : confirmPassword
    }
    console.log('Data - ', formSubmitData);
    console.log('JSON Data - ', JSON.stringify(formSubmitData) );
  }

  return(
    <div className='text-center'>
      <Container>

        {/* CARD */}
        <Card className='my-2 py-2 rounded bg-light px-4'>

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
          <Card.Footer>
            { /* Login button */ }
            <Button variant='danger' 
                    size='md' 
                    onClick={{}}
                    className='px-5'>
              Create Account
            </Button>
          </Card.Footer>

        </Card>
      </Container>
    </div>
  );
}

export default SignupScreen;
