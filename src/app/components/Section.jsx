"use client";
import { MotionConfig } from 'framer-motion'
import React from 'react'
import {motion} from "framer-motion";


export default function Section() {
  return (
    <motion.div className='bg-gray-200 my-24 h-16 w-1 rounded-full hidden sm:block '
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
        ></motion.div>
  )
}
 