import React from 'react'
import profilePic from "../assets/raviKumarProfile.webp"
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { HERO_CONTENT } from '../constants'
import { RevealOnScroll } from './RevealOnScroll';
import { motion } from "motion/react"
export const Hero = () => {
    return (
        <div className='min-h-screen mt-14'>
            <RevealOnScroll>
                <div className='flex flex-wrap lg:flex-row-reverse'>

                    {/* Image Section */}
                    <motion.div
                        className='w-full lg:w-1/2 p-6'
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.7 }}

                    >
                        <div className='flex justify-center'>
                            <motion.img
                                src={profilePic}
                                alt=""
                                className='border border-stone-800 rounded-3xl'
                                initial={{ scale: 0.8, opacity: 0 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                            />
                        </div>
                    </motion.div>

                    {/* Text Section */}
                    <motion.div
                        className='w-full lg:w-1/2 flex justify-center lg:justify-start items-center px-10'
                        initial={{ x: -100, opacity: 0 }}
                        transition={{ duration: 0.7 }}
                        whileInView={{ x: 0, opacity: 1 }}
                    >
                        <div className='flex flex-col items-center lg:items-start space-y-2'>

                            <motion.h2
                                initial={{ y: -30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6 }}
                                className='text-yellow-400 text-1xl lg:text-2xl font-bold'

                            >
                                Hello, Welcome
                            </motion.h2>

                            <motion.h2
                                className='text-xl lg:text-3xl font-bold text-center'
                                initial={{ y: -30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                            >
                                I am Anuradha De Silva
                            </motion.h2>

                            <motion.p
                                className='l:w-full text-justify'
                                initial={{ x: -100, opacity: 0 }}
                                transition={{ duration: 0.7 }}
                                whileInView={{ x: 0, opacity: 1 }}
                            >
                                {HERO_CONTENT}
                            </motion.p>

                            {/* Social Links */}
                            <motion.div
                                className='flex flex-row space-x-5 pt-3'
                                initial={{ x: -100, opacity: 0 }}
                                transition={{ duration: 0.7 }}
                                whileInView={{ x: 0, opacity: 1 }}
                            >
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className='transform transition-all duration-300 hover:scale-150 hover:shadow-2xl hover:text-yellow-400'>
                                    <FaGithub className="text-3xl" />
                                </a>
                                <a href="#" target='_blank' rel="noopener noreferrer" className='transform transition-all duration-200 hover:scale-150 hover:shadow-xl hover:text-yellow-400' >
                                    <FaLinkedin className='text-3xl' />
                                </a>
                                <a href="#" target='_blank' rel="noopener noreferrer" className='transform transition-all duration-200 hover:scale-150 hover:shadow-xl hover:text-yellow-400'>
                                    <FaInstagram className='text-3xl' />
                                </a>
                            </motion.div>

                            {/* Download CV Button */}
                            <motion.div
                                className='pt-6'
                                initial={{ opacity: 0, scale: 0.9 }}
                                transition={{ delay: 0.8, duration: 0.5 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                            >
                                <a
                                    href="#"
                                    className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold 
                  transition-transform transform duration-300 hover:scale-110 hover:shadow-lg"
                                >
                                    Download CV
                                </a>
                            </motion.div>

                        </div>
                    </motion.div>

                </div>
            </RevealOnScroll>
        </div>
    );
}
