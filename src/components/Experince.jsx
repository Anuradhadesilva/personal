import React from 'react'
import Company from "../assets/Company.jpg"
import { RevealOnScroll } from './RevealOnScroll'
import { motion } from "motion/react"
export const Experince = () => {
    return (
        <div className='min-h-screen pb-4 lg:mb-30'>
            <RevealOnScroll>
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    className='flex justify-center mt-10'>
                    <h2 className='text-3xl font-bold '>
                        Experience
                    </h2>
                </motion.div>
                <div className='flex flex-wrap mt-10'>
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.7 }}
                        className='w-full lg:w-1/2 p-6 justify-center items-center'>
                        <div className='flex justify-center items-center'>
                            <img src={Company} alt="" className='lg:max-w-[500px] rounded-2xl border border-stone-800' />
                        </div>
                    </motion.div>
                    <div className='w-full lg:w-1/2 flex justify-center lg:justify-start items-center '>
                        <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.7 }}
                            className='flex flex-col items-center lg:items-start text-justify px-10 space-y-2'>
                            <motion.h2
                                initial={{ y: -30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6 }}
                                className='text-1xl lg:text-2xl font-bold'>
                                Intern Software Engineer - 4Axis Solutions (Pvt) Ltd
                            </motion.h2>
                            <p className='text-sm pb-8'>2024 Jan - 2024 July</p>
                            <motion.li
                                className='text-xs lg:text-base py-1 text-gray-300'
                                initial={{ y: -20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6 }}>
                                During my internship at 4 Axis Solutions, I gained hands-on experience in iOS development using Swift,
                                SwiftUI, and UIKit frameworks.
                            </motion.li>
                            <motion.li
                                className='text-xs lg:text-base py-1 text-gray-300'
                                initial={{ y: -20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6 }}>
                                I contributed to projects such as AI Photo Editor, ArtSpace, and Cologram, where I played a key role in developing subscription management systems, secure Firebase Authentication, and advanced export functionalities.
                            </motion.li>
                            <motion.li
                                className='text-xs lg:text-base py-1 text-gray-300'
                                initial={{ y: -20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6 }}>
                                I integrated Firebase Firestore & Cloud Functions to ensure seamless backend operations and conducted A/B testing for performance optimization.
                            </motion.li>
                            <motion.li
                                className='text-xs lg:text-base py-1 text-gray-300'
                                initial={{ y: -20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6 }}>
                                Additionally, I collaborated effectively using Git and Bitbucket to maintain efficient development workflows.
                            </motion.li>
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.7 }}
                                className='flex flex-wrap space-x-6 pt-6'>
                                <div className='flex flex-col rounded-2xl border-2 border-neutral-800 p-4 hover:bg-yellow-400 hover:text-black lg:w-[100px] items-center'>
                                    <h2 className='font-bold text-sm'>Swift</h2>
                                </div>
                                <div className='flex flex-col rounded-2xl border-2 border-neutral-800 p-4 hover:bg-yellow-400 hover:text-black lg:w-[100px] items-center'>
                                    <h2 className='font-bold text-sm'>SwiftUI</h2>
                                </div><div className='flex flex-col rounded-2xl border-2 border-neutral-800 p-4 hover:bg-yellow-400 hover:text-black lg:w-[100px] items-center'>
                                    <h2 className='font-bold text-sm'>UIKit</h2>
                                </div>
                                <div className='flex flex-col rounded-2xl border-2 border-neutral-800 p-4 hover:bg-yellow-400 hover:text-black lg:w-[100px] items-center'>
                                    <h2 className='font-bold text-sm'>Firebase</h2>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </RevealOnScroll>
        </div >
    )
}
