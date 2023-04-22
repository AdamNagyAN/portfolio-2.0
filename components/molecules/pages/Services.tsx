'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { servicesConfig } from '@/config/marketing';
import ServiceCard from '@/components/molecules/pages/marketing/ServiceCard';

const container = {
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Services = () => {
  return (
    <section id="services">
      <div className="container mx-auto mt-16">
        <h1 className="text-2xl font-bold text-center">SERVICES</h1>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="flex gap-10 mt-16 flex-wrap justify-center"
        >
          {servicesConfig.map((service) => (
            <ServiceCard
              key={JSON.stringify(service)}
              Icon={service.icon}
              text={service.text}
              title={service.title}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
