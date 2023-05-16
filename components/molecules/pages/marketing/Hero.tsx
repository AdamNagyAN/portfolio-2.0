import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section id="hero">
      <Image
        alt="blop"
        src="/images/Blop.svg"
        className="absolute w-1/2 hidden lg:block right-0 top-0 min-w-[600px] z-0"
        width={600}
        height={1080}
        priority
      />
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
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
            <h1 className="text-3xl font-medium mb-4">
              Hi, I&apos;m <span className="font-bold text-primary">Adam</span>{' '}
              Nagy
            </h1>
            <h1 className="text-xl font-medium">Frontend Web Developer</h1>
            <p className="py-6">
              {
                "Welcome to my portfolio! I specialize in creating beautiful and responsive websites that provide an excellent user experience. From concept to launch, I work closely with you to ensure your website reflects your brand and meets your goals. Check out my portfolio and let's work together to bring your vision to life!"
              }
            </p>
            <a href="#portfolio" className="btn btn-secondary">
              Contact
            </a>
            <a href="#portfolio" className="btn btn-outline btn-secondary ml-4">
              View portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
