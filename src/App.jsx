import './App.css'
import { useState } from 'react'
import BottomButtons from './components/BottomButtons/BottomButtons'
import StepOneYourInfo from './components/StepOneYourInfo/StepOneYourInfo'
import StepTwoSelectPlan from './components/StepTwoSelectPlan/StepTwoSelectPlan'
import StepThreePickAddOns from './components/StepThreePickAddOns/StepThreePickAddOns'
import StepForSummary from './components/StepForSummary/StepForSummary'
import StepsCounter from './components/StepsCounter/StepsCounter'
import StepForSubscriptionMessage from './components/StepForSubscriptionMessage/StepForSubscriptionMessage'

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isYearly, setIsYearly] = useState(false);
  const [error, setError] = useState(false);
  const [nextStepClicked, setNextStepClicked] = useState(false);

  const [customer, setCustomer] = useState({
    name: '',
    email: '',
    phone: '',
    typePlan: '',
    pricePlan: ''
  });
 
  const handleChange = (e) => {
    const { id, value } = e.target;
    setCustomer(prevCustomer => ({
      ...prevCustomer,
      [id]: value
    }));
  };
  

  

  const steps = [
    <StepOneYourInfo nextStepClicked={nextStepClicked} error={error} handleChange={handleChange} customer={customer}  />,
    <StepTwoSelectPlan handleChange={handleChange} customer={customer} isYearly={isYearly} setIsYearly={setIsYearly}/>,
    <StepThreePickAddOns handleChange={handleChange} setCustomer={setCustomer} customer={customer} isYearly={isYearly}/>,
    <StepForSummary setCurrentStep={setCurrentStep} isYearly={isYearly} customer={customer}/>,
    <StepForSubscriptionMessage />
  ];

  

  const handleNextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
      setNextStepClicked(true);
      console.log(customer)
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
<div className='main-container'>
  <div className='secondary-container'>
<StepsCounter currentStep={currentStep}/>
{/* <StepOneYourInfo /> */}
{/* <StepTwoSelectPlan /> */}
{/* <StepThreePickAddOns /> */}
{/* <StepForSummary /> */}
{/* <StepForSubscriptionMessage /> */}
{steps[currentStep - 1]}


<BottomButtons onNextStep={handleNextStep}
 onPreviousStep={handlePreviousStep}
 currentStep={currentStep}
 handleChange={handleChange}
 customer={customer}
 error={error}
 setError={setError}
 />
</div>
</div>
  )
}

export default App
