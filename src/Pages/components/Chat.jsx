import React from 'react';
import Messages from './Messages';
import Cam from '../../image/camera.png';
import Add from '../../image/add.png';
import More from '../../image/more.png';

const Chat = () => {
    return (
        <div className='chat'>
            <div className="chatInfo">
                <span>Jane</span>
                <div className="chatIcons">
                    <img src={Cam} alt="" />
                    <img src={Add} alt="" />
                    <img src={More} alt="" />
                </div>
            </div>
            <Messages/>
        </div>
    )

}
export default Chat;