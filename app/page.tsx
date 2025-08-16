import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/components/LanguageToggle";
export default function Page(){
  return (<LanguageProvider>
    <Navbar/>
    <main>
      <Hero/>
      <ServicesSection/>
      <section id="contact" className="py-14 md:py-20 border-t border-olive-100">
        <div className="container-narrow">
          <div className="mb-10">
            <div className="text-xs uppercase tracking-widest text-olive-600">Get in touch</div>
            <h2 className="text-2xl md:text-4xl font-semibold text-olive-900 mt-2">Let’s talk about your property</h2>
          </div>
          <ContactForm/>
        </div>
      </section>
      <AboutSection/>
    </main>
    <Footer/>
  </LanguageProvider>);
}
