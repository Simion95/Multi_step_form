import React from 'react'
import './StepOneYourInfo.css'
import RenderErrorMessage from './RenderErrorMessage/RenderErrorMessage'

const StepOneYourInfo = props => {

  const { name = '', email = '', phone = '' } = props.customer;

   return (
    <form className='form-container'>
        <h3>Personal Info</h3>
        <p className='head-paragraph'>Please provide your name, email address, and phone number. </p>
        <div className='flex-row-error'>
        <label htmlFor="name">Name</label>
        <RenderErrorMessage error={props.error} value={name} />
        </div>
        <input type="text" id='name' value={name} className={props.error && !name.trim() ? 'error' : ''} onChange={props.handleChange} placeholder="e.g. Stephen King"/>
        <div className='flex-row-error'>
        <label htmlFor="email">Email Address</label>
        <RenderErrorMessage error={props.error} value={email} />
        </div>
        <input type="email" id='email' value={email} className={props.error && !email.trim() ? 'error' : ''} onChange={props.handleChange} placeholder="e.g. stephenking@lorem.com"/>
        <div className='flex-row-error'>
        <label htmlFor="phone">Phone Number</label>
        <RenderErrorMessage error={props.error} value={phone} />
        </div>
        <input type="tel" id='phone' value={phone} className={props.error && !phone.trim() ? 'error' : ''} onChange={props.handleChange} placeholder="e.g. +1 234 567 890"/>
    </form>
  );
}

export default StepOneYourInfo





