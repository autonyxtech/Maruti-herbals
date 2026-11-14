import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name."),
  phone: z.string().trim().min(8, "Please enter a valid phone number."),
  email: z.string().trim().email("Please enter a valid email address.").optional().or(z.literal("")),
  interest: z.enum(["Buy products", "Bulk or wholesale", "Collaboration", "Other"]),
  product: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Please add a few more details so we can help you."),
  consent: z.boolean().refine((value) => value === true, "Please confirm that you agree to be contacted."),
  website: z.string().max(0, "Invalid submission.").optional().or(z.literal("")),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
