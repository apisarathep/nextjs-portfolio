"use client";
import React from "react";

const AboutSection = () => {
  
  return (
    <section className="text-black bg-white items-center" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="flex-col text-4xl font-bold text-black mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I&apos;m a dedicated and passionate student who desires to learn endlessly, looking for a position as a front-end developer and Business Analyst. I enjoy learning new technologies and staying up-to-date. Always eager to
          expand my knowledge and skills.
          </p>
          
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
