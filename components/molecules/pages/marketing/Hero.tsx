import React from 'react';
import Image from 'next/image';
import Button from '@/components/atoms/Button';

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image
            alt="blop"
            src="/images/Blop.svg"
            className="absolute w-1/2 hidden lg:block right-0 top-0 min-w-[600px] z-0"
            width={600}
            height={1080}
          />
          <div className="z-10">
            <Image
              alt="hero"
              src="/images/Hero.svg"
              className="w-1/2 hidden lg:block right-0 top-0 min-w-[600px]"
              width={800}
              height={800}
              priority
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold">{"Hi, I'm Adam Nagy"}</h1>
            <h1 className="text-xl font-medium">Frontend Web Developer</h1>
            <p className="py-6">
              {
                "Welcome to my portfolio! I specialize in creating beautiful and responsive websites that provide an excellent user experience. From concept to launch, I work closely with you to ensure your website reflects your brand and meets your goals. Check out my portfolio and let's work together to bring your vision to life!"
              }
            </p>
            <Button size="md">JUMP TO PORTFOLIO</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
