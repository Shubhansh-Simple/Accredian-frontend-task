/*
 * Test functions on custom criteria
 * of each field
 */

// Field Validation
import { usernameLimit }    from '../validation/AlertLimit';

// Data
import users                from '../sampleUsers';

/* 
 * HELPING FUNC.
 * Check weather char exist in given string 
 * return true/false
 */
function hasCharacter( char, string, length ){
  for (let i = 0; i < length; i++) {
    if ( string[i] === char) 
      return true;
  }
  return false;
}

/*
 * Return updated value for UserErrMsg state
 * after validating the given value 
 * against all test cases
 */
const usernameTesting=( id,usernameErrState,inputValue,inputLength )=>{
  /* TEST Criteria
   *   1.) Mininum length 
   *   2.) Maximum length 
   *   3.) No spaces allowed 
   *   4.) Some special char not allowed 
   *   5.) Username already exist 
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
    default: ;

  } // SWITCH-CASE-ENDS

  return usernameErrState;
} // usernameTesting() ENDS

/*
 * Testing password input value 
 * against below criteria
 */
const passwordTesting = ()=> {
  /* TEST Criteria
   *   1.) Mininum length 
   *   2.) Maximum length 
   *   3.) Have at least one lower case letter 
   *   4.) Have at least one upper case letter 
   *   5.) Have at least one digit 
   *   6.) Have at least one special character 
   */
} 

export {usernameTesting, passwordTesting};
