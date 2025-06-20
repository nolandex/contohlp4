import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import data from '@/config/data.json';


const Faq = () => {
  const { faqSection } = data;

  return (
    <section className='w-full'>
      <main className='mx-auto max-w-[90rem] md:px-32 px-4 md:py-[8.66rem] py-[3rem] flex flex-col md:flex-row items-start justify-start gap-12'>
        <div className='md:w-1/2 w-full'>
          <h1 className='textcolor font-[700] md:text-[3rem] text-[2rem] tracking-[0.06rem] md:leading-[125%] leading-normal md:text-start text-center'
            dangerouslySetInnerHTML={{ __html: faqSection.title.replace(' ', '<br/>') }}
          >
          </h1>
        </div>
        <div className='md:w-1/2 w-full px-4'>
          <Accordion type="single" collapsible className="w-full">
            {faqSection.faqs.map((faq, index) => (
              <AccordionItem value={`item-${index + 1}`} key={index} className='md:mt-[2rem] mt-0'>
                <AccordionTrigger className='text-[.0.75rem] font-[600] text-start'>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className='font-[300]'>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </main>
    </section>
  )
}

export default Faq;
