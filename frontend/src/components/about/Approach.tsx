import { Asterisk } from 'lucide-react'
import React from 'react'
import { motion } from "framer-motion";
import Portfolio from '../home/Portfolio';
import { section } from 'framer-motion/client';
const Approach = () => {
  // const approach=[
  //   {
  //     title:"Custom Software Development",
  //     description:"Custom software built to align with your business processes, using structured architecture and scalable code for long-term flexibility.",
  //   },
  //   {
  //     title:"Web Application Development",
  //     description:"Modern, fast web applications built on Python, Laravel, and leading frameworks. Engineered to handle real traffic and deliver smooth user experiences.",
  //   },
  //   {
  //     title:"Website Design & UI/UX",
  //     description:"Professional website design that looks great and converts visitors. Every interface is designed around your users and the actions you want them to take.",
  //   },
  //   {
  //     title:"Mobile App Development",
  //     description:"Native and hybrid mobile apps for iOS and Android. We build apps that are smooth, reliable, and designed to keep your users engaged and coming back.",
  //   },
  //   {
  //     title:"Digital Marketing & SEO Services",
  //     description:"Search engine optimisation, social media marketing, and targeted digital campaigns that drive real traffic, qualified leads, and measurable business growth.",
  //   },
  //   {
  //     title:"Cloud Hosting & IT Infrastructure",
  //     description:"End-to-end server setup, cloud deployment, SSL certificates, and payment gateway integration. Reliable IT infrastructure for businesses of every size.",
  //   },
  // ];
  
  return (
    <section id='services' className='w-full px-5 py-20 font-lato'>
      <div className='flex flex-col gap-10 max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='flex flex-col gap-4'>
            <div className='flex gap-1'>
              <Asterisk className="text-gray-400" size={20}/>
              <motion.h3
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-sm uppercase tracking-widest text-white"
              >
                OUR SERVICES
              </motion.h3>
            </div>
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
              className='text-5xl font-bold'
            >
              Complete IT Services for Modern Businesses
            </motion.h1>
          </div>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            className='text-md text-gray-300'
          >
            Connectia provides a complete range of IT services so businesses can manage all their digital needs in one place. From custom software development and professional website design, to mobile app development, digital marketing, and cloud hosting, we handle it all, so you can focus on running your business.
          </motion.p>
        </div>
        <Portfolio />
        {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-5'>
          {approach.map((a, idx)=>(
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.06 }}
              viewport={{ once: true, amount: 0.2 }}
              className="bg-[#111] p-8 rounded-3xl"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-gray-400 font-bold text-lg">{(idx + 1).toString().padStart(2, '0')}</span>
                <h2 className="text-xl font-semibold text-white">{a.title}</h2>
              </div>
              <p className="text-gray-300">{a.description}</p>
            </motion.div>
          ))}
         
        </div> */}
      </div>
    </section>
  )
}

export default Approach