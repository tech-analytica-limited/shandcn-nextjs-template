"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  email: z.string({ required_error: "Is required" }).email({}),
  password: z.string({ required_error: "Is required" }).min(6),
});

interface FormField extends z.infer<typeof schema> {}

const Forms = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<FormField>({
    defaultValues: {
      email: "test@email.com",
      password: "123456",
    },
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormField> = async (data) => {
    try {
      await new Promise((res) => setTimeout(res, 3000));
      console.log(data);
      //   throw new Error("Email");
    } catch (error) {
      setError("email", {
        message: "Email went wrong",
      });
    }
  };

  return (
    <div className="w-1/2 bg-red-500 p-4">
      <form className=" flex flex-col gap-4 " onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="email" {...register("email")} />
        {errors && errors.email && <span>{errors.email.message}</span>}
        <input type="password" placeholder="******" {...register("password")} />
        {errors && errors.password && <span>{errors.password.message}</span>}
        <Button disabled={isSubmitting} type="submit">
          {isSubmitting ? "Submiting" : "submit"}
        </Button>
        {errors && errors.root && <span>{errors.root.message}</span>}
      </form>
    </div>
  );
};

export default Forms;
