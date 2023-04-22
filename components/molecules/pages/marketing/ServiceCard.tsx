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
    <motion.div
      variants={item}
      className="card w-[350px] bg-base-100 shadow-xl"
    >
      <div className="w-full flex justify-center mt-8">
        <figure>
          <Icon className="w-20 h-20 p-4 rounded-lg bg-dark" />
        </figure>
      </div>
      <div className="card-body">
        <h2 className="text-lg font-bold text-center wrap">{title}</h2>
        <p className="text-justify">{text}</p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
