"use client";
import { Toggle } from "./LanguageToggle";
import { useState } from "react";
import { Menu } from "lucide-react";
export default function Navbar(){
  const [open,setOpen]=useState(false);
  return (<header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-olive-100">
    <div className="container-narrow flex items-center justify-between h-16">
      <a href="#top" className="flex items-center gap-2 font-semibold">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-olive-800 text-white">L</span>
        <span>Lusoliv</span>
      </a>
      <nav className="hidden md:flex items-center gap-8">
        <a href="#services" className="hover:text-olive-700">Services</a>
        <a href="#about" className="hover:text-olive-700">About</a>
        <a href="#contact" className="hover:text-olive-700">Contact</a>
        <Toggle />
      </nav>
      <button className="md:hidden" onClick={()=>setOpen(!open)} aria-label="Menu"><Menu/></button>
    </div>
    {open && (<div className="md:hidden border-t border-olive-100 bg-white">
      <div className="container-narrow py-2 flex flex-col gap-2">
        <a onClick={()=>setOpen(false)} href="#services" className="py-2">Services</a>
        <a onClick={()=>setOpen(false)} href="#about" className="py-2">About</a>
        <a onClick={()=>setOpen(false)} href="#contact" className="py-2">Contact</a>
        <div className="py-2"><Toggle/></div>
      </div>
    </div>)}
  </header>);
}
