/*
 * Test functions on custom criteria
 * password field
 */

// Field Validation
import {passwordLimit}  from '../AlertLimit';

import {
  hasLower,
  hasUpper,
  hasDigit,
  hasSpecialCharacter } from '../StringOperations';

/*
 * TESTING - PASSWORD
 * against below test cases
 * Return - Updated ErrMsgList value for updating state
 */
const passwordTesting = ( id, 
                          passwordErrList, 
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
  var check = null;

  switch (id) {

    /* TEST -  Mininum length */
    case 0:
      check = inputLength < passwordLimit.min_len;
      break;

    /* TEST -  Maximum length */
    case 1:
      check = inputLength > passwordLimit.max_len;
      break;

    /* TEST -  Atleast one lower character */
    case 2:
      check = !hasLower(inputValue, inputLength);
      break;

    /* TEST -  Atleast one upper character */
    case 3:
      check = !hasUpper(inputValue, inputLength);
      break;

    /* TEST -  Atleast one digit */
    case 4:
      check = !hasDigit(inputValue, inputLength);
      break;

    /* TEST -  Atleast one special character */
    case 5:
      check     = !hasSpecialCharacter(inputValue, inputLength);
      break;

    /* DEFAULT */
    default: 
      console.log('PASSWORD,DEFAULT-CASE RAISED!'); 
      break;

  } // SWITCH-CASE-ENDS

  passwordErrList[id].visibility = check;
  return passwordErrList;

} // passwordTesting() ENDS

export {passwordTesting};
