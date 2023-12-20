/*
 * Test functions on custom criteria
 * password field
 */

// Field Validation
import {
  ascii_range,   
  passwordLimit  }   from '../AlertLimit';

import {
  hasAlphaDigit, 
  hasSpecialCharacter } from '../StringOperations';

/*
 * TESTING - PASSWORD
 * against below test cases
 * Return - Updated ErrMsgState value for updating state
 */
const passwordTesting = ( id, 
                          passwordErrState, 
                          inputValue, 
                          inputLength )=> {
  /* TEST Criteria
   *   CASE 0 - Mininum length 
   *   CASE 1 - Maximum length 
   *   CASE 2 - Have at least one lower case letter 
   *   CASE 3 - Have at least one upper case letter 
   *   CASE 4 - Have at least one digit 
   *   CASE 5 - Have at least one special character 
   */
  var check;

  switch (id) {

    /* TEST -  Mininum length */
    case 0:
      passwordErrState[id].visibility = inputLength < passwordLimit.min_len;
      break;

    /* TEST -  Maximum length */
    case 1:
      passwordErrState[id].visibility = inputLength > passwordLimit.max_len;
      break;

    /* TEST -  Atleast one lower character */
    case 2:
      check     = !hasAlphaDigit( inputValue, 
                                  inputLength,
                                  ascii_range.lower.start,
                                  ascii_range.lower.end );
      passwordErrState[id].visibility = check;
      break;

    /* TEST -  Atleast one upper character */
    case 3:
      check     = !hasAlphaDigit( inputValue, 
                                  inputLength,
                                  ascii_range.upper.start,
                                  ascii_range.upper.end );
      passwordErrState[id].visibility = check;
      break;

    /* TEST -  Atleast one digit */
    case 4:
      check     = !hasAlphaDigit( inputValue, 
                                  inputLength,
                                  ascii_range.digit.start,
                                  ascii_range.digit.end );
      passwordErrState[id].visibility = check;
      break;

    /* TEST -  Atleast one special character */
    case 5:
      check     = !hasSpecialCharacter( inputValue,inputLength );
      passwordErrState[id].visibility = check;
      break;

    /* DEFAULT */
    default: 
      console.log('DEFAULT-CASE RAISED!'); 
      break;

  } // SWITCH-CASE-ENDS

  return passwordErrState;
} // passwordTesting() ENDS

export {passwordTesting};
