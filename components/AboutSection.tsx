"use client";
import SectionHeading from "./SectionHeading";
import { useLang } from "./LanguageToggle";
const copy={
  en:{kicker:"Who we are",title:"Quietly rigorous. Portugal-rooted.",body:[
    "Lusoliv is a Portugal-based operations company founded to take the friction out of remote property ownership.",
    "We build reliable partner networks, document everything, and keep owners informed with simple monthly updates.",
    "As we grow, we’ll introduce a curated exports line — olive oil and seafood — leveraging trusted producers in Portugal."
  ]},
  pt:{kicker:"Quem somos",title:"Rigor discreto. Enraizados em Portugal.",body:[
    "A Lusoliv é uma empresa de operações sediada em Portugal, criada para simplificar a gestão de propriedades à distância.",
    "Construímos redes de parceiros fiáveis, documentamos tudo e mantemos os proprietários informados com relatórios mensais simples.",
    "À medida que crescemos, lançaremos uma linha de exportações — azeite e produtos do mar — com produtores de confiança em Portugal."
  ]}
};
export default function AboutSection(){
  const {lang}=useLang(); const c=copy[lang];
  return (<section id="about" className="py-14 md:py-20 border-t border-olive-100">
    <div className="container-narrow">
      <SectionHeading kicker={c.kicker} title={c.title} />
      <div className="grid md:grid-cols-3 gap-6">
        {c.body.map((p,i)=>(<p key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-olive-100 text-olive-800">{p}</p>))}
      </div>
    </div>
  </section>);
}
