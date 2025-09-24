"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import CustomFormField, { FormFieldType } from "../CustomFormField";
import SubmitButton from "../SubmitButton";
import { useState } from "react";
import { formSchema } from "@/lib/validation";

const PatientForm = () => {

  const [loading, setloading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone_number: "",
    },
  });


  function onSubmit(values: z.infer<typeof formSchema>) {

    setloading(true)

    try {
      
    } catch (error) {
      console.error("Error encountered while submitting form")
    }

    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <CustomFormField
          label="Full Name"
          name="name"
          placeholder="Nkwi Cyril"
          control={form.control}
          fieldType={FormFieldType.INPUT}
          iconSrc={"assets/icons/user.svg"}
          iconAlt={"user icon"}
        />

        <CustomFormField
          label="Email Address"
          name="email"
          placeholder="akinimbomnkwi@gmail.com"
          control={form.control}
          fieldType={FormFieldType.INPUT}
          iconSrc={"assets/icons/email.svg"}
          iconAlt={"email"}
        />

        <CustomFormField
          label="Phone Number"
          name="phone_number"
          placeholder="+237 651085550"
          control={form.control}
          fieldType={FormFieldType.PHONE_INPUT}
        />
        <SubmitButton 
          children={"Get Started"}
          isLoading={loading}
          className="w-full text-white bg-green-500 hover:bg-green-400"
        />
      </form>
    </Form>
  );
};

export default PatientForm;
