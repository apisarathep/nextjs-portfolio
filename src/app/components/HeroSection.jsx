"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import {motion} from "framer-motion";
import Link from 'next/link';
import {HiDownload} from "react-icons/hi";
import {BsLinkedin} from "react-icons/bs";
import {FaGithubSquare} from "react-icons/fa";

const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-12 px-12 mt-10">
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-pink-200'>
                            Hello , I'm{" "}
                        </span>
                        <br></br>
                        <TypeAnimation
                            sequence={[
                                'Apisara Thepsing',
                                1000, 

                                'Junior CS student',
                                1000
                            ]}
                            wrapper="span"
                            speed={30}
                            repeat={Infinity}
                            /> 
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl px-12 mt-11">
                         
                         I'm a junior Computer Science Student at Thammasat University.
                
                    </p>
                    <motion.div className='flex flex-col sm:flex-row items-center gap-2 px-4 text-lg font-medium mt-11'
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7 }}
                        
                    >
                        <a
                            className='group bg-white text-pink-600 rounded-full gap-2 px-7 py-3
                                    flex outline-none focus:scale-110 hover:scale-110 hover:bg-pink-500
                                    hover:text-white active:scale-105 transition cursor-pointer'
                            href='yamCV.pdf' // Link to the API route
                            download
                            >
                            Download CV<HiDownload style={{ fontSize: "24px" }}
                            className="opacity-60 group-hover:translate-y-1 transition"
                            />
                            </a>


                        

                        <a className='bg-white text-blue-600 rounded-full gap-2 p-4 ml-2 flex
                            outline-none focus:scale-110 hover:scale-110 hover:bg-pink-500
                            hover:text-white active:scale-105 transition cursor-pointer'
                            href='https://www.linkedin.com/in/apisara-thepsing-8753b4249/' target='_blank'>
                            LinkedIn<BsLinkedin style={{ fontSize: "26px" }}/>
                        </a>
                      
                        <a className='bg-white text-black rounded-full gap-2 p-4 ml-2
                            flex outline-none focus:scale-110 hover:scale-110 hover:bg-pink-500
                            hover:text-white active:scale-105 transition cursor-pointer'
                            href='https://github.com/apisarathep' target='_blank'>
                            GitHub<FaGithubSquare style={{ fontSize: "30px" }}/>
                        </a>
                    

                    </motion.div>
                </div>
                <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                    <div>
                    <Image
                        src="/images/yam.jpg"
                        alt="Apisara portrait"
                        className="absolute transform -translate-x-1/2 -translate-y-1/3 top-1/2 left-1/2"
                        width={300}
                        height={300}
                        style={{ borderRadius: '50%' }}
                        />
                    </div>
                
                </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection