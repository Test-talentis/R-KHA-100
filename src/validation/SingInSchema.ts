import {z} from "zod";

const singInSchema = z.object({
    email: z.string().min(1, {message: "email is Required"}).email(),
    password: z.string().min(1, {message: "password is Required"})
})

type singInType = z.infer<typeof singInSchema>;

export {singInSchema, type singInType}