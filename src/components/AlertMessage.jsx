/*
 * For displaying recieved messages in application
 * return - JSX
 */

/*
 * Helper function
 * Display the recieved msg
 */
function ErrMessage( {msg} ){
  return (
    <div className='text-danger'>
      <li>
        <b>{msg}</b>
      </li>
    </div>
  );
}

/*
 * Iterate the recieved msg list &
 * display them sequentially
 */
function ErrMessageList( {msgList} ){
  return (
    <ul className='text-danger'>
      {
        msgList.map( (msg,index) => 
          <ErrMessage key={index} msg={msg} />
        )
      }
    </ul>
  );
}

export { ErrMessage, ErrMessageList };


