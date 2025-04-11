import React, { useState } from 'react'
import { RevealOnScroll } from './RevealOnScroll'
import { motion } from "motion/react"
import emailjs from 'emailjs-com'

const SERVICE_ID = "service_263aqn8";
const TEMPLATE_ID = "template_rt8vu3e";
const PUBLIC_KEY = "8J0cxtdeRzy6EBLeP";

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
            .then(() => {
                alert("Message sent!");
                setFormData({ name: "", email: "", message: "" });
            })
            .catch(() => alert("Something went wrong, please try again!"));
    };

    return (
        <div className='min-h-screen flex items-center justify-center pb-20'>
            <RevealOnScroll>
                <div className='w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6'>
                    <motion.div
                        initial={{ y: -100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7 }}
                        className='mb-10 items-center justify-center text-center'>
                        <h2 className='font-bold text-3xl'>Get In <span className='text-yellow-400'>Touch</span></h2>
                    </motion.div>
                    <motion.form
                        onSubmit={handleSubmit}
                        className='space-y-6'
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7 }}>
                        <div className='relative'>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                placeholder='your name'
                                className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-yellow-500 focus:bg-yellow-500/2' />
                        </div>
                        <div className='relative'>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                placeholder='example@gmail.com'
                                className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-yellow-500 focus:bg-yellow-500/2' />
                        </div>
                        <div className="relative">
                            <textarea
                                id="message"
                                name="message"
                                required
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                rows={5}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-yellow-500 focus:bg-yellow-500/2"
                                placeholder="Your Message..."
                            />
                        </div>

                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ delay: 0.4, duration: 0.7 }}>
                            <button
                                type="submit"
                                className='w-full bg-yellow-500 text-black py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]'>
                                Send Message
                            </button>
                        </motion.div>
                    </motion.form>
                </div>
            </RevealOnScroll>
        </div>
    );
};