import { useContext } from "react";
import Messages from './Messages';
import Input from './Input';
import Video from '../../image/video-call.png';
import Add from '../../image/add.png';
import More from '../../image/more.png';
import { ChatContext } from "../../context/ChatContext";


const Chat = () => {
    const { data } = useContext(ChatContext);
    return (
        <div className='chat'>
            <div className="chatInfo">
            <span>{data.user?.displayName}</span>
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