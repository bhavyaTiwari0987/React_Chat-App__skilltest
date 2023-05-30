import React from 'react'

const Message = () => {
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img src="https://images.unsplash.com/photo-1664575602554-2087b04935a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60" alt="" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>
          hello
        </p>
        <img src="https://images.unsplash.com/photo-1664575602554-2087b04935a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60" alt="" />
      </div>
    </div>
  )
}

export default Message