'use client';
import React from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { PortfolioItemConfig } from '@/types';
import BlurredDecoration from '@/components/atoms/BlurredDecoration';

const data: PortfolioItemConfig[] = [
  {
    title: 'Blessed',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    image: '/images/blessed.jpg',
    github: 'https://github.com/',
    demo: 'https://google.com/',
  },
  {
    title: 'Demo2',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    image: '/images/divinv.jpg',
    github: 'https://github.com/',
    demo: 'https://google.com/',
  },
];

const MotionImage = motion(Image);

const Portfolio = () => {
  const [active, setActive] = React.useState(0);
  const { github, demo, image, title, description } = data[
    active
  ] as PortfolioItemConfig;

  const hasNext: boolean = data.length - 1 > active;
  const hasPrev: boolean = active > 0;
  const onNext = () => setActive((prevState) => prevState + 1);
  const onPrev = () => setActive((prevState) => prevState - 1);

  console.log(image);

  return (
    <section id="portfolio">
      <div className="relative container max-w-screen-xl mx-auto mt-16">
        <BlurredDecoration color="green" />
        <BlurredDecoration
          color="indigo"
          size="lg"
          className="-right-64 bottom-6"
        />
        <h1 className="text-2xl font-bold text-center z-10">PORTFOLIO</h1>
        <div className="mt-8 flex flex-col gap-4 z-10">
          <div className="w-full flex justify-end gap-4 z-10">
            <button
              className="btn btn-primary btn-sm"
              disabled={!hasPrev}
              onClick={onPrev}
            >
              <AiOutlineArrowLeft className="mr-2" /> Prev
            </button>

            <button
              className="btn btn-primary btn-sm"
              disabled={!hasNext}
              onClick={onNext}
            >
              Next <AiOutlineArrowRight className="ml-2" />
            </button>
          </div>
          <div className="w-full flex aspect-video bg-black rounded-3xl overflow-hidden max-h-[90vh] z-10">
            <div className="w-3/5 rounded-3xl">
              <AnimatePresence mode="wait">
                <MotionImage
                  exit={{
                    opacity: 0,
                    transition: {
                      duration: 0.3,
                    },
                  }}
                  animate={{
                    opacity: 1,
                    transition: {
                      duration: 1,
                    },
                  }}
                  initial={{
                    opacity: 0,
                  }}
                  key={image}
                  src={image}
                  alt="blessed"
                  width={1366}
                  height={768}
                  className="h-full object-cover rounded-3xl"
                />
              </AnimatePresence>
            </div>
            <AnimatePresence mode="wait">
              <Description
                key={JSON.stringify(data[active])}
                description={description}
                title={title}
                demo={demo}
                github={github}
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

type DescriptionProps = Omit<PortfolioItemConfig, 'image'>;
function Description({ description, title, github, demo }: DescriptionProps) {
  return (
    <motion.div
      exit={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      initial={{
        opacity: 0,
        y: 100,
      }}
      className="w-2/5 p-6 h-full flex flex-col"
    >
      <h4 className="text-xl text-center uppercase font-medium mt-8 mb-8">
        {title}
      </h4>
      <p>{description}</p>
      <div className="flex gap-4 justify-end mt-auto">
        <a
          href={github}
          target="_blank"
          className="btn btn-sm btn-outline btn-secondary"
        >
          View on GitHub
        </a>
        <a href={demo} target="_blank" className="btn btn-sm btn-secondary">
          View
        </a>
      </div>
    </motion.div>
  );
}

export default Portfolio;
