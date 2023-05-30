import React from 'react';
import Messages from './Messages';
import Input from './Input';
import Video from '../../image/video-call.png';
import Add from '../../image/add.png';
import More from '../../image/more.png';

const Chat = () => {
    return (
        <div className='chat'>
            <div className="chatInfo">
                <span>Jane</span>
                <div className="chatIcons">
                    <img src={Video} alt="" />
                    <img src={Add} alt="" />
                    <img src={More} alt="" />
                </div>
            </div>
            <Messages/>
            <Input/>
        </div>
    )

}
export default Chat;