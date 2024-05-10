"use server";
import prisma from "@/lib/db";
import { z } from "zod";
const bcrypt = require("bcrypt");
const registerSchema = z.object({
  username: z.string().min(4, "Must be 4 or more characters long"),
  email: z.string().email(),
  password: z.string().min(8, "Must be 8 or more characters long"),
});

export default async function registerUser(prevState: any, formData: FormData) {
  try {
    const userData = {
        username: String(formData.get("username")),
        email: String(formData.get("email")),
        password: String(formData.get("password")),
    }
    registerSchema.parse(userData);
    if(await prisma.user.findUnique({where:{email:userData.email}})){
      throw 'email'
    }
    await prisma.user.create({
        data:{
            username:userData.username,
            email:userData.email,
            password:bcrypt.hashSync(userData.password,10)
        }
    })

    return {
      message: "User registered successfully",
      status: "success",
    };
  } catch (error: any) {
    const errors: any = {};
    if(error != 'email'){
      error?.errors?.map((err: any) => {
        errors[err.path[0]] = err.message;
      });
    }else{
      errors.email = 'Email has already been registered'
    }
    return {
      message: "User failed to be registered",
      status: "error",
      errors: errors,
    };
  }
}
