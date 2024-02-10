"use client";
import { ReactNode, createContext, useContext, useState } from "react";

export type IsYearlyType = {
  isYearly: boolean;
  setIsYearly: (isYearly: boolean) => void;
};

export const IsYearlyContext = createContext<IsYearlyType | undefined>(
  undefined
);

const IsYearlyContextProvider = ({ children }: { children: ReactNode }) => {
  const [isYearly, setIsYearly] = useState(false);
  return (
    <IsYearlyContext.Provider value={{ isYearly, setIsYearly }}>
      {children}
    </IsYearlyContext.Provider>
  );
};

export default IsYearlyContextProvider;

export const useIsYearly = () => {
  const isYearlyContext = useContext(IsYearlyContext);

  if (!isYearlyContext) {
    throw new Error(
      "useIsYearly must be used within a IsYearlyContextProvider"
    );
  }

  return isYearlyContext;
};
