import React from 'react'
import '../css/chat.css'
import ChatHeader from './ChatHeader'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import Message from './Message'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import {selectChannelName,selectChannelId} from '../features/appSlice'
function Chat() {
    const user = useSelector(selectUser);
    const ChannelId=useSelector(selectChannelId);
    const ChannelName=useSelector(selectChannelName);
  console.log(ChannelName)
    return (
        <div className="chat">
    
            <ChatHeader 
            channelName={ChannelName}/>
            <div className="chat__messages">
               <Message/>
               <Message/>
               <Message/>
            </div>
            <div className="chat__input">
              <AddCircleIcon fontSize="large"/>
              <form>
                  <input placeholder={"Massage #TESTCHANNEL"}/>
                  <button className="chat__inputButton" type="submit">
                      Send Message
                  </button>
              </form>
              <div className="chat__inputIcons">
                <CardGiftcardIcon fontSize="large"/>
                <GifIcon fontSize="large"/>
                <EmojiEmotionsIcon fontSize="large"/>
              </div>
            </div>
        </div>
    )
}

export default Chat