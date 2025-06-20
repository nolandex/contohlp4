import Image from 'next/image';
import React from 'react'
import Marquee from "react-fast-marquee";
import data from '../../config/data.json';

const Testemonial = () => {
  const { testimonialSection } = data;

  return (
    <section className='w-full bg-[#FFECE2]'>
      <main className='mx-auto max-w-[90rem] px-0 md:py-16 py-10'>
        <div className='text-center'>
          <p className="text-[#FF6947] text-[1.25rem] font-[400] leading-normal md:mb-4 mb-0">
            {testimonialSection.tagline}
          </p>
          <h1 className="textcolor md:text-[2.625rem] text-[2rem] font-[700] leading-[133.333%] tracking-[0.0525rem]">
            {testimonialSection.title}
          </h1>
        </div>

        <Marquee>
          <div className="flex justify-center gap-6 px-4 rounded-[1.25rem] md:py-20 py-14">
            {testimonialSection.testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-[23.0625rem] flex flex-col items-start self-stretch bg-[#fff] shadow-xl rounded-[1.25rem] px-[2rem] py-[1rem]"
              >
                <h2 className="text-[#000] md:text-[3rem] font-[700] leading-[125%] mt-2">
                  “
                </h2>
                <p className="text-[#2F2F30] text-[0.9375rem] font-[400] leading-[159%]">
                  {testimonial.quote}
                </p>
                <div className='flex gap-2 items-center justify-start mt-4'>
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                  />
                  <p className='text-[1rem] text-[#3F0000] font-[700] leading-[168.75%]'>{testimonial.name}</p>
                </div>
              </div>
            ))}
          </div>
        </Marquee>
      </main>
    </section>
  )
}

export default Testemonial;
