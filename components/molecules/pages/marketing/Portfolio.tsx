import React from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import Image from 'next/image';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="container max-h-[90vh] max-w-screen-xl mx-auto mt-16">
        <h1 className="text-2xl font-bold text-center">PORTFOLIO</h1>
        <div className="mt-8 flex flex-col gap-8">
          <div className="w-full flex justify-end gap-4">
            <button className="btn btn-primary btn-sm">
              <AiOutlineArrowLeft className="mr-2" /> Prev
            </button>
            <button className="btn btn-primary btn-sm">
              Next <AiOutlineArrowRight className="ml-2" />
            </button>
          </div>
          <div className="w-full flex aspect-video bg-black rounded-3xl">
            <div className="w-3/5 rounded-3xl">
              <Image
                src="/images/blessed.jpg"
                alt="blessed"
                width={1366}
                height={768}
                className="h-full object-cover rounded-3xl"
              />
            </div>
            <div className="w-2/5 p-4">
              <h4 className="text-xl uppercase font-medium">Blessed</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quisquam, voluptatum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
