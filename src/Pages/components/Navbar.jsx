import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Let's Chat</span>
      <div className="user">
        <img src="https://images.unsplash.com/photo-1664575602554-2087b04935a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60" alt=""/>
        <span>Renuka</span>
        <button>logout</button>
      </div>

    </div>
  )
}

export default Navbar