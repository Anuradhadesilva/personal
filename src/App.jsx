import React from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Aboutme } from './components/Aboutme'
import { Experince } from './components/Experince'
import { Works } from './components/Works'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Contact } from './components/Contact'


export const App = () => {
  return (
    <div className='overflow-x-hidden text-stone-300 antialiased scroll-smooth'>
      {/* Background Effect */}
      <div className='fixed inset-0 -z-10'>
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      <Navbar />

      <section id="home" className="scroll-mt-[90px]">
        <Hero />
      </section>

      <section id="about" className="scroll-mt-[60px]">
        <Aboutme />
      </section>

      <section id="experince" className="scroll-mt-[80px]">
        <Experince />
      </section>

      <section id="project" className="scroll-mt-[80px]">
        <Works />
      </section>

      <section id="contact" className="">
        <Contact />
      </section>

    </div>
    // <Router>
    //   <div className='overflow-x-hidden text-stone-300 antialiased'>
    //     {/* Background Effect */}
    //     <div className='fixed inset-0 -z-10'>
    //       <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
    //     </div>

    //     <Navbar />

    //     {/* Routes */}
    //     <Routes>
    //       <Route path="/" element={<Hero />} />
    //       <Route path="/about" element={<Aboutme />} />
    //       <Route path="/experince" element={<Experince />} />
    //       <Route path="/project" element={<Works />} />
    //     </Routes>
    //   </div>
    // </Router>
  )
}

