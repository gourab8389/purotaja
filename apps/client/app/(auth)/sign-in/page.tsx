"use client";

import React, { useState } from "react";
import SignInForm from "../_components/SignInForm";
import VerifyForm from "../_components/VerifyForm";
import Image from "next/image";

const Page = () => {
  const [next, setNext] = useState(false);

  return (
    <section className="w-full max-w-screen-2xl min-h-screen mx-auto px-5 md:px-14 flex items-center justify-center">
      <div className="md:w-[50%] w-full h-full flex items-center justify-center px-10">
        <div className="w-full px-5 py-8 border-none shadow-none bg-slate-300">
          <h1>{!next ? "Signin" : "Verify"}</h1>
          <h2 className="w-full p-0 py-10">
            {!next ? <SignInForm setNext={setNext} /> : <VerifyForm />}
          </h2>
        </div>
      </div>
      <div className="w-[50%] hidden md:flex items-center justify-center">
        <Image
          src={"/auth/auth.png"}
          alt={"sign-in"}
          width={800}
          height={800}
          className="object-cover h-full w-full shrink-0"
        />
      </div>
    </section>
  );
};

export default Page;
