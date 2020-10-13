import { Avatar } from '@material-ui/core'
import React from 'react'
import '../css/Message.css'
function Message() {
    return (
        <div className="message">
            <Avatar/>
            <div className="message_info">
                 <h4>Soumak
                     <span class="message__timestamp">
                         this is a timestamp
                     </span>
                 </h4>
                 <p>this a message</p>
            </div>
        </div>
    )
}

export default Message
