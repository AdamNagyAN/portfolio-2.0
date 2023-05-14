import React from 'react';

type TimeLineProps = {
  index: number;
  title: string;
  description: string;
  reversed?: boolean;
};

function TimeLineItem({ reversed, title, index, description }: TimeLineProps) {
  return (
    <div
      className={`mb-8 flex justify-between ${
        reversed ? 'md:flex-row' : 'md:flex-row-reversed'
      } items-center w-full left-timeline`}
    >
      <div className="order-1 w-5/12"></div>
      <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
        <h1 className="mx-auto font-semibold text-lg text-white">{index}</h1>
      </div>
      <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
        <h3 className="mb-3 font-bold text-gray-800 text-xl">{title}</h3>
        <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
          {description}
        </p>
      </div>
    </div>
  );
}

export default TimeLineItem;
