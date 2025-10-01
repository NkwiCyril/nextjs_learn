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
import { Doctors, GenderOptions, IdentificationTypes } from "@/constants";
import { Label } from "../ui/label";
import { SelectItem } from "../ui/select";
import Image from "next/image";
import FileUploader from "../FileUploader";

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
        {/* PERSONAL INFORMATION */}

        <section className="space-y-6">
          <div className="mb-9 space-y-1">
            <h2 className="sub-header">Personal Information</h2>
          </div>

          {/* Patient name */}
          <CustomFormField
            label="Full Name"
            name="name"
            placeholder="Nkwi Cyril"
            control={form.control}
            fieldType={FormFieldType.INPUT}
            iconSrc="/assets/icons/user.svg"
            iconAlt={"user icon"}
          />

          {/* Email and Phone number */}
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

          {/* DOB and Gender */}
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

          {/* Address and Occupation */}
          <div className="flex flex-col gap-6 xl:flex-row">
            <CustomFormField
              label="Address"
              name="address"
              placeholder="ex: Bwiteva New Layout, Buea"
              control={form.control}
              fieldType={FormFieldType.INPUT}
            />

            <CustomFormField
              label="Occupation"
              name="occupation"
              placeholder="Software Engineer"
              control={form.control}
              fieldType={FormFieldType.INPUT}
            />
          </div>

          {/* Emergency contact name and phone number */}
          <div className="flex flex-col gap-6 xl:flex-row">
            <CustomFormField
              label="Emergency Contact Name"
              name="emergencyContactName"
              placeholder="Guardian's Name"
              control={form.control}
              fieldType={FormFieldType.INPUT}
            />

            <CustomFormField
              label="Emergency Phone Number"
              name="emergencyContactNumber"
              placeholder="ex: +237 651085550"
              control={form.control}
              fieldType={FormFieldType.PHONE_INPUT}
            />
          </div>
        </section>

        {/* MEDICAL INFORMATION */}

        <section className="space-y-6">
          <div className="mb-9 space-y-1">
            <h2 className="sub-header">Medical Information</h2>
          </div>

          {/* Primary Care Physician */}
          <CustomFormField
            label="Primary Care Physician"
            name="primaryPhysician"
            placeholder="Select a Physician"
            control={form.control}
            fieldType={FormFieldType.SELECT}
          >
            {Doctors.map((doctor) => (
              <SelectItem key={doctor.name} value={doctor.name}>
                <div className="flex items-center gap-2">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    width={32}
                    height={32}
                    className="rounded-full border border-dark-500"
                  />
                  <p>{doctor.name}</p>
                </div>
              </SelectItem>
            ))}
          </CustomFormField>

          {/* Insurance number and provider */}
          <div className="flex flex-col gap-6 xl:flex-row">
            <CustomFormField
              label="Insurance Provider"
              name="insuranceProvider"
              placeholder="ex: Blue Cross"
              control={form.control}
              fieldType={FormFieldType.INPUT}
            />

            <CustomFormField
              label="Insurance Policy Number"
              name="insurancePolicyNumber"
              placeholder="ex: PL123456789"
              control={form.control}
              fieldType={FormFieldType.INPUT}
            />
          </div>

          {/* Allergies and Current Medications */}
          <div className="flex flex-col gap-6 xl:flex-row">
            <CustomFormField
              label="Allergies (if any)"
              name="allergies"
              placeholder="ex: Peanuts, Penicillin"
              control={form.control}
              fieldType={FormFieldType.TEXTAREA}
            />

            <CustomFormField
              label="Current Medications (if any)"
              name="currentMedication"
              placeholder="ex: Aspirin, Metformin"
              control={form.control}
              fieldType={FormFieldType.TEXTAREA}
            />
          </div>

          {/* Family and Past Medical History */}
          <div className="flex flex-col gap-6 xl:flex-row">
            <CustomFormField
              label="Family Medical History (if relevant)"
              name="familyMedicalHistory"
              placeholder="ex: Mother had diabetes"
              control={form.control}
              fieldType={FormFieldType.TEXTAREA}
            />

            <CustomFormField
              label="Past Medical History"
              name="pastMedicalHistory"
              placeholder="ex: Surgery in 2019"
              control={form.control}
              fieldType={FormFieldType.TEXTAREA}
            />
          </div>

          <div className="flex flex-col-gap-6 xl:flex-row"></div>
        </section>

        {/* IDENTIFICATION AND VERIFICATION */}

        <section className="space-y-6">
          <div className="mb-9 space-y-1">
            <h2 className="sub-header">Identification and Verification</h2>
          </div>
          {/* Identification Type */}
          <CustomFormField
            label="Identification Type"
            name="identificationType"
            placeholder="Select ID Type"
            control={form.control}
            fieldType={FormFieldType.SELECT}
          >
            {IdentificationTypes.map((idType) => (
              <SelectItem key={idType} value={idType}>
                {idType}
              </SelectItem>
            ))}
          </CustomFormField>

          {/* Identification number */}
          <CustomFormField
            label="Identification Number"
            name="identificationNumber"
            placeholder="ex: ID123456789"
            control={form.control}
            fieldType={FormFieldType.INPUT}
          />

          {/* Identification document */}
          <CustomFormField
            label="Scanned Copy of Identification Document"
            name="identificationDocumentUrl"
            placeholder=""
            control={form.control}
            fieldType={FormFieldType.SKELETON}
            renderSkeleton={(field) => (
              <FormControl>
                <FileUploader files={field.value} onChange={field.onChange} />
              </FormControl>
            )}
          />
        </section>

        {/* CONSENT AND PRIVACY */}

        <section className="space-y-6">
          <div className="mb-9 space-y-1">
            <h2 className="sub-header">Consent and Privacy</h2>
          </div>

          {/* Treatment consent */}
          <CustomFormField
            label="I consent to receive treatment for my health condition."
            name="treatmentConsent"
            control={form.control}
            fieldType={FormFieldType.CHECKBOX}
          />

          {/* Disclosure consent */}
          <CustomFormField
            label="I consent to the use and disclosure of my health information for treatment purposes."
            name="disclosureConsent"
            control={form.control}
            fieldType={FormFieldType.CHECKBOX}
          />

          {/* Privacy consent */}
          <CustomFormField
            label="I acknowledge that I have reviewed and agree to the privacy policy"
            name="privacyConsent"
            control={form.control}
            fieldType={FormFieldType.CHECKBOX}
          />
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
