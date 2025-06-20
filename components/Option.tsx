import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import data from '@/config/data.json';


const Option = () => {
  const { optionsBar } = data;

  return (
    <section className="w-full md:-mt-20 mt-4 md:px-10 px-2 md:absolute left-0 top-[760px]">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-[90rem] mx-auto px-[2rem] py-[2rem] flex flex-col sm:flex-row md:flex-row md:items-center items-start justify-between gap-12 option"
      >
        {optionsBar.map((option, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col items-start justify-center"
          >
            <h1
              className="text-[#0A1834] text-[1.45313rem] font-semibold leading-[135%] tracking-[-0.03025rem]"
              dangerouslySetInnerHTML={{ __html: option.title.replace(' ', '<br/>') }}
            ></h1>

            <div className="flex items-center justify-center gap-[15px] mt-[3rem]">
              <Image src={option.icon} alt={option.title} width={38} height={38} className="w-auto h-[38px]" />
              <div className="flex flex-col items-start justify-start">
                {option.details.map((detail) => (
                  <React.Fragment key={detail.label}>
                    <h2 className="text-[#354158] text-[0.72656rem] font-[600]">
                      {detail.label}
                    </h2>
                    <h2 className="text-[0.96875rem] font-[700] tracking-[-0.01213rem] leading-[170%]">
                      {detail.value}
                    </h2>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Option;
