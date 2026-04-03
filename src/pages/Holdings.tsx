import React from 'react';
import { motion } from 'framer-motion';
import { INDUSTRIES } from '../constants';
import * as Icons from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export const Holdings = () => {
  const location = useLocation();

  React.useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <main className="pt-32 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-20">
          <span className="text-black font-bold tracking-[0.4em] uppercase text-xs mb-6 block">
            The Ecosystem
          </span>
          <h1 className="text-6xl font-serif font-extrabold text-black mb-8 tracking-tight">
            My Ventures & <br /> Strategic Ecosystem
          </h1>
          <p className="text-xl text-black/60 max-w-3xl leading-relaxed mb-12 font-medium">
            I have structured my conglomerate to ensure maximum synergy across critical sectors. 
            By integrating Agriculture with Logistics, and Energy with Manufacturing, I am 
            building a self-sustaining economic engine for the next century.
          </p>

          {/* Responsive Sector Navigation */}
          <div className="sticky top-20 z-40 bg-white/80 backdrop-blur-md border-y border-black/5 -mx-6 px-6 py-2 mb-12 overflow-x-auto no-scrollbar scroll-smooth">
            <div className="flex gap-4 min-w-max">
              {INDUSTRIES.map((industry) => (
                <a 
                  key={industry.id}
                  href={`#${industry.id}`}
                  className="text-[10px] uppercase tracking-[0.2em] font-bold text-black/40 hover:text-black hover:bg-black/5 px-4 py-3 transition-all whitespace-nowrap rounded-sm"
                >
                  {industry.name}
                </a>
              ))}
            </div>
          </div>
        </header>

        <div className="space-y-32">
          {INDUSTRIES.map((industry, index) => {
            const Icon = (Icons as any)[industry.icon];
            return (
              <motion.section 
                key={industry.id}
                id={industry.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="grid lg:grid-cols-2 gap-16 items-center"
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="aspect-video bg-gray-200 overflow-hidden">
                    <img 
                      src={industry.image} 
                      alt={industry.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-white border border-black/20 text-black">
                      <Icon size={24} />
                    </div>
                    <h2 className="text-4xl font-serif font-extrabold text-black tracking-tight">{industry.name}</h2>
                  </div>
                  <p className="text-lg text-black/60 mb-8 leading-relaxed">
                    {industry.description}
                  </p>

                  <div className="grid gap-8 mb-10">
                    <div className="border-l-2 border-black/10 pl-6">
                      <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-black mb-2">The Problem</h4>
                      <p className="text-sm text-black/60 leading-relaxed italic">
                        {industry.problem}
                      </p>
                    </div>
                    <div className="border-l-2 border-black/10 pl-6">
                      <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-black mb-2">Why I am Stepping In</h4>
                      <p className="text-sm text-black/60 leading-relaxed">
                        {industry.whyStepIn}
                      </p>
                    </div>
                    <div className="border-l-2 border-black/10 pl-6">
                      <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-black mb-2">My Solution</h4>
                      <p className="text-sm text-black/60 leading-relaxed font-medium mb-4">
                        {industry.solution}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {industry.keyInitiatives.map((item: string) => (
                          <span key={item} className="text-[9px] uppercase tracking-widest bg-black text-white px-2 py-1">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="bg-black text-white p-8 mb-10">
                    <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 mb-2">The Vision</h4>
                    <p className="font-serif italic text-xl">
                      "{industry.vision}"
                    </p>
                  </div>
                  <button className="group flex items-center gap-4 text-black font-bold uppercase tracking-widest text-xs">
                    Explore {industry.name} Opportunities <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </motion.section>
            );
          })}
        </div>
      </div>
    </main>
  );
};
