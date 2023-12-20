/*
 * Contains generals string operations
 */

import { ascii_range } from './AlertLimit';

/*
 * Check weather given char exist in given string 
 */
function hasCharacter( char, string, length ){
  for (let i = 0; i < length; i++) {
    if ( string[i] === char) 
      return true;
  }
  return false;
}

/*
 * Check weather one character
 * exist from alphanumeric in given string 
 */
function hasAlphaDigit( string, length, start, end ){
  for (let i = 0; i < length; i++) {
    let ascii = string[i].charCodeAt(0)

    if ( start <= ascii && ascii <= end )
      return true;
  }
  return false;
}


/*
 * Check weather one special character
 * exist in given string 
 */
function hasSpecialCharacter( string, length ){
  for (let i = 0; i < length; i++) {
    if ( ascii_range.specialCharacter[string[i]] ) 
      return true;
  }
  return false;
}


export {
  hasCharacter,
  hasAlphaDigit,
  hasSpecialCharacter
};



