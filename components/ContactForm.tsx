"use client";
import { useState } from "react";
export default function ContactForm(){
  const endpoint=process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT||"";
  const [status,setStatus]=useState<"idle"|"sending"|"sent"|"error">("idle");
  async function onSubmit(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    const form=e.currentTarget; const formData=new FormData(form); setStatus("sending");
    try{
      if(!endpoint){
        const name=encodeURIComponent(String(formData.get("name")||""));
        const email=encodeURIComponent(String(formData.get("email")||""));
        const phone=encodeURIComponent(String(formData.get("phone")||""));
        const message=encodeURIComponent(String(formData.get("message")||""));
        window.location.href=`mailto:info@lusoliv.com?subject=Website inquiry from ${name}&body=Email:%20${email}%0APhone:%20${phone}%0A%0A${message}`;
        setStatus("sent"); return;
      }
      const res=await fetch(endpoint,{method:"POST",headers:{"Accept":"application/json"},body:formData});
      if(res.ok){ setStatus("sent"); form.reset(); } else { setStatus("error"); }
    }catch{ setStatus("error"); }
  }
  return (<form onSubmit={onSubmit} className="space-y-4">
    {!endpoint && (<div className="rounded-lg border border-olive-200 bg-olive-50 p-3 text-sm">Tip: Add your Formspree endpoint in <code>.env</code> to enable direct submissions. For now this will open your email app.</div>)}
    <div className="grid md:grid-cols-2 gap-4">
      <div><label className="block text-sm mb-1">Name</label><input name="name" required className="w-full rounded-xl border border-olive-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-olive-400"/></div>
      <div><label className="block text-sm mb-1">Email</label><input type="email" name="email" required className="w-full rounded-xl border border-olive-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-olive-400"/></div>
      <div><label className="block text-sm mb-1">Phone</label><input name="phone" className="w-full rounded-xl border border-olive-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-olive-400"/></div>
      <div className="md:col-span-2"><label className="block text-sm mb-1">How can we help?</label><textarea name="message" rows={4} className="w-full rounded-xl border border-olive-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-olive-400"/></div>
    </div>
    <button disabled={status==="sending"} className="rounded-2xl bg-olive-900 text-white px-6 py-3 hover:bg-olive-800 disabled:opacity-60">{status==="sending"?"Sending...":"Send message"}</button>
    {status==="sent"&&<div className="text-olive-700">Thanks — we’ll get back to you shortly.</div>}
    {status==="error"&&<div className="text-red-700">Sorry, something went wrong. Please try again or email info@lusoliv.com.</div>}
  </form>);
}
