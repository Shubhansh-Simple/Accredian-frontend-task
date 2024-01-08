/*
 * For just practicing the react component
 */

// Local
// import users from '../sampleUsers';
import { useState, useEffect } from 'react'; 

import {Button} from 'react-bootstrap';

const PracticeScreen = () => {

  const messageList = [
    {
      'visibility': true,
      'msg': 'Username must be atleast of 6 characters'
    },
    {
      'visibility': true,
      'msg': 'Username must not be more than 12 characters'
    },
    {
      'visibility': true,
      'msg': 'No spaces allowed'
    },
    {
      'visibility': true,
      'msg': 'Only these special characters allowed'
    },
    {
      'visibility': true,
      'msg': 'Username already exist'
    },
  ]

  const [usernameErr, setUsernameErr] = useState(messageList);


  const onButtonClick = ()=>{
    console.log('Button Clicked');

    let currentVal = [...usernameErr];
    console.log("value of currentVal - ", currentVal);
    currentVal[2].visibility=false;

    setUsernameErr( currentVal );
  }

  useEffect(() => {
    console.log('Value of usernameErr before - ', usernameErr);
    setUsernameErr(messageList);
  }, []);

  return (
    <div className='text-center'>
      {/* In order to run a logic in UI */}
      <h1 className='text-center text-danger'>Practice Page</h1>
      <br />
      <hr />
      <h1 className='text-center text-info'>Checking value of messageList</h1>
      <h1>{usernameErr.length}</h1>
      {
        usernameErr.map( (msg,index) =>{
          if ( msg.visibility )
            return <h4 key={index}>{index+1}.) {msg.msg}</h4>
        })
      }
      <br />
      <br />
      <Button className='btn-success btn-lg' onClick={onButtonClick}>Change State</Button>
      <hr />
    </div>
  );
};

export default PracticeScreen;
