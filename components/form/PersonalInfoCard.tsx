"use client";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";
import { FormSchemaType } from "@/types";

const PersonalInfoCard = () => {
  const form = useFormContext<FormSchemaType>();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Personal info</CardTitle>
        <CardDescription>
          Please provide your name, email address, and phone number.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-3">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center justify-between">
                <FormLabel>Name</FormLabel>
                <FormMessage />
              </div>

              <FormControl>
                <Input placeholder="e.g. Stephen King" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center justify-between">
                <FormLabel>Email</FormLabel>
                <FormMessage />
              </div>
              <FormControl>
                <Input
                  type="email"
                  placeholder="e.g. stephenking@lorem.com"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center justify-between">
                <FormLabel>Phone</FormLabel>
                <FormMessage />
              </div>
              <FormControl>
                <Input
                  type="number"
                  placeholder="e.g. +1 234 567 890"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
      </CardContent>
    </Card>
  );
};

export default PersonalInfoCard;
