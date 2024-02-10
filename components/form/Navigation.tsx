"use client";
import { useStep } from "@/context/StepContextProvider";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { useFormContext } from "react-hook-form";
import { FormSchemaType } from "@/types";
import { useFinalValue } from "@/context/FinalValueContextProvider";

const Navigation = () => {
  const { step, setStep } = useStep();
  const { setValues } = useFinalValue();
  const form = useFormContext<FormSchemaType>();

  function onSubmit(values: FormSchemaType) {
    console.log({ values });
    form.reset();
  }

  async function handleNextStep() {
    if (step === 1) {
      const result = await form.trigger(["name", "email", "phone"], {
        shouldFocus: true,
      });
      result && setStep(2);
    }

    if (step === 2) {
      const result = await form.trigger("plan", { shouldFocus: true });
      result && setStep(3);
    }

    if (step === 3) {
      const result = await form.trigger("addOns", { shouldFocus: true });
      result && setStep(4);
      const values = form.getValues();
      setValues(values);
    }
  }

  function handleBackStep() {
    if (step <= 1 || step >= 5) {
      return;
    }
    const currentStep = step;
    setStep(currentStep - 1);
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
        type="button"
        className={cn("block", { hidden: step === 1 })}
        onClick={handleBackStep}
        variant="outline"
      >
        Go Back
      </Button>

      <Button
        type="button"
        className={cn("block bg-[#022959] ", { hidden: step === 4 })}
        onClick={handleNextStep}
      >
        Next Step
      </Button>

      <Button
        type="button"
        className={cn("hidden", { "block bg-[#483EFF] ": step === 4 })}
        onClick={form.handleSubmit(onSubmit)}
      >
        Confirm
      </Button>
    </div>
  );
};

export default Navigation;
