/*
 * Password Field of Signup Form
 */

/* 
 * MODULES 
 */

// React
import { useState, useEffect } from 'react';

// React-bootstrap
import { Form }     from 'react-bootstrap'; 

/* 
 * LOCAL-MODULES 
 */

// Components
import { SuccessMessage, MessageIterate  } from '../Alert';

// Alert Components
import { passwordAlertMsg } from '../../validation/AlertMessage';

// Validation Limits
import { passwordLimit }    from '../../validation/AlertLimit';

// Testing 
import { passwordTesting }  from '../../validation/test/passwordTesting';


/*
 * Return Password Form Field OBJECT
 * with password, passwordValid, state value
 */
function PasswordField() {

  /* PASSWORD STATES */
  const [ password,    setPassword ]      = useState('');
  const [ passwordErr, setPasswordErr ]   = useState([]);
  const [passwordValid, setPasswordValid] = useState(null);

  /* OnpageLoad, set default error msg */
  useEffect(() => {
    setPasswordErr(passwordAlertMsg);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* Detect changes in PASSWORD */
  const onPasswordChange = e => {

    // Current value of input field
    const passwordInput    = e.target.value;
    const passwordInputLen = passwordInput.length

    // Set state as current value
    setPassword( passwordInput );

    /* TEST - Non-Empty Input */
    if ( passwordInputLen > 0 ){

      let testPass = 0;

      /* 
       * Testing user inputs on each key stroke 
       */
      for (let i = 0; i < passwordLimit.total_validations; i++) {

        // Copy of current err msg state
        let copyErrState  = [...passwordErr];

        /* 
         * Testing input value against test cases and 
         * update error message visibility accordingly
         */
        copyErrState = passwordTesting( i, copyErrState, 
                                           passwordInput,
                                           passwordInputLen );
        setPasswordErr(copyErrState);

        (
          copyErrState[i].visibility
                ?
          /* If err visibility is true then field become invalid */
          setPasswordValid(false)
                :
          /* Otherwise, test pass and counted */
          testPass += 1
        )
      } // LOOPS ENDS

      /* PASSWORD - ALL TEST CASES PASS */
      if (testPass === passwordLimit.total_validations)
        setPasswordValid(true);
    }

    /* TEST - Empty Input */
    else
      setPasswordValid(null);
  }

  /* ------OBJECT WITH JSX CODE---------- */
  return {
    password,
    passwordValid,
    PasswordFieldJSX : (

      /* PASSWORD FIELD (3/4) */
      <Form.Group className='mb-2 px-2 py-3' controlId='formPassword'>

        {/* Field Label */}
        <Form.Label>
          <strong>Password</strong>
        </Form.Label>

        {/* Field Input */}
        <Form.Control required
                      size='lg' 
                      type='password' 
                      value={password}
                      onChange={onPasswordChange}
                      isValid={passwordValid}
                      isInvalid={ passwordValid !== null 
                                    && 
                                 !passwordValid }
                      placeholder='Password' />
         
        {/* Show feedback msg on form invalid */}
        <Form.Control.Feedback type='invalid'>
          <MessageIterate msgList={passwordErr} greenTick={true} />
        </Form.Control.Feedback>

        {/* Show feedback msg on form valid */}
        <Form.Control.Feedback type='valid'>
          <SuccessMessage msg={passwordLimit.success_msg} />
        </Form.Control.Feedback>

      </Form.Group>

    ) /* JSX ENDS */
  }; /* Returned OBJECT */
}   /* PasswordField FUNC. ENDS */

export {PasswordField};

