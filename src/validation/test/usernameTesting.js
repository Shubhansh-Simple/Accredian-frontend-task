/*
 * Test functions on custom criteria
 * username field
 */

// Field Validation
import { usernameLimit } from '../AlertLimit';
import { hasCharacter }  from '../StringOperations';


// Data
import users from '../../sampleUsers';

/*
 * TESTING - USERNAME
 * against below test cases
 * Return - Updated ErrMsgList value for updating state
 */
const usernameTesting=( id,
                        usernameErrList,
                        inputValue,
                        inputLength )=>{
  /* TEST Criteria
   *   CASE 0 - Mininum length 
   *   CASE 1 - Maximum length 
   *   CASE 2 - No spaces allowed 
   *   CASE 3 - Some special char not allowed 
   *   CASE 4 - Username already exist 
   */

  var check = null;

  switch (id) {

    /* TEST -  Mininum length */
    case 0:
      usernameErrList[id].visibility = inputLength < usernameLimit.min_len;
      break;

    /* TEST -  Maximum length */
    case 1:
      usernameErrList[id].visibility = inputLength > usernameLimit.max_len;
      break;

    /* TEST -  No spaces allowed */
    case 2:
      check = hasCharacter(' ', inputValue, inputLength);
      usernameErrList[id].visibility = check;
      break;

    /* TEST -  Some special char not allowed */
    case 3:
      // Not allowed - @
      check = hasCharacter( usernameLimit.not_allow_char,
                                       inputValue, 
                                       inputLength );
      usernameErrList[id].visibility = check;
      break;

    /* TEST -  Username already exist */
    case 4:
      check = users.some(user => user.username === inputValue);
      usernameErrList[id].visibility = check
      break;

    /* DEFAULT */
    default:
      console.log('DEFAULT-CASE RAISED!');
      break;

  } // SWITCH-CASE-ENDS

  return usernameErrList;
} // usernameTesting() ENDS

export {usernameTesting};




