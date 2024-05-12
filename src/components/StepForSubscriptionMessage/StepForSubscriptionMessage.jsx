import React from 'react'
import './StepForSubscriptionMessage.css'
import IconThankYou from '../../images/icon-thank-you.svg'

const StepForSubscriptionMessage = () => {
  return (
    <div className='form-container subscription-container'>
<img src={IconThankYou} alt="" />
<h2>Thank you!</h2>
<p>Thanks for confirming subscription! We
    hope you have fun using our platform.
    If you ever need support, please feel
    free to email us at support@loremgaming.com.
</p>
    </div>
  )
}

export default StepForSubscriptionMessage