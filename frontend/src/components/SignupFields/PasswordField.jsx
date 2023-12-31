/*
 * Password Field of Signup Form
 */

// React
import { useState, useEffect } from 'react';

/* 
 * LOCAL-MODULES 
 */

// Components
import InputField     from '../InputField';
import { passwordProps } from '../InputProps';

// Alert Text Messages
import { passwordAlertMsg } from '../../validation/AlertMessage';

// Validation Limits
import { passwordLimit }    from '../../validation/AlertLimit';

// Testing 
import { passwordTesting }  from '../../validation/test/passwordTesting';

console.log('Passwordfield Executed!');

/*
 * Return Password Form Field OBJECT
 * with password, passwordValid, state value
 */
function PasswordField() {

  /* PASSWORD STATES */
  const [ password,        setPassword ]        = useState('');
  const [ passwordErrList, setPasswordErrList ] = useState([]);
  const [passwordValid,    setPasswordValid]    = useState(null);

  /* OnpageLoad, set default error msg */
  useEffect(() => {
    setPasswordErrList(passwordAlertMsg);

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
        let copyErrState  = [...passwordErrList];

        /* 
         * Testing input value against test cases and 
         * update error message visibility accordingly
         */
        copyErrState = passwordTesting( i, copyErrState, 
                                           passwordInput,
                                           passwordInputLen );
        setPasswordErrList(copyErrState);

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
      <InputField 

          // Static Props
          id           = {passwordProps.id} 
          label        = {passwordProps.label}
          type         = {passwordProps.type}
          placeholder  = {passwordProps.placeholder}
          successMsg   = {passwordProps.successMsg} 
          showErrStatus= {passwordProps.showErrStatus}

          // Dynamic Props
          value      = {password}
          onChange   = {onPasswordChange}
          isValid    = {passwordValid}
          isInvalid  = { passwordValid !== null 
                            && 
                         !passwordValid }
          errMsgList = {passwordErrList} />

    ) /* JSX ENDS */
  }; /* Returned OBJECT */
}   /* PasswordField FUNC. ENDS */

export {PasswordField};

