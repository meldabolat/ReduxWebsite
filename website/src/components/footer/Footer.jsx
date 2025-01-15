import React from 'react'
import './Footer.css'
import { FaLocationDot } from 'react-icons/fa6'
import {  FaPhone, FaEnvelope } from 'react-icons/fa'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { footerLinks } from '../../data'
import payment from '../../assets/payment.png'

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-left'>
            <h1 className='footer-logo'>Rise Of Coding</h1>
            <p className='footer-desc' > Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime modi,
                 asperiores laudantium placeat nemo eos tempora consequuntur pariatur repudiandae velit!</p>
                <div className='social-container'>
                    <div className='social-icon' style={{backgroundColor:'#3B5999'}}><FaFacebook/></div>
                    <div className='social-icon' style={{backgroundColor:'#55ACEE'}}><FaTwitter/></div>
                    <div className='social-icon' style={{backgroundColor:'#DD1343'}}><FaInstagram/></div>
                    <div className='social-icon' style={{backgroundColor:'#0077B5'}}><FaLinkedin/></div>
                </div>
        </div>
       <div className='footer-center'>

        <h3>Useful Links</h3>
        <ul className='footer-list'>
            {footerLinks.map(link => (
                <li key={link.id} className='footer-list-item'>{link.title}</li>
            ))}

        </ul>
       
        </div>  
        <div className='footer-right'>
            <h3 className='footer-title'>Contact</h3>
            <div className='contact-item'>
                <FaLocationDot style={{marginRight:'10px'}}/>123 Street, city

            </div>
            <div className='contact-item'>
                <FaPhone style={{marginRight:'10px'}}/>+123 456 7890

            
            </div>              
            <div className='contact-item'>
                <FaEnvelope style={{marginRight:'10px'}}/>

        </div>  
        
        <img className='payment' alt="" src={payment}/>
        </div>  </div>

 
  )
}

export default Footer