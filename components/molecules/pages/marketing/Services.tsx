'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { servicesConfig } from '@/config/marketing';
import ServiceCard from '@/components/molecules/pages/marketing/ServiceCard';
import BlurredDecoration from '@/components/atoms/BlurredDecoration';

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
      <div className="container mx-auto mt-20 relative">
        <BlurredDecoration className="-left-10 -top-20" />
        <BlurredDecoration
          className="-right-10 -bottom-20"
          color="cyan"
          size="sm"
        />
        <h1 className="text-2xl font-bold text-center">SERVICES</h1>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="flex gap-20 mt-10 flex-wrap justify-center"
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
