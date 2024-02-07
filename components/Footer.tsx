"use client";
import { useStep } from "@/context/StepContextProvider";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { useFormContext } from "react-hook-form";
import { FormSchemaType } from "@/types";

type FooterType = {
  handleNextStep: () => void;
  handleBackStep: () => void;
};
const Footer = ({ handleNextStep, handleBackStep }: FooterType) => {
  const { step } = useStep();
  const form = useFormContext<FormSchemaType>();

  function onSubmit(values: FormSchemaType) {
    console.log(values);
    form.reset();
  }
  return (
    <div
      className={cn(
        "container flex items-center justify-between bg-white py-5",
        { hidden: form.formState.isSubmitSuccessful }
      )}
    >
      {/* the following div tag is used for proper 'justify-between' effect on mobile version */}
      <div className={cn("hidden", { block: step === 1 })} />

      <Button
        className={cn("block", { hidden: step === 1 })}
        onClick={handleBackStep}
        variant="outline"
      >
        Go Back
      </Button>

      <Button
        className={cn("block", { hidden: step === 4 })}
        onClick={handleNextStep}
      >
        Next Step
      </Button>

      <Button
        onClick={form.handleSubmit(onSubmit)}
        className={cn("hidden", { block: step === 4 })}
      >
        Confirm
      </Button>
    </div>
  );
};

export default Footer;
