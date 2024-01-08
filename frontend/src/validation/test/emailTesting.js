/*
 * Test functions on custom criteria
 * email field
 */

// Field Validation
import { emailLimit } from '../AlertLimit';
import { hasCharacter }  from '../StringOperations';

// Data
import users from '../../sampleUsers';


/*
 * TESTING - EMAIL
 * against below test cases
 * Return - Updated ErrMsgState value for updating state
 */

const emailTesting=( id,
                     emailErrState, 
                     inputValue, 
                     inputLength )=>{
  /* TEST Criteria
   *   CASE 0 - Mininum length 
   *   CASE 1 - Maximum length 
   *   CASE 2 - No spaces allowed 
   *   CASE 3 - Some special char not allowed 
   *   CASE 4 - email already exist 
   */
  var check = null;

  switch (id) {

    /* TEST -  Split with @ compulsory */
    case 0:
      check = !hasCharacter('@', inputValue, inputLength);
      /*
       * The @ symbol must exist in the email
       */
      break;

    /* TEST -  Maximum length */
    case 1:
      check = inputLength > emailLimit.max_len;
      break;

    /* TEST -  No spaces allowed */
    case 2:
      break;

    /* TEST -  '.'period not allowed at begin and at end*/
    case 3:
      check = inputValue.charAt(0) === '.' 
                  || 
              inputValue.charAt( inputLength-1 ) === '.'
      break;

    /* TEST -  email already exist */
    case 4:
      check = users.some(user => user.email === inputValue);
      break;

    /* DEFAULT */
    default:
      console.log('EMAIL,DEFAULT-CASE RAISED!'); 
      break;

  } // SWITCH-CASE-ENDS

  emailErrState[id].visibility = check;
  return emailErrState;

} // emailTesting() ENDS

export {emailTesting};



