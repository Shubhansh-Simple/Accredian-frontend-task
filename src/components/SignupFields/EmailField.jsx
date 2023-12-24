/*
 * Email Field of Signup Form
 */

// React
import { useState,useEffect } from 'react';

/* 
 * LOCAL-MODULES 
 */

// Components
import InputField     from '../InputField';
import { emailProps } from '../InputProps';

// Alert Components
import { emailAlertMsg } from '../../validation/AlertMessage';

// Validation Limits
import { emailLimit }    from '../../validation/AlertLimit';

// Testing 
import { emailTesting }  from '../../validation/test/emailTesting';

console.log('Emailfield Executed!');

/*
 * Return Email Form Field OBJECT
 * with email, emailValid, state value
 */
function EmailField() {

  /* EMAIL STATES */
  const [ email, setEmail ]         = useState('');
  const [ emailErrList, setEmailErrList ]   = useState([]);
  const [emailValid, setEmailValid] = useState(null);

  /* OnpageLoad, set default error msg */
  useEffect(() => {
    setEmailErrList(emailAlertMsg);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* Detect changes in EMAIL */
  const onEmailChange = e => {

    const emailInput    = e.target.value;
    const emailInputLen = emailInput.length;

    setEmail(emailInput);

    /* TEST - Non-Empty Input */
    if ( emailInputLen > 0 ){

      let testPass = 0;

      /*
       * Testing user inputs on each key stroke 
       */
      for (let i=0; i < emailLimit.total_validations; i++ ){

        // Copy of current err msg state
        let copyErrState  = [...emailErrList];

        /* 
         * Testing input value against test cases and 
         * update error message visibility accordingly
         */
        copyErrState = emailTesting(i, copyErrState,
                                       emailInput,
                                       emailInputLen);
        setEmailErrList(copyErrState);

        (
          copyErrState[i].visibility
                ?
          /* If err visibility is true then field become invalid */
          setEmailValid(false)
                :
          /* Otherwise, test pass and counted */
          testPass += 1
        )
      } // LOOPS ENDS

      /* USERNAME - ALL TEST CASES PASS */
      if (testPass === emailLimit.total_validations)
       setEmailValid(true);
    }

    /* TEST - Empty Input */
    else
      setEmailValid(null);
  }

  /* ------OBJECT WITH JSX CODE---------- */
  return {
    email,
    emailValid,
    EmailFieldJSX : (

      /* EMAIL FIELD (2/4) */
      <InputField 

          // Static Props
          id         = {emailProps.id} 
          label      = {emailProps.label}
          type       = {emailProps.type}
          placeholder= {emailProps.placeholder}
          helpText   = {emailProps.helpText}
          successMsg = {emailProps.successMsg} 

          // Dynamic Props
          value      = {email}
          onChange   = {onEmailChange}
          isValid    = {emailValid}
          isInvalid  = { emailValid !== null 
                            && 
                         !emailValid }
          errMsgList = {emailErrList} />

    ) /* JSX ENDS */
  }; /* Returned OBJECT */
}   /* EmailField FUNC. ENDS */

export {EmailField};


