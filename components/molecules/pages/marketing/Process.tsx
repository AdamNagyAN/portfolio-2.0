import React from 'react';
import TimeLineItem from '@/components/molecules/timeline/TimeLineItem';

const Process = () => {
  return (
    <section id="process">
      <div className="container mx-auto w-full h-full">
        <div className="relative wrap overflow-hidden p-10 h-full">
          <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-1/2"></div>
          <TimeLineItem
            index={1}
            title={'Lorem Ipsum'}
            description={
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
            }
          />
          <TimeLineItem
            index={1}
            title={'Lorem Ipsum'}
            description={
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
            }
            reversed
          />
        </div>
      </div>
    </section>
  );
};

export default Process;
