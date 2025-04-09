import React from 'react'
import { PROJECTS } from '../constants'
import { FaReact, FaJava, FaHtml5, FaCss3Alt, FaJs, FaDatabase, FaSwift } from "react-icons/fa";
import { IoLogoFirebase } from 'react-icons/io5';
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql, SiSpring } from "react-icons/si";
import { MdAttachEmail } from "react-icons/md";
import { RevealOnScroll } from './RevealOnScroll';
import { motion } from "motion/react"

export const Works = () => {

    const iconMap = {
        FaHtml5: { icon: FaHtml5, color: "text-orange-600" },
        FaCss3Alt: { icon: FaCss3Alt, color: "text-blue-500" },
        FaReact: { icon: FaReact, color: "text-cyan-400" },
        IoLogoFirebase: { icon: IoLogoFirebase, color: "text-yellow-400" },
        SiMysql: { icon: SiMysql, color: "text-blue-400" },
        RiTailwindCssFill: { icon: RiTailwindCssFill, color: "text-blue-400" },
        SiSpring: { icon: SiSpring, color: "text-green-600" },
        MdAttachEmail: { icon: MdAttachEmail, color: "text-red-600" },
    };
    return (
        <div className='min-h-screen pb-4 lg:mb-30'>
            <RevealOnScroll>
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    className='flex justify-center text-3xl font-bold mb-10 '>
                    <h2>
                        Projects
                    </h2>
                </motion.div>
                <motion.div className='flex flex-col'>
                    {PROJECTS.map((project, index) => (
                        <motion.a
                            key={index}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-wrap mb-10 no-underline"
                            initial={{ x: 0, opacity: 1 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            whileHover={{ scale: 1.05 }} // Scales up by 5% on hover
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            <motion.div
                                initial={{ x: -100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.7 }}
                                className='w-full lg:w-1/2 '>
                                <div className='flex justify-center lg:justify-end lg:mr-10'>
                                    <img
                                        src={project.image}
                                        width={200}
                                        alt={project.title}
                                        className='mb-6 rounded-lg h-[200px] shadow-lg' />
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ x: 100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.7 }}
                                className='w-full lg:w-1/2'>
                                <div className='flex flex-col justify-center lg:items-start items-center px-6 max-w-[500px]'>
                                    <h2 className='text-lg font-bold mb-2 '>{project.title}</h2>
                                    <p className='text-gray-400 mb-4 text-justify'>{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, idx) => {
                                            const IconData = iconMap[tech];
                                            if (!IconData) return null;

                                            const { icon: IconComponent, color } = IconData;
                                            return (
                                                <span
                                                    key={idx}
                                                    className="flex items-center justify-center rounded-xl border-2 border-neutral-800 p-3"
                                                >
                                                    <IconComponent className={`text-xl ${color}`} />
                                                </span>
                                            );
                                        })}
                                    </div>
                                </div>
                            </motion.div>
                        </motion.a>
                    ))}
                </motion.div>
            </RevealOnScroll>
        </div>

    )
}
