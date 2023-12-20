/*
 * Test functions on custom criteria
 * of each field
 */

// Field Validation
import {
  ascii_range,   
  usernameLimit,
  passwordLimit  }   from '../validation/AlertLimit';

import {
  hasCharacter, 
  hasAlphaDigit, 
  hasSpecialCharacter } from './StringOperations';


// Data
import users from '../sampleUsers';

/*
 * TESTING - USERNAME
 * against below test cases
 * Return - Updated ErrMsgState value for updating state
 */
const usernameTesting=( id,usernameErrState,inputValue,inputLength )=>{
  /* TEST Criteria
   *   CASE 0 - Mininum length 
   *   CASE 1 - Maximum length 
   *   CASE 2 - No spaces allowed 
   *   CASE 3 - Some special char not allowed 
   *   CASE 4 - Username already exist 
   */
  switch (id) {

    /* TEST -  Mininum length */
    case 0:
      usernameErrState[id].visibility = inputLength < usernameLimit.min_len;
      break;

    /* TEST -  Maximum length */
    case 1:
      usernameErrState[id].visibility = inputLength > usernameLimit.max_len;
      break;

    /* TEST -  No spaces allowed */
    case 2:
      let spaceExist = hasCharacter(' ', inputValue, inputLength);
      usernameErrState[id].visibility = spaceExist;
      break;

    /* TEST -  Some special char not allowed */
    case 3:
      // Not allowed - @
      let bool = hasCharacter( usernameLimit.not_allow_char,
                                       inputValue, 
                                       inputLength );
      usernameErrState[id].visibility = bool;
      break;

    /* TEST -  Username already exist */
    case 4:
      let isExist = users.some(user => user.username === inputValue);
      usernameErrState[id].visibility = isExist;
      break;

    /* DEFAULT */
    default:
      console.log('DEFAULT-CASE RAISED!');
      break;

  } // SWITCH-CASE-ENDS

  return usernameErrState;
} // usernameTesting() ENDS

/*--------------------------------------------------*/

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

export {usernameTesting, passwordTesting};
