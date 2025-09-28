"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl } from "@/components/ui/form";
import CustomFormField, { FormFieldType } from "../CustomFormField";
import SubmitButton from "../SubmitButton";
import { useState } from "react";
import { UserFormValidation } from "@/lib/validation";
import { useRouter } from "next/navigation";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { GenderOptions } from "@/constants";
import { Label } from "../ui/label";

const RegisterForm = ({ user }: { user: User }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  async function onSubmit(values: z.infer<typeof UserFormValidation>) {}

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex-1 space-y-12"
      >
        <section className="space-y-6">
          <div className="mb-9 space-y-1">
            <h2 className="sub-header">Personal Information</h2>
          </div>

          {/* PATIENT NAME */}

          <CustomFormField
            label="Full Name"
            name="name"
            placeholder="Nkwi Cyril"
            control={form.control}
            fieldType={FormFieldType.INPUT}
            iconSrc="/assets/icons/user.svg"
            iconAlt={"user icon"}
          />

          {/* EMAIL AND PHONE NUMBER */}

          <div className="flex flex-col gap-6 xl:flex-row">
            <CustomFormField
              label="Email Address"
              name="email"
              placeholder="akinimbomnkwi@gmail.com"
              control={form.control}
              fieldType={FormFieldType.INPUT}
              iconSrc="/assets/icons/email.svg"
              iconAlt={"email"}
            />

            <CustomFormField
              label="Phone Number"
              name="phone"
              placeholder="+237 651085550"
              control={form.control}
              fieldType={FormFieldType.PHONE_INPUT}
            />
          </div>

          {/* DOB AND  */}

          <div className="flex flex-col gap-6 xl:flex-row">
            <CustomFormField
              label="Date of Birth"
              name="birthDate"
              placeholder="DD/MM/YYYY"
              control={form.control}
              fieldType={FormFieldType.DATE_PICKER}
            />

            <CustomFormField
              label="Gender"
              name="gender"
              placeholder=""
              control={form.control}
              fieldType={FormFieldType.SKELETON}
              renderSkeleton={(field) => (
                <FormControl>
                  <RadioGroup
                    className="flex h-11 gap-6 xl:justify-between"
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    {GenderOptions.map((option) => (
                      <div key={option} className="radio-group">
                        <RadioGroupItem value={option} id={option} />
                        <Label htmlFor={option} className="cursor-pointer">
                          {option}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </FormControl>
              )}
            />
          </div>

          <div className="flex flex-col-gap-6 xl:flex-row"></div>
        </section>

        <SubmitButton
          children={"Get Started"}
          isLoading={isLoading}
          className="w-full text-white bg-green-500 hover:bg-green-400"
        />
      </form>
    </Form>
  );
};

export default RegisterForm;
