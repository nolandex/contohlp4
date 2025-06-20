import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import data from '../../config/data.json';

const About = () => {
  const { aboutSection } = data;

  return (
    <section className="w-full" id={aboutSection.id}>
      <main className="max-w-[90rem] mx-auto md:py-[250px] py-12 md:px-14 px-4 flex flex-col md:flex-row sm:flex-col md:gap-[100px] gap-12">
        <div>
          <Image
            src={aboutSection.image}
            alt="The power of a smile"
            width={600}
            height={600}
            className="w-full md:h-[519px]"
          />
        </div>
        <div className="md:w-1/2 w-full">
          <p className="text-[#FF6947] text-[1.25rem] font-[400] leading-normal md:mb-4 mb-0">
            {aboutSection.tagline}
          </p>
          <h1 className="textcolor md:text-[2.625rem] text-[2rem] font-[700] leading-[133.333%] tracking-[0.0525rem]">
            {aboutSection.title}
          </h1>
          <p className="md:text-[1.25rem] text-[1rem] font-[400] leading-[185%] pcolor mt-[1.31rem]">
            {aboutSection.description}
          </p>
          <Link href={aboutSection.button.href} passHref>
            <Button
              className="borderbutton2 bg-[#FF7352] md:px-12 md:py-8 py-7 font-[500] text-[0.93519rem] leading-[150%] rounded-[10px] md:mt-[3rem] mt-8 w-full md:w-auto"
            >
              {aboutSection.button.text}
            </Button>
          </Link>
        </div>
      </main>
    </section>
  );
};

export default About;
