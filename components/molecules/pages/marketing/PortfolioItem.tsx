'use client';
import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { PortfolioItemConfig } from '@/types';
import { FiArrowUpRight } from 'react-icons/all';

const portfolioVariant = (even: boolean) => ({
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  hidden: {
    x: even ? -100 : 100,
    opacity: 0,
  },
});

const PortfolioItem = ({
  title,
  badges,
  text,
  link,
  image,
  even,
}: PortfolioItemConfig & { even: boolean }) => {
  return (
    <motion.div
      variants={portfolioVariant(even)}
      initial="hidden"
      whileInView="show"
      className="card md:card-side bg-base-100 shadow-xl min-h-[300px] flex-col"
    >
      <figure className="min-w-[300px]">
        <Image
          src={image}
          className="w-full h-full"
          alt="Movie"
          width={600}
          height={600}
        />
      </figure>
      <div className={cn('card-body gap-4')}>
        <h2 className="card-title">{title}</h2>
        <div className="flex gap-2">
          {badges.map((it) => (
            <span key={it} className="badge badge-secondary badge-lg">
              {it}
            </span>
          ))}
        </div>
        <p>{text}</p>
        {link && (
          <div className="card-actions justify-end">
            <Link
              href={link}
              className="btn btn-secondary rounded-full"
              target="_blank"
            >
              View
              <FiArrowUpRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default PortfolioItem;