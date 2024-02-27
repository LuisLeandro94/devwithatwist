'use client'
import Header from "@/components/Header";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { useState } from "react";
import About from "./about";
import Contacts from "./contact";
import Project from "./projects";

export default function Home() {
  const [activeTheme, setActiveTheme] = useState<string>('light');
  
  return (
    <main className="absolute w-screen min-h-screen bg-color-light dark:bg-color-dark md:px-24 sm:px-11 px-44">
      <Header activeTheme={activeTheme} setActiveTheme={setActiveTheme} />
      <About />
      <Project activeTheme={activeTheme} setActiveTheme={setActiveTheme} />
      <Contacts />
    </main>
  );
}
