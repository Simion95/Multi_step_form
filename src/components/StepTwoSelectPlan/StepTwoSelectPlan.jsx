import React, { useState } from 'react';
import './StepTwoSelectPlan.css';
import IconArcade from '../../images/icon-arcade.svg';
import IconAdvanced from '../../images/icon-advanced.svg';
import IconPro from '../../images/icon-pro.svg';
import {plans} from './Plans/Plans'




const StepTwoSelectPlan = (props) => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  

  const handleSwitchChange = () => {
    props.setIsYearly(!props.isYearly);
    props.customer.pricePlan = undefined;
    props.customer.typePlan = undefined;
    props.customer.priceAddOnsLargerStorage = undefined;
    props.customer.priceAddOnsOnlineService = undefined;
    props.customer.priceCustomizableProfile = undefined;
    props.customer.typeAddOns = undefined;
    props.customer.typeAddOns2 = undefined;
    props.customer.typeAddOns3 = undefined;
    setSelectedPlan(null);
  };
  
  const handlePlanSelection = (plan) => {
    setSelectedPlan(plan);
    props.handleChange({ target: { id: 'typePlan', value: plan.type } }); 
    props.handleChange({ target: { id: 'pricePlan', value: props.isYearly ? plan.yearlyPrice : plan.monthlyPrice } }); 
  };

  return (
    <div className='form-container selector-container'>
      <h3>Select your plan</h3>
      <p className='head-paragraph'>You have the option of monthly or yearly billing.</p>
      <div className='type-plan-container'>
        {plans.map((plan, index) => (
          <div key={index} className={`${selectedPlan === plan ? 'type-plan-contain-blue' : ''} type-plan-contain`} onClick={() => handlePlanSelection(plan)}>
            <img src={index === 0 ? IconArcade : index === 1 ? IconAdvanced : IconPro} alt="" />
            <div>
              <h4>{plan.type}</h4>
              <p className={props.isYearly ? 'hide' : 'block'}>${plan.monthlyPrice}/mo</p>
              <p className={props.isYearly ? 'block' : 'hide'}>${plan.yearlyPrice}/yr</p>
              <span className={`${props.isYearly ? 'block' : 'hide'} color`}>2 months free</span>
            </div>
          </div>
        ))}
      </div>
      <div className='switch-plan-container'>
        <span className={props.isYearly ? 'span-left' : 'color-span-left'}>Monthly</span>
        <div className="switch-container">
          <input type="checkbox" id="switch" checked={props.isYearly} onChange={handleSwitchChange} />
          <label htmlFor="switch" className={`${props.isYearly ? 'switch--checked' : ''} switch`}></label>
          <div className="switch-track"></div> 
        </div>
        <span className={props.isYearly ? 'color-span-right' : 'span-right'}>Yearly</span>
      </div>
    </div>
  )
}

export default StepTwoSelectPlan;