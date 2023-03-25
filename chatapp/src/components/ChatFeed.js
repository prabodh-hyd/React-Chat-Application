import React from "react";


const ChatFeed = (props) =>{
  const { chats, activeChat, userName, messages } = props;
  const chat = chats && chats[activeChat];


  const renderMessages = () =>{
    const keys = Object.keys(messages);

    return keys.map((key, index) =>{
        const message = messages[keys];
        const lastMessagekey = index === 0 ? null : keys[index -1];
        const isMyMessage = userName === message.sender.username;


        return(
            <div key={`msg_ ${index}`} style={{width: '50%'}}>
              <div>
                
              </div>
            </div>
        )

    })
  }





}

export default ChatFeed;