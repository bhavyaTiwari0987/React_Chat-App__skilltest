import React from 'react';
import Attatch from '../../image/attatch.png';
import Cam from '../../image/camera.png';

const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='Type something...'/>
      <div className="send">
        <img src={Attatch} alt="" />
        <input type="file" style={{display: "none"}} id="file"/>
        <label htmlFor="file">
          <img src={Cam} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input