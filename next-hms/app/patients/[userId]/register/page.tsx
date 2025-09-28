import RegisterForm from "@/components/forms/RegisterForm";
import { getUser } from "@/lib/actions/patient.actions";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Register = async ({ params: { userId } }: SearchParamProps) => {

  const user = await getUser(userId);

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scroll-bar container">
        <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
          <Image
            src={"/assets/icons/logo-full.svg"}
            height={1000}
            width={1000}
            alt="healthline"
            className="mb-12 h-10 w-fit"
          />

          <h1 className="text-3xl font-semibold mb-2">Welcome 👋</h1>
          <h2 className="text-sm text-dark-600 mb-10">
            Let us know more about yourself
          </h2>

          <RegisterForm user={user}/>

          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2025 HealthLine
            </p>
            <Link
              href={"/?admin=true"}
              className="text-green-500 hover:underline"
            >
              Admin
            </Link>
          </div>
        </div>
      </section>

      <Image
        src={"/assets/images/register-img.png"}
        alt="patient"
        width={1000}
        height={1000}
        className="side-img max-w-[390px]"
      />
    </div>
  );
};

export default Register;
