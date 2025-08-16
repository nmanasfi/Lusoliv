"use client";
import { useState, createContext, useContext } from "react";
type Lang = "en" | "pt";
const LangContext = createContext<{lang:Lang,setLang:(l:Lang)=>void}|null>(null);
export function LanguageProvider({children}:{children:React.ReactNode}){
  const [lang,setLang]=useState<Lang>("en");
  return <LangContext.Provider value={{lang,setLang}}>{children}</LangContext.Provider>;
}
export function useLang(){ const c=useContext(LangContext); if(!c) throw new Error("useLang must be used within LanguageProvider"); return c; }
export function Toggle(){
  const {lang,setLang}=useLang();
  return (<div className="flex items-center gap-2 text-sm">
    <button className={`px-2 py-1 rounded ${lang==="en"?"bg-olive-800 text-white":"hover:bg-olive-100"}`} onClick={()=>setLang("en")} aria-label="Switch to English">EN</button>
    <button className={`px-2 py-1 rounded ${lang==="pt"?"bg-olive-800 text-white":"hover:bg-olive-100"}`} onClick={()=>setLang("pt")} aria-label="Mudar para Português">PT</button>
  </div>);
}
