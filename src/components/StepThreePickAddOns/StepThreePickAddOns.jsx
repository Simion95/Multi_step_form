import './StepThreePickAddOns.css'
import React, { useState, useEffect } from 'react'

const StepThreePickAddOns = (props) => {

  const [onlineService, setOnlineService] = useState(false);
  const [largerStorage, setLargerStorage] = useState(false);
  const [customizableProfile, setCustomizableProfile] = useState(false);



  const handleOnlineService = () => {
    const newValue = !onlineService;
    setOnlineService(newValue);
    const valueToUpdate = newValue ? 'Online Service' : undefined;
    const priceToUpdate = newValue ? (props.isYearly ? 10 : 1) : undefined;
    props.handleChange({ target: { id: 'typeAddOns', value: valueToUpdate } });
    props.handleChange({ target: { id: 'priceAddOnsOnlineService', value: priceToUpdate } });
  };

  const handleLargerStorage = () => {
    const newValue = !largerStorage;
    setLargerStorage(newValue);
    const valueToUpdate = newValue ? 'Larger Storage' : undefined;
    const priceToUpdate = newValue ? (props.isYearly ? 20 : 2) : undefined;
    props.handleChange({ target: { id: 'typeAddOns2', value: valueToUpdate } });
    props.handleChange({ target: { id: 'priceAddOnsLargerStorage', value: priceToUpdate } });
  };

  const handleCustomizableProfile = () => {
    const newValue = !customizableProfile;
    setCustomizableProfile(newValue);
    const valueToUpdate = newValue ? 'Customizable Profile' : undefined;
    const priceToUpdate = newValue ? (props.isYearly ? 20 : 2) : undefined;
    props.handleChange({ target: { id: 'typeAddOns3', value: valueToUpdate } });
    props.handleChange({ target: { id: 'priceCustomizableProfile', value: priceToUpdate } });
  };

  return (
    <div className='form-container'>
      <h3>Pick Add-Ons</h3>
      <p className='head-paragraph'>Add-Ons help enhance your gaming experience.</p>
      <div className='type-plan-container type-add-ons-container'>
        <div className={`${onlineService ? 'type-add-ons-contain-ticked' : ''} type-add-ons-contain`} >
          <div>
            <input type="checkbox" checked={onlineService} onChange={handleOnlineService}/>
            <div>
              <h4>Online service</h4>
              <p>Acces to multiplayer games</p>
            </div>
          </div>
          <p className={props.isYearly ? 'hide' : 'block'}>+$1/mo</p>
          <p className={props.isYearly ? 'block' : 'hide'}>+$10/yr</p>
        </div>
        <div className={`${largerStorage ? 'type-add-ons-contain-ticked' : ''} type-add-ons-contain`} >
          <div>
            <input type="checkbox" checked={largerStorage} onChange={handleLargerStorage}/>
            <div>
              <h4>Larger storage</h4>
              <p>Extra 1TB of cloud save</p>
            </div>
          </div>
          <p className={props.isYearly ? 'hide' : 'block'}>+$2/mo</p>
          <p className={props.isYearly ? 'block' : 'hide'}>+$20/yr</p>
        </div>
        <div className={`${customizableProfile ? 'type-add-ons-contain-ticked' : ''} type-add-ons-contain`} >
          <div>
            <input type="checkbox" checked={customizableProfile} onChange={handleCustomizableProfile}/>
            <div>
              <h4>Customizable profile</h4>
              <p>Custom theme on your profile</p>
            </div>
          </div>
          <p className={props.isYearly ? 'hide' : 'block'}>+$2/mo</p>
          <p className={props.isYearly ? 'block' : 'hide'}>+$20/yr</p>
        </div>
      </div>
    </div>
  );
};

export default StepThreePickAddOns;
