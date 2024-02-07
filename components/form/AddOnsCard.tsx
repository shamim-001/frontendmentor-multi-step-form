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

const AddOnsCard = () => {
  const form = useFormContext<FormSchemaType>();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Pick add-ons</CardTitle>
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
              <FormItem>
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
                              className="flex flex-row items-start space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(addOn.id)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([
                                          ...field.value,
                                          addOn.id,
                                        ])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== addOn.id
                                          )
                                        );
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="text-sm font-normal">
                                {addOn.label}
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
