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
import { addOns } from "@/constants";
import { Checkbox } from "../ui/checkbox";
import { useFormContext } from "react-hook-form";
import { FormSchemaType } from "@/types";
import { useIsYearly } from "@/context/IsYearlyContextProvider";
import { cn } from "@/lib/utils";

const AddOnsCard = () => {
  const { isYearly } = useIsYearly();
  const form = useFormContext<FormSchemaType>();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-[#022959] ">Pick add-ons</CardTitle>
        <CardDescription>
          Add-ons help enhance your gaming experience.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-3">
        <div>
          <FormField
            control={form.control}
            name="addOns"
            render={() => (
              <FormItem className="space-y-5">
                {addOns.map((addOn) => {
                  return (
                    <div key={addOn.id}>
                      <FormField
                        control={form.control}
                        name="addOns"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={addOn.id}
                              className={cn(
                                "flex flex-row items-center space-x-5 space-y-0 rounded-md p-5  outline outline-2 outline-[#D6D9E6]",
                                {
                                  "outline-[#022959]": field.value?.includes(
                                    addOn.id
                                  ),
                                }
                              )}
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(addOn.id)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field?.onChange(
                                          field.value && [
                                            ...field.value,
                                            addOn.id,
                                          ]
                                        )
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== addOn.id
                                          )
                                        );
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="flex w-full items-center justify-between text-sm font-normal">
                                <div className="flex flex-col gap-2">
                                  <span className="text-xl font-semibold text-[#022959]">
                                    {addOn.label}
                                  </span>
                                  <span> {addOn.info} </span>
                                </div>
                                <div className="text-[#483EFF]">
                                  {isYearly ? (
                                    <> +${addOn.priceYearly}/yr </>
                                  ) : (
                                    <> +${addOn.priceMonthly}/mo </>
                                  )}
                                </div>
                              </FormLabel>
                            </FormItem>
                          );
                        }}
                      />
                    </div>
                  );
                })}
              </FormItem>
            )}
          />
        </div>

        <div></div>
      </CardContent>
    </Card>
  );
};

export default AddOnsCard;
