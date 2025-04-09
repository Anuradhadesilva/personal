import React, { useState } from 'react'
import { Link } from 'react-scroll';
import { IoMenu, IoClose } from "react-icons/io5";


export const Navbar = () => {
    const navItems = [
        { name: "Home", path: "#" },
        { name: "About", path: "#about" },
        { name: "Experince", path: "#experince" },
        { name: "Projects", path: "#project" },
        { name: "Contact", path: "#contact" },
    ]

    const [touchMenu, setTouchMenu] = useState(false);
    return (
        <>
            {/* Fixed Navbar */}
            <nav className='fixed top-0 left-0 w-full backdrop-blur-lg z-50 shadow-md border border-white/10'>
                <div className='flex justify-between items-center md:px-8 px-6 py-4 mr-8'>
                    <h1 className='text-xl font-bold'>
                        <a href="#" className="hover:text-yellow-500 transition">
                            About<span className='text-yellow-500'>Me.</span>
                        </a>
                    </h1>

                    {/* Desktop Menu */}
                    <div className='hidden md:flex items-center space-x-8'>
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.path}
                                className="hover:text-yellow-500 transition font-semibold"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className='md:hidden' onClick={() => setTouchMenu(true)}>
                        <IoMenu size={28} />
                    </div>
                </div>
            </nav>

            {/* Slide-in Mobile Menu */}
            <div className={`fixed md:hidden top-0 right-0 h-full w-[70%] max-w-xs bg-neutral-900 z-50 transform transition-transform duration-300 ease-in-out ${touchMenu ? "translate-x-0" : "translate-x-full"
                }`}>
                <div className='flex justify-between px-6 py-4 border-b border-stone-800'>
                    <h2 className='text-lg'>Menu</h2>
                    <IoClose size={28} onClick={() => setTouchMenu(!touchMenu)} />
                </div>
                <div className='flex flex-col space-y-6 p-6 '>
                    {
                        navItems.map((item) => (
                            <a
                                key={item.name}
                                href={`${item.path}`}
                                className='text-lg hover:text-yellow-400 '>
                                {item.name}
                            </a>
                        ))
                    }
                </div>
            </div>
            {touchMenu && (
                <div className='fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden' onClick={() => setTouchMenu(false)} />
            )
            }
        </>
    )
}


// <div
//     className={`fixed top-0 right-0 h-full w-[70%] max-w-xs backdrop-blur-lg z-50 transform transition-transform duration-300 ease-in-out ${touchMenu ? "translate-x-0" : "translate-x-full"
//         }`}
// >
//     <div className="flex justify-between items-center px-6 py-4 border-b border-stone-700">
//         <h2 className="text-lg font-bold">Menu</h2>
//         <IoClose size={28} onClick={() => setTouchMenu(false)} className="cursor-pointer" />
//     </div>

//     <div className="flex flex-col space-y-6 p-6">
//         {navItems.map((item) => (
//             <a
//                 key={item.name}
//                 href={item.path}
//                 className="text-lg hover:text-yellow-500 transition"
//                 onClick={() => setTouchMenu(false)}
//             >
//                 {item.name}
//             </a>
//         ))}
//     </div>
// </div>

// {/* Background dim when open */ }
// {
//     touchMenu && (
//         <div
//             className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
//             onClick={() => setTouchMenu(false)}
//         />
//     )
// }