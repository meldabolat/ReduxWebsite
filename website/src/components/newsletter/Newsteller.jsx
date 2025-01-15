import React from 'react'
import './Newsletter.css'
import { IoMdSend } from 'react-icons/io'
const Newsteller = () => {
  return (
    <div className='newsletter-container'>
        <h1 className='newsletter-title'>Newsletter</h1>
        <div className='newsletter-desc'> Waht's Fresh and New: Update You Don't Want toMiss</div>
        <div className='input-container'>
            <input className='newsletter-input' placeholder='Your Email' />
            <button className='newsletter-button'>
                <IoMdSend className='icon'/>
            </button>
        </div>

    </div>
  )
}

export default Newsteller