/*
 * Email Field of Signup Form
 */

/* 
 * MODULES 
 */

// React
import { useState,useEffect } from 'react';

// React-bootstrap
import { Form }     from 'react-bootstrap'; 

/* 
 * LOCAL-MODULES 
 */

// Components
import { SuccessMessage,
         ErrMessage,
         MessageIterate  } from '../Alert';

// Alert Components
import { emailAlertMsg } from '../../validation/AlertMessage';

// Validation Limits
import { emailLimit }    from '../../validation/AlertLimit';

// Testing 
import { emailTesting }  from '../../validation/test/emailTesting';


/*
 * Return Email Form Field OBJECT
 * with email, emailValid  state value
 */
function EmailField() {

  /* EMAIL STATES */
  const [ email, setEmail ]         = useState('');
  const [ emailErr, setEmailErr ]   = useState([]);
  const [emailValid, setEmailValid] = useState(null);

  /* OnpageLoad, set default error msg */
  useEffect(() => {
    setEmailErr(emailAlertMsg);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* Detect changes in EMAIL */
  const onEmailChange = e => {
    const emailInput = e.target.value;
    setEmail(emailInput);

    setEmailValid(true);

    // /* Demo testing */
    // if ( emailInput.length > 5 )
    //   checkSubmitBtn();
  }

  /* ------OBJECT WITH JSX CODE---------- */
  return {
    email,
    emailValid,
    EmailFieldJSX : (

      /* EMAIL FIELD (2/4) */
      <Form.Group className='mb-2 px-2 py-3' controlId='formEmail'>
        <Form.Label>
          <strong>Email</strong>
        </Form.Label>
        <Form.Control size='lg' 
                      type='email' 
                      value={email}
                      onChange={onEmailChange}
                      isValid={emailValid}
                      isInvalid={ emailValid !== null 
                                    && 
                                !emailValid }
                      placeholder='example@email.com' />
        <Form.Text>Note : Email will be validated through OTP</Form.Text>

        {/* Show feedback msg on form invalid */}
        <Form.Control.Feedback type='invalid'>
          <ErrMessage msg={'Enter a valid Email'}/>
        </Form.Control.Feedback>

        {/* Show feedback msg on form valid */}
        <Form.Control.Feedback type='valid'>
          <SuccessMessage msg={emailLimit.success_msg} />
        </Form.Control.Feedback>

      </Form.Group>

    ) /* JSX ENDS */
  }; /* Returned OBJECT */
}   /* EmailField FUNC. ENDS */

export {EmailField};


