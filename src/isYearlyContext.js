import React, { createContext, useContext, useState } from 'react';

const IsYearlyContext = createContext();

export const IsYearlyProvider = ({ children }) => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <IsYearlyContext.Provider value={{ isYearly, setIsYearly }}>
      {children}
    </IsYearlyContext.Provider>
  );
};

export const useIsYearly = () => useContext(IsYearlyContext);
