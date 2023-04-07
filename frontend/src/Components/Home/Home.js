import React from 'react'
import "./Home.css"

function Home() {
  return (
    <div className='Home'>
      <div className='Welcome'>Welcome</div>
      <div className='Summary'>This is a budgeting app our summary would go here.</div>
      <div className='Enter'>
        <button className='Login'>Login</button>
        <button className='Register'>Register</button>
      </div>
    </div>
  )
}

export default Home