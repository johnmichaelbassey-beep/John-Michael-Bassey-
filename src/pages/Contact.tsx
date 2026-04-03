import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Linkedin, Twitter, Instagram, Globe } from 'lucide-react';

export const Contact = () => {
  return (
    <main className="pt-32 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="text-black font-bold tracking-[0.4em] uppercase text-xs mb-6 block">
              Connect with me
            </span>
            <h1 className="text-6xl font-serif font-extrabold text-black mb-8 tracking-tight">
              Strategic <br /> Partnerships.
            </h1>
            <p className="text-xl text-black/60 mb-12 leading-relaxed font-medium">
              I am building a global network of innovators, investors, and leaders. 
              Whether you are looking to partner on a project, invest in my ventures, 
              or join my leadership team, I want to hear from you.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-black/5 flex items-center justify-center text-black">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs mb-1">Global Headquarters</h4>
                  <p className="text-black/50">Uyo, Akwa Ibom, Nigeria</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-black/5 flex items-center justify-center text-black">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs mb-1">Inquiries</h4>
                  <p className="text-black/50">johnmichaelbassey@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="mt-16 flex gap-6">
              <a 
                href="https://www.linkedin.com/in/michael-bassey-john-382447400?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 border border-black/10 flex items-center justify-center text-black hover:bg-black hover:text-white transition-all"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://x.com/jmbassey_1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 border border-black/10 flex items-center justify-center text-black hover:bg-black hover:text-white transition-all"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="https://www.instagram.com/jmb_gram?igsh=MXhnMDc1bXZmOXd3eA==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 border border-black/10 flex items-center justify-center text-black hover:bg-black hover:text-white transition-all"
              >
                <Instagram size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-brand-slate p-12"
          >
            <h3 className="text-2xl font-serif font-bold mb-8">Inquiry Form</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Full Name</label>
                  <input type="text" className="w-full bg-white border-none p-4 text-sm focus:ring-1 focus:ring-brand-gold outline-none" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Organization</label>
                  <input type="text" className="w-full bg-white border-none p-4 text-sm focus:ring-1 focus:ring-brand-gold outline-none" placeholder="Global Invest Corp" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Email Address</label>
                <input type="email" className="w-full bg-white border-none p-4 text-sm focus:ring-1 focus:ring-brand-gold outline-none" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Inquiry Type</label>
                <select className="w-full bg-white border-none p-4 text-sm focus:ring-1 focus:ring-brand-gold outline-none appearance-none">
                  <option>Strategic Partnership</option>
                  <option>Investor Relations</option>
                  <option>Media Inquiry</option>
                  <option>Career Opportunities</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Message</label>
                <textarea rows={4} className="w-full bg-white border-none p-4 text-sm focus:ring-1 focus:ring-brand-gold outline-none" placeholder="How can we build the future together?"></textarea>
              </div>
              <button className="w-full bg-brand-navy text-white py-5 text-xs uppercase tracking-[0.3em] font-bold hover:bg-brand-gold transition-all">
                Send Inquiry
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
};
