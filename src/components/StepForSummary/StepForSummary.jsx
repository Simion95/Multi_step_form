import React from 'react';
import './StepForSummary.css';

const StepForSummary = (props) => {
  const { customer, isYearly } = props;
  const { typePlan, pricePlan, typeAddOns, priceAddOnsOnlineService, typeAddOns2, priceAddOnsLargerStorage, typeAddOns3, priceCustomizableProfile } = customer;

   const total = (pricePlan || 0) +
    (priceAddOnsOnlineService || 0) +
    (priceAddOnsLargerStorage || 0) +
    (priceCustomizableProfile || 0);
    
    const handleChangeStep = () => {
      props.setCurrentStep(2);
      props.customer.pricePlan = undefined;
      props.customer.typePlan = undefined;
      props.customer.priceAddOnsLargerStorage = undefined;
      props.customer.priceAddOnsOnlineService = undefined;
      props.customer.priceCustomizableProfile = undefined;
      props.customer.pricePlan = undefined;
      props.customer.typeAddOns = undefined;
      props.customer.typeAddOns2 = undefined;
      props.customer.typeAddOns3 = undefined;
    };

  return (
    <div className='form-container'>
      <h3>Finishing Up</h3>
      <p className='head-paragraph'>Double-check everything looks OK before confirming.</p>
      <div className='summary-container'>
        <div className='plan-container'>
          <div>
            <p>{typePlan}</p>
            <p className='change-button-plan' onClick={handleChangeStep}>Change</p>
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