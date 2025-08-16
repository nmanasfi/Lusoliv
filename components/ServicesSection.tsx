"use client";
import SectionHeading from "./SectionHeading";
import { Wrench, FileText, ShieldCheck, Ship, Home, Wallet } from "lucide-react";
import { useLang } from "./LanguageToggle";
const copy={
  en:{kicker:"What we do",title:"Operations you can trust",items:[
    {icon:Home,title:"Remote Property Management",desc:"Full-service care for your apartment or villa — inspections, housekeeping partners, maintenance coordination, and guest-ready standards."},
    {icon:FileText,title:"Admin & Compliance",desc:"Utilities, invoices, receipts, and reporting — kept organized and sent to you on a set schedule."},
    {icon:Wrench,title:"Maintenance Network",desc:"Trusted network of cleaners, handymen, and technicians with clear SLAs and fair pricing."},
    {icon:Wallet,title:"Cost Control",desc:"We negotiate rates and track spend so there are no surprises."},
    {icon:ShieldCheck,title:"Security & Access",desc:"Key handling, smart locks, and secure check-in processes to protect your property."},
    {icon:Ship,title:"Coming Soon: Exports",desc:"Premium Portuguese olive oil and seafood exports to the Gulf — B2B channels and quality assurance."}
  ]},
  pt:{kicker:"O que fazemos",title:"Operações em que pode confiar",items:[
    {icon:Home,title:"Gestão Remota de Propriedades",desc:"Serviço completo para o seu apartamento ou moradia — inspeções, parceiros de limpeza, manutenção e padrões prontos para hóspedes."},
    {icon:FileText,title:"Administração & Compliance",desc:"Serviços, faturas, recibos e relatórios — tudo organizado e enviado numa agenda definida."},
    {icon:Wrench,title:"Rede de Manutenção",desc:"Rede de confiança com equipas de limpeza e técnicos, com SLAs claros e preços justos."},
    {icon:Wallet,title:"Controlo de Custos",desc:"Negociamos preços e acompanhamos os gastos para evitar surpresas."},
    {icon:ShieldCheck,title:"Segurança & Acessos",desc:"Gestão de chaves, fechaduras inteligentes e processos de check-in seguros."},
    {icon:Ship,title:"Em Breve: Exportações",desc:"Exportação de azeite e produtos do mar para o Golfo — canais B2B e garantia de qualidade."}
  ]}
};
export default function ServicesSection(){
  const {lang}=useLang(); const c=copy[lang];
  return (<section id="services" className="py-14 md:py-20 border-t border-olive-100">
    <div className="container-narrow">
      <SectionHeading kicker={c.kicker} title={c.title} />
      <div className="grid md:grid-cols-2 gap-6">
        {c.items.map((item,idx)=>(<div key={idx} className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-md transition-shadow border border-olive-100">
          <div className="flex items-start gap-4">
            <div className="rounded-xl bg-olive-100 p-3">{<item.icon className="h-6 w-6" />}</div>
            <div><div className="font-semibold text-olive-900 text-lg">{item.title}</div>
              <p className="text-olive-700 mt-1">{item.desc}</p></div>
          </div>
        </div>))}
      </div>
    </div>
  </section>);
}
