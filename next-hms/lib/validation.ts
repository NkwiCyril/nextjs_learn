import z from "zod";

export const UserFormValidation = z.object({
  name: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone_number: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
});