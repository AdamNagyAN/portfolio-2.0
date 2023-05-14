import React from 'react';
import { motion } from 'framer-motion';
import { IconType } from 'react-icons';

const item = {
  hidden: { opacity: 0, x: -100 },
  show: { opacity: 1, x: 0 },
};

type ServiceCardProps = { Icon: IconType; title: string; text: string };
const ServiceCard = ({ Icon, title, text }: ServiceCardProps) => {
  return (
    <motion.div variants={item} className="card w-[350px]">
      <div className="w-full flex justify-center mt-8">
        <figure>
          <Icon className="w-20 h-20 p-4 rounded-lg" />
        </figure>
      </div>
      <div className="card-body pt-2">
        <h2 className="text-lg mb-2 font-medium text-center wrap">{title}</h2>
        <p className="text-center">{text}</p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
