import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, ShieldCheck, Zap } from 'lucide-react';
import { INDUSTRIES } from '../constants';
import * as Icons from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-white/90 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
          className="w-full h-full object-cover opacity-10 grayscale"
          alt="Infrastructure"
          referrerPolicy="no-referrer"
        />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale pointer-events-none"
        >
          <source 
            src="https://assets.mixkit.co/videos/preview/mixkit-construction-site-with-cranes-and-buildings-4453-large.mp4" 
            type="video/mp4" 
          />
        </video>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <span className="inline-block text-black font-bold tracking-[0.4em] uppercase text-xs mb-6">
            Founder | Industrialist | Visionary
          </span>
          <h1 className="text-6xl md:text-8xl font-serif font-extrabold leading-tight mb-8 text-black tracking-tight">
            I am building the <span className="italic font-normal">Future</span> of Global Industry.
          </h1>
          <p className="text-xl text-black/60 max-w-2xl mb-10 leading-relaxed font-medium">
            I am John Michael Bassey. My mission is to architect the economic sovereignty of Africa 
            through a multi-industry conglomerate focused on innovation, infrastructure, 
            and sustainable global development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/holdings" className="bg-black text-white px-10 py-5 text-sm uppercase tracking-widest font-bold hover:bg-white hover:text-black border border-black transition-all duration-300 flex items-center gap-3">
              My Ventures <ArrowRight size={18} />
            </Link>
            <Link to="/story" className="border border-black text-black px-10 py-5 text-sm uppercase tracking-widest font-bold hover:bg-black hover:text-white transition-all duration-300 text-center">
              The Story
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 right-10 hidden lg:flex flex-col gap-8">
        <div className="flex items-center gap-4 text-black/40">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll to explore</span>
          <div className="w-px h-20 bg-black/20" />
        </div>
      </div>
    </section>
  );
};

const IndustryCard = ({ industry, index }: { industry: any; index: number; key?: string }) => {
  const Icon = (Icons as any)[industry.icon];
  
  return (
    <Link to={`/holdings#${industry.id}`} className="block">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        viewport={{ once: true }}
        className="group relative bg-white p-8 border border-black/10 hover:border-black transition-all duration-500 cursor-pointer h-full"
      >
        <div className="mb-6 text-black group-hover:scale-110 transition-transform duration-300">
          <Icon size={32} strokeWidth={1.5} />
        </div>
        <h3 className="text-2xl font-serif font-bold mb-4 group-hover:opacity-60 transition-opacity">
          {industry.name}
        </h3>
        <p className="text-black/50 text-sm leading-relaxed mb-6">
          {industry.description}
        </p>
        <div className="flex items-center gap-2 text-black font-bold text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
          View Sector <ArrowRight size={12} />
        </div>
      </motion.div>
    </Link>
  );
};

const FounderSection = () => {
  return (
    <section className="py-32 bg-brand-navy text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="aspect-[4/5] bg-black/10 overflow-hidden relative group rounded-sm shadow-2xl"
            >
              <img 
                src="input_file_2.png" 
                className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0"
                alt="John Michael Bassey"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 border-[20px] border-black/5 pointer-events-none" />
            </motion.div>
            <div className="absolute -bottom-6 -left-6 bg-black p-6 text-white hidden md:block">
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold">Founder & Chairman</p>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-black font-bold tracking-[0.4em] uppercase text-xs mb-6 block">
              The Architect of Vision
            </span>
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-8 leading-tight text-white">
              John Michael <br /> Bassey
            </h2>
            <div className="w-20 h-1 bg-white mb-8" />
            <p className="text-xl text-white/80 mb-8 leading-relaxed font-serif italic">
              "I am not merely building a conglomerate; I am architecting the economic sovereignty of a continent. 
              My vision spans a century, ensuring that the infrastructure I build today powers the global leaders of tomorrow."
            </p>
            <p className="text-white/60 mb-10 leading-relaxed">
              John Michael Bassey is a global thinker and industrialist dedicated to bridging the gap between 
              African potential and global standards. Under my leadership, Bassiob Bassiob Group has 
              evolved into a multi-sector engine of innovation and sustainable growth.
            </p>
            <div className="space-y-6 mb-10">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center shrink-0">
                  <Globe size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs mb-1">Global Thinking</h4>
                  <p className="text-sm text-white/50">Bridging African potential with global standards.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center shrink-0">
                  <Zap size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs mb-1">Innovation First</h4>
                  <p className="text-sm text-white/50">Leveraging AI and tech to leapfrog traditional barriers.</p>
                </div>
              </div>
            </div>
            <Link to="/story" className="text-white font-bold uppercase tracking-[0.2em] text-xs flex items-center gap-3 hover:gap-5 transition-all">
              Read the Founder's Story <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const Home = () => {
  return (
    <main>
      <Hero />
      
      {/* Credibility / Stats */}
      <section className="py-20 border-y border-brand-slate bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
            {[
              { label: 'Industries', value: '10+' },
              { label: 'Vision Horizon', value: '100 Yrs' },
              { label: 'Core Mission', value: 'Impact' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-serif font-bold text-brand-navy mb-2">{stat.value}</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conglomerate Showcase */}
      <section className="py-32 bg-brand-slate">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-brand-gold font-bold tracking-[0.4em] uppercase text-xs mb-6 block">
                My Ecosystem
              </span>
              <h2 className="text-5xl font-serif font-bold text-brand-navy">
                A Diversified Portfolio for a Resilient Future.
              </h2>
            </div>
            <Link to="/holdings" className="text-brand-navy font-bold uppercase tracking-widest text-xs border-b-2 border-brand-gold pb-2 hover:text-brand-gold transition-colors">
              View All Sectors
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-slate border border-brand-slate overflow-hidden">
            {INDUSTRIES.map((industry, index) => (
              <IndustryCard key={industry.id} industry={industry} index={index} />
            ))}
          </div>
        </div>
      </section>

      <FounderSection />

      {/* CTA Section */}
      <section className="py-32 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-serif font-bold text-black mb-8">
            Partner with the Vision.
          </h2>
          <p className="text-xl text-black/60 mb-12">
            I am looking for global partners, visionary investors, and elite talent to join me in 
            building the next great global conglomerate.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/contact" className="bg-black text-white px-12 py-5 text-sm uppercase tracking-widest font-bold hover:bg-white hover:text-black border border-black transition-all">
              Institutional Inquiries
            </Link>
            <Link to="/contact" className="border border-black text-black px-12 py-5 text-sm uppercase tracking-widest font-bold hover:bg-black hover:text-white transition-all">
              Join the Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};
