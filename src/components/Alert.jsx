/*
 * For displaying recieved messages in application
 * return - JSX
 */

// React-icons
import { TiTick }   from 'react-icons/ti';
import { MdCancel } from "react-icons/md";

/*
 * Show success message with Tick icon and colors
 */
function SuccessMessage( {msg='Success'} ){
  return (
    <div className='text-success'>
      <TiTick />&nbsp;&nbsp;
      <b>{msg}</b>
    </div>
  );
}

/*
 * Show error message with Cancel icon and colors
 */
function ErrMessage( {msg='Fail'} ){
  return (
    <div className='text-danger'>
      <MdCancel />&nbsp;&nbsp;
      <b>{msg}</b>
    </div>
  );
}

/*
 * Iterate through entire message list if it's exist
 * also showing message based on it's visiblity 
 */
function ErrMessageList( {msgList=[], greenTick=false} ){
  return (
    <>
      {
        msgList 
          &&
        <div>
          {
            msgList
              .filter( msg => msg.visibility === true )
              .map( (msg,index) =>{
                  return <ErrMessage key={index} msg={msg.msg} />
              })
          }
        </div>
      }
    </>
  );
}

const Message = ( {msg, greenTick} ) =>{
  if ( greenTick ){
    if ( msg.visibility )
      return <ErrMessage msg={msg.msg} />
    else
      return <SuccessMessage msg={msg.msg} />
  }
  else if( msg.visibility ){
    return <ErrMessage msg={msg.msg} />
  }
}

const MessageIterate = ( {msgList, greenTick}) => {
  return (
    <>
      {
        msgList
          &&
        msgList.map((msg, index) => {
          return <Message key={index} 
                          msg={msg} 
                          greenTick={greenTick} />
        })
      }
    </>
  );
}


export { MessageIterate, SuccessMessage, ErrMessage, ErrMessageList };



