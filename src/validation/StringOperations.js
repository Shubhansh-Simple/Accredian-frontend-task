/*
 * Contains generals string operations
 */

import { ascii_range, specialCharacter } from './AlertLimit';

/*
 * Check weather given char exist 
 * or not in given string 
 */
function hasCharacter( char, string, length ){
  for (let i = 0; i < length; i++) {
    if ( string[i] === char) 
      return true;
  }
  return false;
}

/*
 * Check weather atleast one lower 
 * character exist or not in given string
 */
function hasLower( string, length ){

  for (let i = 0; i < length; i++) {

    // Input character ascii value
    let ascii = string[i].charCodeAt(0)

    let start = ascii_range.lower.start;
    let end   = ascii_range.lower.end;

    if ( start <= ascii && ascii <= end )
      return true;
  }
  return false;
}

/*
 * Check weather atleast one upper 
 * character exist or not in given string
 */
function hasUpper( string, length ){

  for (let i = 0; i < length; i++) {

    // Input character ascii value
    let ascii = string[i].charCodeAt(0)

    let start = ascii_range.upper.start;
    let end   = ascii_range.upper.end;

    if ( start <= ascii && ascii <= end )
      return true;
  }
  return false;
}

/*
 * Check weather atleast one digit 
 * character exist or not in given input
 */
function hasDigit( string, length ){

  for (let i = 0; i < length; i++) {

    // Input character ascii value
    let ascii = string[i].charCodeAt(0)

    let start = ascii_range.digit.start;
    let end   = ascii_range.digit.end;

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
    if ( specialCharacter[string[i]] ) 
      return true;
  }
  return false;
}


export {
  hasCharacter,
  hasLower,
  hasUpper,
  hasDigit,
  hasSpecialCharacter
};



