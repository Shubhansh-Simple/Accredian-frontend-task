/*
 * HomeScreen of our application
 */

import { useEffect } from 'react';

import { Row } from 'react-bootstrap';

/*
 * Sending the get request
 * with the token
 * if authenticated then stay
 * otherwise redirect to the
 * Login page
 * useEffect()
 */

const HomeScreen = () => {
  /* Send get request to the server
   * which decides weather i stay
   * or redirected to login page
   */
  useEffect(() => {
    console.log('Use Effect is called.');
  }, []);

  return (
    <div className="d-flex align-items-center  justify-content-center vh-100"> 
      <Row className='text-center'>
        <h2>Welcome To Home, Shubhansh</h2>
        <h6>
          <i className='text-success'>( Login Successfully )</i>
        </h6>
      </Row>
    </div>
  );
};

export default HomeScreen;


