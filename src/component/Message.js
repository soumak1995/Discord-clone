import { Avatar } from '@material-ui/core'
import React from 'react'
import '../css/Message.css'
function Message({timestamp,
    message,
    user}) {
        console.log(user)
    return (
        <div className="message">
            <Avatar
            alt={user?.displayName} 
            src={user?.photo}
             />
            <div className="message_info">
                 <h4>{user?.displayName}
                     <span className="message__timestamp">
                     {timestamp?.toDate().toUTCString()}
                     </span>
                 </h4>
                 <p>{message}</p>
            </div>
        </div>
    )
}

export default Message
