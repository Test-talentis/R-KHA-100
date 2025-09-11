import { z } from "zod";

const singUpSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: "FirstName is Required" })
    .max(22, { message: "The size is bigger than 22" }),
  lastName: z
    .string()
    .min(1, { message: "LastName ist Require" })
    .max(22, { message: "LastName is bigger than 22" }),
  email: z.string().min(1, { message: "email is Required" }).email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 charachters" })
    .regex(/.*[!@#$%^&*()_+{}|[\]\\:";'<>?,./].*/, {
        message: "Password should contain at least 1 special character",
      }),
    confirmPassword : z.string().min(1, {message:"Password is Required"})
}).refine((input) => input.password === input.confirmPassword, {
    message: "Password and confirm Password doesn't Match",
    path: ["confirmPassword"]
})

type singUpType = z.infer<typeof singUpSchema>
export {singUpSchema, type singUpType}
