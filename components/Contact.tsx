import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import data from '../../config/data.json';

const Contact = () => {
  const { contactSection } = data;

  return (
    <section className="bg-[#FFECE2] w-full" id={contactSection.id}>
      <main className="mx-auto max-w-[90rem] px-4 flex flex-col md:flex-row items-center justify-center py-20 gap-10">
        <div className="flex flex-col items-start justify-center md:w-1/2 w-full md:px-12 px-4">
          <h1 className="md:text-[3rem] text-[2rem] textcolor leading-normal tracking-[0.06rem] font-[700]">
            {contactSection.title}
          </h1>
          <p className="md:text-[1.25rem] text-[1rem] text-[#625D7E] font-[400] leading-[185%] mt-[2rem]">
            {contactSection.description}
          </p>
          <Button className="bg-[#FF7352] md:px-10 md:py-6 px-6 py-4 font-[500] text-[0.93519rem] leading-normal rounded-full mt-[3rem]">
            {contactSection.buttonText}
          </Button>
          <div className="flex items-center justify-center gap-[15px] mt-[2rem]">
            <Image
              src={contactSection.specialistInfo.image}
              alt="Specialist"
              width={66}
              height={66}
            />
            <div className="flex flex-col items-start justify-start">
              <h2 className="text-[#354158] text-[0.72656rem] font-[600]">
                {contactSection.specialistInfo.line1}
              </h2>
              <h2 className="text-[0.96875rem] font-[700] tracking-[-0.01213rem] leading-[170%]">
                {contactSection.specialistInfo.line2}
              </h2>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 w-full flex items-center justify-center">
          <div className="bg-[#FFFDF9] rounded-[1.5rem] px-4 py-12 w-full max-w-md">
            <h1 className="text-[2rem] font-[700] text-[#000] leading-[125%] text-center md:px-10 px-2">
              {contactSection.form.title}
            </h1>
            <form method="POST" action="#">
              {contactSection.form.fields.map((field) => (
                <div className="mt-[2rem] px-4" key={field.name}>
                  <label className="text-[#2F2F30] text-[1.25rem] font-[500] leading-[120%]">{field.label}</label><br />
                  <input
                    className="px-6 py-4 rounded-[16px] border border-[#ECEBE7] w-full mt-2"
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                  />
                </div>
              ))}
              <div className="mt-[2rem] px-4">
                <Button type="submit" className="md:px-6 py-8 px-4 font-[500] md:text-[1.375rem] text-[0.978rem] leading-normal rounded-full w-full mt-[2rem]">
                  {contactSection.form.submitButtonText}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Contact;
