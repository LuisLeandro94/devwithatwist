'use client'
import { Props, github, linkedin } from "@/utils/exports";
import React from "react";
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
    
    return (
        <nav className="relative">
            <div className="absolute top-0 w-full bg-color-light dark:bg-color-dark h-32 grid grid-cols-2">
            <a className="h-32" href="/">{logo[activeTheme as keyof typeof logo]}</a>
            <div className="text-color-dark dark:text-color-light flex text-center  justify-end">
                <ul className="grid grid-cols-5 gap-5 font-francois-one text-3xl my-auto">
                    <h2><a href="/about">About</a></h2>
                    <h2><a href="/contacts">Contacts</a></h2>
                    <h2><a href="/work">Work</a></h2>
                    <div className="grid grid-cols-2 gap-4">
                        <a href="https://www.linkedin.com/in/luisleandro94" target="_blank" rel="noopener">{linkedin[activeTheme as keyof typeof linkedin]}</a>
                        <a href="https://www.github.com/luisleandro94" target="_blank" rel="noopener">{github[activeTheme as keyof typeof github]}</a>
                    </div>
                    <ThemeSwitcher activeTheme={activeTheme} setActiveTheme={setActiveTheme} />
                </ul>
            </div>
            </div>
        </nav>
    )
}

export default Header