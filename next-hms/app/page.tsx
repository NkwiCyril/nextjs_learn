import PatientForm from "@/components/forms/PatientForm";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex h-screen max-h-screen">

      {/* TODO: OTP verification | Passkey modal */}

      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px] ">
          <Image
            src={"/assets/icons/logo-full.svg"}
            alt="patient"
            width={1000}
            height={1000}
            className="mb-12 h-10 w-fit"
          />
          <h1 className="mb-4 text-2xl leading-tight ">Hi there!</h1>
          <h2 className="text-sm text-dark-600 mb-10">
            Get Started with Appointments.
          </h2>

          <PatientForm />

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
        src={"/assets/images/onboarding-img.png"}
        alt="patient"
        width={1000}
        height={1000}
        className="side-img max-w-[50%]"
      />
    </div>
  );
}


export default Home;