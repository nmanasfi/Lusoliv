"use client";
import { motion } from "framer-motion";
import { useLang } from "./LanguageToggle";
const copy={
  en:{title:"Property management in Portugal, done right.",subtitle:"Lusoliv manages your home remotely with reliable operations and transparent reporting. Expanding soon into premium olive oil and seafood exports.",cta:"Talk to us"},
  pt:{title:"Gestão de propriedades em Portugal, sem complicações.",subtitle:"A Lusoliv gere a sua casa à distância com operações fiáveis e relatórios transparentes. Em breve: exportação de azeite premium e produtos do mar.",cta:"Fale connosco"}
};
export default function Hero(){
  const {lang}=useLang();
  return (<section id="top" className="relative">
    <div className="container-narrow py-20 md:py-28">
      <motion.h1 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:0.5}} className="text-4xl md:text-6xl font-semibold text-olive-900 leading-tight">{copy[lang].title}</motion.h1>
      <motion.p initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:0.6,delay:0.1}} className="mt-4 text-lg md:text-xl text-olive-700 max-w-3xl">{copy[lang].subtitle}</motion.p>
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.2}} className="mt-8">
        <a href="#contact" className="inline-block rounded-2xl bg-olive-900 text-white px-6 py-3 text-base md:text-lg hover:bg-olive-800">{copy[lang].cta}</a>
      </motion.div>
    </div>
  </section>);
}
