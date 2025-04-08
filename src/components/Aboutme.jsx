import React from 'react'
import profilePic from "../assets/raviKumarProfile.webp"
import { FaReact, FaJava, FaHtml5, FaCss3Alt, FaJs, FaDatabase, FaSwift } from "react-icons/fa";
import { SiMysql, SiSpring } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { TbBrandReactNative } from "react-icons/tb";
import { ABOUT_TEXT } from '../constants'
import { RevealOnScroll } from './RevealOnScroll';
import { motion } from "motion/react"

// import { SiReact, SiReactnative, SiMssql, SiSwift, SiSwiftui } from "react-icons/si";

const iconVariants = (duration) => ({
    initial: { y: -5 },
    animate: {
        y: [5, -5],
        transition: {
            duration: duration,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear',
        },
    },
});

const containerVariants = {
    animate: {
        transition: {
            staggerChildren: 0.5, // delay between each child animation
        },
    },
};

export const Aboutme = () => {
    return (
        <div className='min-h-screen'>
            <RevealOnScroll>
                <div className="flex flex-wrap">
                    {/* Left Side (Image) */}
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.7 }}
                        className="w-full lg:w-1/2 p-6"
                    >
                        <div className="flex justify-center">
                            <motion.img
                                src={profilePic}
                                alt="Profile"
                                className="border border-stone-800 rounded-3xl"
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                            />
                        </div>
                    </motion.div>

                    {/* Right Side (Text + Icons) */}
                    <motion.div
                        className="w-full lg:w-1/2 flex justify-center lg:justify-start items-center px-10"
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.7 }}
                    >
                        <motion.div
                            className="flex flex-col items-center lg:items-start space-y-2"
                            initial="initial"
                            whileInView="animate"
                            variants={containerVariants}
                        >
                            <motion.h2
                                initial={{ y: -30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                className="text-3xl font-bold"
                            >
                                About <span className="text-yellow-500">Me</span>
                            </motion.h2>

                            <motion.p
                                initial={{ y: -30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6 }}
                                className="text-xl font-bold pt-6"
                            >
                                Hello, I am Anuradha
                            </motion.p>

                            <motion.p
                                initial={{ y: -30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                className="w-full text-justify pt-2"
                            >
                                {ABOUT_TEXT}
                            </motion.p>

                            {/* Tech Icons */}

                            <motion.div
                                whileInView={{ opacity: 1, x: 0 }}
                                variants={containerVariants}
                                initial="initial"
                                animate="animate"
                                className='flex flex-wrap items-center lg:items-start gap-6 pt-5 max-w-[450px] justify-center lg:justify-start'>
                                {[
                                    { icon: <FaJs size={40} className="text-yellow-400" />, key: 'js' },
                                    { icon: <FaJava size={40} className="text-red-600" />, key: 'java' },
                                    { icon: <FaSwift size={40} className="text-orange-500" />, key: 'swift' },
                                    { icon: <FaHtml5 size={40} className="text-orange-600" />, key: 'html' },
                                    { icon: <FaReact size={40} className="text-blue-500" />, key: 'react' },
                                    { icon: <TbBrandReactNative size={40} className="text-purple-500" />, key: 'rn' },
                                    { icon: <SiSpring size={40} className="text-green-700" />, key: 'spring' },
                                    { icon: <SiMysql size={40} className="text-[#00758F]" />, key: 'mysql' },
                                ].map(({ icon, key }) => (
                                    <motion.div
                                        key={key}
                                        className='flex flex-col rounded-2xl border-2 border-neutral-800 p-4'
                                        variants={iconVariants(1.5)}
                                    >
                                        {icon}
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </RevealOnScroll>
        </div>
    )
}
