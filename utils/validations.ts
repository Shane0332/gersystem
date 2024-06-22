import { object, string } from "yup";

export const RegisterSchema = object({
  name: string().required().label("Full name").min(2).max(50),
  email: string().required().label("Email").min(8).email(),
  password: string().required().label("Password").min(8).max(50),
});
export const LoginSchema =object({
  email: string().required().label("Email").min(8).email(),
  password: string().required().label("Password").min(8).max(50),
});
export const ForgotPasswordSchema= ({
  email: string().required().label("Email").min(8).email(),
})