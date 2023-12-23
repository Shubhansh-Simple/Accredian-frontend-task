/*
 * For displaying recieved messages in application
 * return - JSX
 */

// React-icons
import { TiTick }   from 'react-icons/ti';
import { MdCancel } from "react-icons/md";

/*
 * Show success message with 
 * Tick icon and success colors
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
 * Show error message with 
 * Cancel icon and danger colors
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
 * Show success/failure message 
 * with their respective icons and colors
 * based on it's visiblity
 */
function Message( {msg} ){
  if ( msg.visibility )
    return <ErrMessage msg={msg.msg} />
  else
    return <SuccessMessage msg={msg.msg} />
}

/*
 * Iterate through entire message list if it's exist
 * and show only error messages based on it's visiblity 
 */
function ErrMessageList( { msgList=[] } ){
  if ( msgList.length > 0 )
    return (
        msgList
          .filter( msg => msg.visibility === true )
          .map( (msg,index) =>{
              return <ErrMessage key={index} msg={msg.msg} />
          })
    );
}

/*
 * Iterate through entire message list if it's exist
 * Filter success and failure messages
 * & show both of them with their
 * individual icons and colors
 */
const MessageList = ( { msgList=[] }) => {
  if ( msgList.length > 0 )
    return (
        msgList.map((msg, index) => {
          return <Message key={index} msg={msg} />
        })
    );
}


export { MessageList, 
  SuccessMessage, 
  ErrMessage, 
  ErrMessageList 
};



