"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { useStep } from "@/context/StepContextProvider";
import { cn } from "@/lib/utils";
import { FormSchema, FormSchemaType, defaultFormSchemaValue } from "@/types";
import { Form } from "../ui/form";
import AddOnsCard from "./AddOnsCard";
import FinishingUpCard from "./FinishingUpCard";
import Navigation from "./Navigation";
import PersonalInfoCard from "./PersonalInfoCard";
import SelectPlanCard from "./SelectPlanCard";
import ThankYouCard from "./ThankYouCard";

const FormSection = () => {
  const { step } = useStep();
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    defaultValues: defaultFormSchemaValue,
  });

  return (
    <div className="flex flex-col justify-between">
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

      <div className="md:hidden" />
      <div
        className={cn(
          "relative md:static",
          { "bottom-0": step === 1 },
          { "-bottom-16": step === 2 },
          { "-bottom-[9rem] ": step === 3 },
          { "-bottom-3": step === 4 }
        )}
      >
        <Form {...form}>
          <Navigation />
        </Form>
      </div>
    </div>
  );
};

export default FormSection;
