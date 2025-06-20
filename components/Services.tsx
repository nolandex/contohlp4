import React from 'react'
import Image from 'next/image'
import data from '@/config/data.json';

const Services = () => {
  const { servicesSection } = data;

  return (
    <section className='w-full' id={servicesSection.id}>
      <main className='max-w-[70rem] mx-auto px-4 md:py-32 py-12'>
        <div>
          <p className='md:text-[1.25rem] text-[1rem] text-[#FF6947] font-[400] leading-normal text-center md:mb-6 mb-0'>
            {servicesSection.tagline}
          </p>
          <h2 className='textcolor md:text-[2.625rem] text-[2rem] font-[700] md:leading-[133.333%] leading-[1] tracking-[0.0525rem] text-center md:mt-auto mt-4'
            dangerouslySetInnerHTML={{ __html: servicesSection.title }}
          >
          </h2>
        </div>
        
        <div className='container grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-14 mt-16 max-w-[77.46806rem]'>
          {servicesSection.services.map((service, index) => (
            <div key={index} className="inline-flex flex-col items-center md:gap-5 gap-2">
              <Image
                src={service.icon}
                alt={service.title}
                width={107}
                height={107}
              />
              <h2 className='text-[1.5rem] font-[600] md:leading-[111.833%] leading-normal tracking-[0.02906rem] text-[#333] text-center'>
                {service.title}
              </h2>
              <p className='text-[#625D7E] font-[400] md:leading-[166.684%] leading-normal text-[1.06244rem] text-center md:px-0 px-8'>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </main>
    </section>
  )
}

export default Services;
