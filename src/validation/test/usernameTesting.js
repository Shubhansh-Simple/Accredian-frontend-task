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

export {usernameTesting};




