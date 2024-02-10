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
import { useIsYearly } from "@/context/IsYearlyContextProvider";
import { FormSchemaType } from "@/types";
import Image from "next/image";
import { useFormContext } from "react-hook-form";
import { Switch } from "../ui/switch";

const SelectPlanCard = () => {
  const { isYearly, setIsYearly } = useIsYearly();

  const form = useFormContext<FormSchemaType>();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-[#022959] ">Select your plan</CardTitle>
        <CardDescription>
          You have the option of monthly or yearly billing.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-8">
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
                    className="space-y-3 md:flex md:gap-5 md:space-y-0"
                  >
                    {plans.map((plan) => {
                      return (
                        <FormItem
                          className="flex grow items-center space-y-0 rounded-md outline  outline-2 outline-[#D6D9E6] focus-within:outline-[#483EFF] "
                          key={plan.id}
                        >
                          <FormControl>
                            <RadioGroupItem
                              className="w-0 opacity-0"
                              value={plan.label.toLowerCase()}
                            />
                          </FormControl>
                          <FormLabel className="block w-full p-3">
                            <div className="flex items-center gap-5 md:flex-col md:items-start">
                              <div>
                                <Image
                                  src={plan.imgUrl}
                                  alt={plan.label}
                                  height={55}
                                  width={55}
                                />
                              </div>
                              <div className="flex flex-col gap-3">
                                <span className="text-[#022959] ">
                                  {plan.label}
                                </span>
                                <span className="text-[#9699AA] ">
                                  {isYearly ? (
                                    <> ${plan.priceYearly}/yr </>
                                  ) : (
                                    <> ${plan.priceMonthly}/mo </>
                                  )}
                                </span>
                              </div>
                            </div>
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

        <div className="flex items-center justify-center gap-3">
          <span
            className={`${!isYearly ? "font-semibold text-[#022959]" : "text-[#9699AA] "}`}
          >
            Monthly
          </span>
          <Switch
            checked={isYearly}
            onCheckedChange={() => setIsYearly(!isYearly)}
          />
          <span
            className={`${isYearly ? " text-[#022959]" : "text-[#9699AA] "}`}
          >
            Yearly
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default SelectPlanCard;
