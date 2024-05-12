import React from 'react';
const RenderErrorMessage = props => {
    return (
      <>
        {props.error && !props.value.trim() && <span className="error-message">This field is required</span>}
      </>
    );
  }
  
  export default RenderErrorMessage;