import { EditLocationRoundedIcon, PeopleAltRounded } from '@material-ui/icons'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import NotificationsIcon from '@material-ui/icons/Notifications';
import EditLocationIcon from '@material-ui/icons/EditLocation';
import SendIcon from '@material-ui/icons/Send';
import SearchIcon from '@material-ui/icons/Search';
import HelpIcon from '@material-ui/icons/Help';
import React from 'react'
import '../css/ChatHeader.css'
function ChatHeader({channelName}) {
    return (
        <div className="chatHeader">
            <div className="chatHeader__left">
                <h3>
                    <span className="chatHeader__hash">
                        #
                    </span>
                    {channelName}
                    </h3>
            </div>
            <div className="chatHeader__right">
               <NotificationsIcon />
               <EditLocationIcon/>
               <PeopleAltRounded/>
               <div className="chatHeader-search">
                <input placeholder="Search"/>
                 <SearchIcon/>
               </div>
               <SendIcon/>
               <HelpIcon/>
            </div>
        </div>
    )
}

export default ChatHeader
