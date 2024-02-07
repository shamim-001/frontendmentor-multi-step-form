"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { plans } from "@/constants";
import { FormSchemaType } from "@/types";
import { useFormContext } from "react-hook-form";

const SelectPlanCard = () => {
  const form = useFormContext<FormSchemaType>();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Select your plan</CardTitle>
        <CardDescription>
          You have the option of monthly or yearly billing.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-3">
        <div>
          <FormField
            control={form.control}
            name="plan"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    {plans.map((plan) => {
                      return (
                        <FormItem
                          className="flex items-center space-y-0 focus-within:rounded-md focus-within:outline  focus-within:outline-2 focus-within:outline-slate-800"
                          key={plan.id}
                        >
                          <FormControl>
                            <RadioGroupItem
                              className="w-0 opacity-0"
                              value={plan.label.toLowerCase()}
                            />
                          </FormControl>
                          <FormLabel className="block w-full p-3">
                            {plan.label}
                          </FormLabel>
                        </FormItem>
                      );
                    })}
                  </RadioGroup>
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <div></div>
      </CardContent>
    </Card>
  );
};

export default SelectPlanCard;
