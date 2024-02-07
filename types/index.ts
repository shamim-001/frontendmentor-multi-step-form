import { z } from "zod";

export const FormSchema = z.object({
  name: z.string().min(2, { message: "Can't be empty" }),
  email: z.string().email(),
  phone: z.string().min(10, { message: "minimum 10 numbers" }),
  plan: z.enum(["arcade", "advanced", "pro"]),
  addOns: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
});

export type FormSchemaType = z.infer<typeof FormSchema>;

export const defaultFormSchemaValue: FormSchemaType = {
  name: "",
  email: "",
  phone: "",
  plan: "arcade",
  addOns: [],
};
