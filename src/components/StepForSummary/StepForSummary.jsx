import React from 'react';
import './StepForSummary.css';
import { plans } from '../StepTwoSelectPlan/Plans/Plans';
import { useState } from 'react';

const StepForSummary = (props) => {
  const { customer, isYearly } = props;
  const { typePlan, pricePlan, typeAddOns, priceAddOnsOnlineService, typeAddOns2, priceAddOnsLargerStorage, typeAddOns3, priceCustomizableProfile } = customer;
  const initialPlanIndex = plans.findIndex(plan => plan.type === customer.typePlan);
  const [currentPlanIndex, setCurrentPlanIndex] = useState(initialPlanIndex);

   const total = (pricePlan || 0) +
    (priceAddOnsOnlineService || 0) +
    (priceAddOnsLargerStorage || 0) +
    (priceCustomizableProfile || 0);

    const handleChangePlan = () => {
      const nextPlanIndex = (currentPlanIndex + 1) % plans.length;
      setCurrentPlanIndex(nextPlanIndex);
    
      const nextPlan = plans[nextPlanIndex]; 
      props.handleChange({ target: { id: 'typePlan', value: nextPlan.type } }); 
      props.handleChange({ target: { id: 'pricePlan', value: props.isYearly ? nextPlan.yearlyPrice : nextPlan.monthlyPrice } }); // Actualizează prețul planului în funcție de opțiunea anuală/lunară
    };
    

    // const handleChangeStep = () => {
    //   props.setCurrentStep(2);
    //   props.customer.pricePlan = undefined;
    //   props.customer.typePlan = undefined;
      // props.customer.priceAddOnsLargerStorage = undefined;
      // props.customer.priceAddOnsOnlineService = undefined;
      // props.customer.priceCustomizableProfile = undefined;
      // props.customer.pricePlan = undefined;
      // props.customer.typeAddOns = undefined;
      // props.customer.typeAddOns2 = undefined;
      // props.customer.typeAddOns3 = undefined;
    // };

  return (
    <div className='form-container'>
      <h3>Finishing Up</h3>
      <p className='head-paragraph'>Double-check everything looks OK before confirming.</p>
      <div className='summary-container'>
        <div className='plan-container'>
          <div>
            <p>{typePlan}</p>
            <p className='change-button-plan' onClick={handleChangePlan}>Change</p>
          </div>
          {isYearly !== undefined && pricePlan && (
            <p>${pricePlan}/{isYearly ? 'yr' : 'mo'}</p>
          )}
        </div>
        <div className='details'>
          <p>{typeAddOns}</p>
          {isYearly !== undefined && priceAddOnsOnlineService && (
            <p>+${priceAddOnsOnlineService}/{isYearly ? 'yr' : 'mo'}</p>
          )}
        </div>
        <div className='details'>
          <p>{typeAddOns2}</p>
          {isYearly !== undefined && priceAddOnsLargerStorage && (
            <p>+${priceAddOnsLargerStorage}/{isYearly ? 'yr' : 'mo'}</p>
          )}
        </div>
        <div className='details'>
          <p>{typeAddOns3}</p>
          {isYearly !== undefined && priceCustomizableProfile && (
            <p>+${priceCustomizableProfile}/{isYearly ? 'yr' : 'mo'}</p>
          )}
        </div>
      </div>
      <div className='total'>
        <p>Total ({isYearly ? 'per year' : 'per month'})</p>
        <p>+${total}</p>
      </div>
    </div>
  );
};

export default StepForSummary;