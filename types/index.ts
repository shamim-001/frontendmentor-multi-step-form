import { z } from "zod";

export const FormSchema = z.object({
  name: z.string().min(2, { message: "Can't be empty" }),
  email: z.string().email(),
  phone: z.string().min(10, { message: "minimum 10 numbers" }),
  plan: z.enum(["arcade", "advanced", "pro"]),
  addOns: z.array(z.string()).optional(),
});

export type FormSchemaType = z.infer<typeof FormSchema>;

export const defaultFormSchemaValue: FormSchemaType = {
  name: "",
  email: "",
  phone: "",
  plan: "arcade",
  addOns: [],
};
