'use client'; import Image from "next/image"; import React from "react"; import { Button } from "./ui/button"; import Option from "./Option"; import Link from "next/link"; import { motion } from "framer-motion"; import data from '@/config/data.json';

const HomeSection = () => { const { homeSection: home } = data;

return ( <section className="w-full md:relative" id="home-section"> <main className="max-w-[90rem] mx-auto py-0 md:py-0"> <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex flex-col md:flex-row items-start justify-between bg-[#FFECE2]" > <div className="md:px-12 px-4 py-20 md:w-1/2 w-full"> <h1 className="md:text-[3.25rem] text-[1.8rem] md:leading-[128.846%] leading-[140%] font-[700] text-[#181443] tracking-[0.03988rem] md:text-start text-center" dangerouslySetInnerHTML={{ __html: home.title }} /> <p className="md:text-[1.125rem] text-[1rem] text-[#625D7E] text-center md:text-start md:font-[500] font-[400] md:leading-[205.556%] leading-normal md:mt-[1.88rem] mt-2"> {home.subtitle} </p>

<div className="flex flex-col md:flex-row gap-[25px] md:items-center md:mt-[3rem] mt-6 w-full">
          <Button className="borderbutton2 bg-[#FF7352] md:px-12 md:py-8 py-7 font-[500] text-[0.93519rem] leading-[150%] rounded-[10px]">
            <Link href={home.appointmentButton.href} passHref>
              {home.appointmentButton.text}
            </Link>
          </Button>
          <Button
            variant="ghost"
            className="md:px-12 md:py-8 py-7 font-[700] text-[1rem] leading-[150%] rounded-[10px] bg-[#FFECE2] border textcolor gap-2 borderbutton"
          >
            <Image src={home.contactButton.icon} alt="phone" width={20} height={20} />
            {home.contactButton.text}
          </Button>
        </div>

        <div className="flex flex-col md:flex-row gap-[17px] md:items-center items-start md:mt-[2.5rem] mt-10">
          <div className="flex items-center justify-center gap-[20px]">
            <Image src={home.address.icon} alt="location" width={51} height={51} />
            <div className="flex flex-col font-[700] text-[0.96125rem] leading-[150%] textcolor">
              <p>{home.address.title}</p>
              <p>{home.address.text}</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-[20px]">
            <Image src={home.openingHours.icon} alt="hours" width={51} height={51} />
            <div className="flex flex-col font-[700] text-[0.96125rem] leading-[150%] textcolor">
              <p>{home.openingHours.title}</p>
              <p>{home.openingHours.text}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="md:w-1/2 w-full flex justify-center items-center">
        <Image src={home.heroImage} alt="hero" width={769} height={865} />
      </div>
    </motion.div>
    <Option />
  </main>
</section>

); };

export default HomeSection;

