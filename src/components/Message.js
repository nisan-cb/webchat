import React from 'react';
import '../style/Message.css';
import ReactEmoji from 'react-emoji';

function Message({message:{user,text}, name}){

    let isSentByCurrentUser = false;
    const trimmedName = name.trim().toLowerCase();

    if(user === trimmedName){
        isSentByCurrentUser = true;
    }
    return(
        isSentByCurrentUser
        ?(
            <div className="messageContainer justifyEnd">
                <p className="sentText pr-10">{trimmedName}</p>
                <div className="messageBox backroundBlue">
                    <p className="messageText colorWithe">{ReactEmoji.emojify(text) }</p>
                </div>
            </div>
        )
        :(
            <div className="messageContainer justifyStart">
                <div className="messageBox backroundLight">
                    <p className="messageText colorDark">{ReactEmoji.emojify(text) }</p>
                </div>
                <p className="sentText pl-10">{user}</p>
            </div>
        )
        
    );
}

export default Message;