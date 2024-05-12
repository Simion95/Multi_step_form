import React from 'react';
import './BottomButtons.css';

const BottomButtons = (props) => {
  const isFinalStep = props.currentStep === 5;


  const handleNextButtonClick = () => {
    if (!areRequiredFieldsValid()) {
      props.setError(true);
    } else {
      props.setError(false);
      props.onNextStep();
    }
  };

  const areRequiredFieldsValid = () => {
    const { name, email, phone } = props.customer;
    return props.currentStep !== 5 && name && email && phone;
  };


  return (
    <div className='buttons-container'>
      {props.currentStep > 1 && props.currentStep < 5 && (
        <button className='button-left' onClick={props.onPreviousStep}>Go Back</button>
      )}
      {props.currentStep <= 3 && !isFinalStep ? (
        <button className='button-right' onClick={handleNextButtonClick}>Next Step</button>
      ) : !isFinalStep && (
        <button className='confirm-button' onClick={props.onNextStep}>
          {props.currentStep === 4 ? 'Confirm' : 'Next Step'}
        </button>
      )}
    </div>
  );
};

export default BottomButtons;
