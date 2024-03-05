'use client'
import { Props, github, linkedin, navbarItems } from "@/utils/exports";
import { AnimatePresence, motion } from "framer-motion";
import { Divide as Hamburger } from 'hamburger-react';
import React, { useRef, useState } from "react";
import { useClickAway } from 'react-use';
import ThemeSwitcher from "./ThemeSwitcher";

const logo = {
    light: (<svg height="100%" viewBox="0 0 94 142" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M54 33V106.8L68.6 108V44.7H93.2L91.7 33H54Z" fill="#1E1E1E"/>
    <path d="M40 109V35.2L25.4 34V97.3H0.799999L2.3 109H40Z" fill="#1E1E1E"/>
    </svg>),
    dark: (<svg height="100%" viewBox="0 0 94 142" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M54 33V106.8L68.6 108V44.7H93.2L91.7 33H54Z" fill="#EEEEEE"/>
    <path d="M40 109V35.2L25.4 34V97.3H0.799999L2.3 109H40Z" fill="#EEEEEE"/>
    </svg>)
}

const Header: React.FC<Props> = ({activeTheme, setActiveTheme}): JSX.Element => {
    const [isOpen, setOpen] = useState(false)
    const ref = useRef(null)

    useClickAway(ref, () => setOpen(false));

    return (
        <nav className="relative">
            <div className="absolute top-0 w-full bg-color-light dark:bg-color-dark h-32 grid grid-cols-3">
                <a className="h-32" href="/">{logo[activeTheme as keyof typeof logo]}</a>
                <div className="text-color-dark dark:text-color-light lg:flex text-center  justify-end col-span-2 hidden">
                    <ul className="grid grid-cols-5 gap-5 font-francois-one text-3xl my-auto items-center">
                        {navbarItems.map((item, index) => (
                            <li key={index} className="w-full">
                                <a href={item.href} className="hover:italic transition-all duration-300 ease-in-out w-full block h-full">{item.name}</a>
                            </li>
                        ))}
                        <div className="grid grid-cols-2 gap-4">
                            <a href="https://www.linkedin.com/in/luisleandro94" target="_blank" rel="noopener">{linkedin[activeTheme as keyof typeof linkedin]}</a>
                            <a href="https://www.github.com/luisleandro94" target="_blank" rel="noopener">{github[activeTheme as keyof typeof github]}</a>
                        </div>
                        <ThemeSwitcher activeTheme={activeTheme} setActiveTheme={setActiveTheme} />
                    </ul>
                </div>
                <div ref={ref} className="lg:hidden text-color-dark dark:text-color-light flex text-center justify-end col-span-2 items-center gap-6">
                    <ThemeSwitcher activeTheme={activeTheme} setActiveTheme={setActiveTheme} />
                    <Hamburger toggled={isOpen} size={40} toggle={setOpen}/>
                    <AnimatePresence>
                    {isOpen && (
                        <motion.div initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }} className="fixed left-0 shadow-4xl right-0 top-32 pt-0 w-full px-24">
                            <ul className="grid grid-cols-3 gap-0 text-center">
                            {navbarItems.map((item, index) => {
                                return (
                                <motion.li initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{
                                  type: "spring",
                                  stiffness: 260,
                                  damping: 20,
                                  delay: 0.1 + index / 10,
                                }}
                                    key={index}
                                    className="p-[0.08rem] dark:bg-neutral-800 bg-neutral-200"
                                >
                                    <a
                                    onClick={() => setOpen((prev) => !prev)}
                                    className={
                                        "flex items-center justify-between w-full p-5  "
                                    }
                                    href={item.href}
                                    >
                                    <span className="flex text-lg m-auto ">{item.name}</span>
                                    </a>
                                </motion.li>
                                );
                            })}
                            </ul>
                        </motion.div>
                    )}
                    </AnimatePresence>
                </div>
            </div>
        </nav>
    )
}

export default Header