import React from 'react'
import './StepsCounter.css'
import '../../images/bg-sidebar-desktop.svg'

const StepsCounter = (props) => {
  return (
    <div className='steps-container'>
    <div className='step-container'>
    <div className={`step-digit ${props.currentStep === 1 ? 'active' : ''}`}>1</div>
    <div className='info-step-sidebar-container'><p>STEP 1</p>
    <p>YOUR INFO</p></div>
    </div>
    <div className='step-container'>
    <div className={`step-digit ${props.currentStep === 2 ? 'active' : ''}`}>2</div>
    <div className='info-step-sidebar-container'><p>STEP 2</p>
    <p>SELECT PLAN</p></div>
    </div>
    <div className='step-container'>
    <div className={`step-digit ${props.currentStep === 3 ? 'active' : ''}`}>3</div>
    <div className='info-step-sidebar-container'><p>STEP 3</p>
    <p>ADD-ONS</p></div>
    </div>
    <div className='step-container'>
    <div className={`step-digit ${props.currentStep >= 4 ? 'active' : ''}`}>4</div>
    <div className='info-step-sidebar-container'><p>STEP 4</p>
    <p>SUMMARY</p></div>
    </div>
    </div>
  )
}

export default StepsCounter