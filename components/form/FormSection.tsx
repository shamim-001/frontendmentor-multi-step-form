"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { useStep } from "@/context/StepContextProvider";
import { cn } from "@/lib/utils";
import { FormSchema, FormSchemaType, defaultFormSchemaValue } from "@/types";
import Footer from "../Footer";
import { Form } from "../ui/form";
import AddOnsCard from "./AddOnsCard";
import PersonalInfoCard from "./PersonalInfoCard";
import SelectPlanCard from "./SelectPlanCard";
import FinishingUpCard from "./FinishingUpCard";
import ThankYouCard from "./ThankYouCard";

const FormSection = () => {
  const { step, setStep } = useStep();
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    defaultValues: defaultFormSchemaValue,
  });

  async function handleNextStep() {
    if (step === 1) {
      const result = await form.trigger(["name", "email", "phone"]);
      result && setStep(2);
    }

    if (step === 2) {
      const result = await form.trigger("plan");
      result && setStep(3);
    }

    if (step === 3) {
      const result = await form.trigger("addOns");
      result && setStep(4);
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
    <div className="flex flex-col justify-between ">
      <div className="absolute top-36 w-full px-10 md:static md:mt-16  md:px-20">
        <Form {...form}>
          <form>
            <div className={cn("hidden", { block: step === 1 })}>
              <PersonalInfoCard />
            </div>

            <div className={cn("hidden", { block: step === 2 })}>
              <SelectPlanCard />
            </div>

            <div className={cn("hidden", { block: step === 3 })}>
              <AddOnsCard />
            </div>

            <div
              className={cn(
                "hidden",
                { block: step === 4 },
                { hidden: form.formState.isSubmitSuccessful }
              )}
            >
              <FinishingUpCard />
            </div>

            <div
              className={cn("hidden", {
                block: form.formState.isSubmitSuccessful,
              })}
            >
              <ThankYouCard />
            </div>
          </form>
        </Form>
      </div>

      {/* the following div tag is used for proper 'justify-between' effect on mobile version */}
      <div className="md:hidden" />
      <Form {...form}>
        <Footer
          handleNextStep={handleNextStep}
          handleBackStep={handleBackStep}
        />
      </Form>
    </div>
  );
};

export default FormSection;
