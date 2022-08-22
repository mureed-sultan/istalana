import React from 'react'

function Menu() {
  return (
    <div id="menu">

   <div className='menu-container'>
    <div className="logo">
        <p>Istalan</p>
    </div>
    <div className="menu-list">
        <ul>
            <li><a href='/'>About</a></li>
            <li><a href='/'>Services</a></li>
            <li><a href='/'>Credentials</a></li>
            <li><a href='/'>Our Work</a></li>
            <li><a href='/'>investors</a></li>
            <li><a href='/'>Feed</a></li>
            <li><a href='/'>Get in Touch</a></li>
        </ul>
    </div>
    
    </div>
   </div>
  )
}

export default Menu