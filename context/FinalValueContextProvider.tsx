"use client";
import { FormSchemaType, defaultFormSchemaValue } from "@/types";
import { ReactNode, createContext, useContext, useState } from "react";

export type FinalValueContextType = {
  values: FormSchemaType;
  setValues: (values: FormSchemaType) => void;
};

export const FinalValueContext = createContext<
  FinalValueContextType | undefined
>(undefined);

const FinalValueContextProvider = ({ children }: { children: ReactNode }) => {
  const [values, setValues] = useState({ ...defaultFormSchemaValue });
  return (
    <FinalValueContext.Provider value={{ values, setValues }}>
      {children}
    </FinalValueContext.Provider>
  );
};

export default FinalValueContextProvider;

export const useFinalValue = () => {
  const finalValueContext = useContext(FinalValueContext);

  if (!finalValueContext) {
    throw new Error(
      "useFinalValueContext must be used within a FinalValueContextProvider"
    );
  }

  return finalValueContext;
};
