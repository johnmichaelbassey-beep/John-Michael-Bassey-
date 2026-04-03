import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Quote, Target, Award, Zap } from 'lucide-react';

export const Story = () => {
  return (
    <main className="pt-32 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <header className="mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-black font-bold tracking-[0.4em] uppercase text-xs mb-6 block"
          >
            The Founder's Journey
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-serif font-extrabold text-black mb-12 leading-tight tracking-tight"
          >
            Architecting a <br /> <span className="italic font-normal">100-Year</span> Legacy.
          </motion.h1>
        </header>

        {/* Narrative Grid */}
        <div className="grid lg:grid-cols-12 gap-20 items-start mb-32">
          <div className="lg:col-span-5">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="aspect-[3/4] bg-gray-100 overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 rounded-sm shadow-2xl"
            >
              <img 
                src="input_file_2.png" 
                alt="John Michael Bassey"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
          
          <div className="lg:col-span-7 space-y-12">
            <section>
              <h2 className="text-3xl font-serif font-bold mb-6">The Genesis</h2>
              <p className="text-xl text-black/70 leading-relaxed mb-6">
                My journey began with a single observation: the vast disparity between Africa's resource wealth and its industrial output. 
                I saw a continent that was exporting its future in raw form and importing its survival in finished form. 
                I decided that the narrative had to change.
              </p>
              <p className="text-lg text-black/60 leading-relaxed">
                Born with a vision to industrialize, I didn't just want to build businesses; I wanted to build systems. 
                Systems that are resilient, tech-enabled, and capable of outlasting their creator. 
                This was the birth of the Bassiob Bassiob Group.
              </p>
            </section>

            <section className="bg-brand-slate p-12 border-l-4 border-black">
              <Quote size={40} className="text-black/20 mb-6" />
              <p className="text-2xl font-serif italic text-black leading-relaxed">
                "Industrialization is not just about factories; it's about dignity. It's about a continent proving it can 
                not only participate in the global economy but lead it."
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-serif font-bold mb-6">The Philosophy</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-black">
                    <Target size={20} />
                    <h4 className="font-bold uppercase tracking-widest text-xs">Strategic Synergy</h4>
                  </div>
                  <p className="text-sm text-black/60 leading-relaxed">
                    I believe in the power of interconnected industries. Agriculture feeds manufacturing, 
                    manufacturing requires energy, and logistics moves the value. We build ecosystems, not silos.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-black">
                    <Zap size={20} />
                    <h4 className="font-bold uppercase tracking-widest text-xs">Technological Leapfrogging</h4>
                  </div>
                  <p className="text-sm text-black/60 leading-relaxed">
                    We don't follow the traditional industrial path. We leverage AI, blockchain, and 
                    renewable energy to skip decades of inefficient development.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Milestones / Values */}
        <section className="py-32 border-t border-black/10">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-serif font-bold mb-4">Core Pillars of My Leadership</h2>
            <p className="text-black/50">The non-negotiable principles that drive every venture.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Economic Sovereignty",
                desc: "Reducing dependence on imports by building robust local value chains that serve global markets."
              },
              {
                title: "Generational Thinking",
                desc: "Every decision is weighed against its impact 50 to 100 years from now. We build for the long horizon."
              },
              {
                title: "Radical Innovation",
                desc: "If a process is outdated, we dismantle it. We embrace the discomfort of constant evolution."
              }
            ].map((pillar, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-10 bg-brand-slate text-center"
              >
                <h3 className="text-xl font-serif font-bold mb-4">{pillar.title}</h3>
                <p className="text-sm text-black/60 leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 bg-black text-white text-center">
          <h2 className="text-5xl font-serif font-extrabold mb-8 tracking-tight">Join the Industrial Revolution.</h2>
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto font-medium">
            The future of Africa is being written today. I invite you to be part of the story.
          </p>
          <Link to="/contact" className="inline-block bg-white text-black px-12 py-5 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-black hover:text-white border border-white transition-all">
            Partner with Me
          </Link>
        </section>
      </div>
    </main>
  );
};
