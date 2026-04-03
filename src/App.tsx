import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Holdings } from './pages/Holdings';
import { Contact } from './pages/Contact';
import { Insights } from './pages/Insights';
import { Story } from './pages/Story';
import { motion, AnimatePresence } from 'framer-motion';

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

const Footer = () => (
  <footer className="bg-black text-white py-20 border-t border-white/10">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-2">
          <Link to="/" className="flex items-center gap-2 mb-8 group">
            <div className="w-10 h-10 bg-white flex items-center justify-center rounded-sm group-hover:bg-black group-hover:border group-hover:border-white transition-all duration-300">
              <span className="text-black group-hover:text-white font-display font-extrabold text-xl">J</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold tracking-widest text-sm uppercase">John Michael Bassey</span>
              <span className="text-[10px] tracking-[0.3em] uppercase text-white/60 font-bold">Founder & Industrialist</span>
            </div>
          </Link>
          <p className="text-white/40 max-w-sm leading-relaxed font-medium">
            Architecting the future of African infrastructure and global innovation 
            through a multi-industry conglomerate built for a 100-year legacy.
          </p>
        </div>
        <div>
          <h4 className="font-bold uppercase tracking-widest text-xs mb-6 text-white">Ecosystem</h4>
          <ul className="space-y-4 text-sm text-white/40">
            <li><a href="/holdings#agriculture" className="hover:text-white transition-colors">Agriculture</a></li>
            <li><a href="/holdings#energy" className="hover:text-white transition-colors">Energy</a></li>
            <li><a href="/holdings#manufacturing" className="hover:text-white transition-colors">Manufacturing</a></li>
            <li><a href="/holdings#logistics" className="hover:text-white transition-colors">Logistics</a></li>
            <li><a href="/holdings#real-estate" className="hover:text-white transition-colors">Real Estate</a></li>
            <li><a href="/holdings#hospitality" className="hover:text-white transition-colors">Hospitality</a></li>
            <li><a href="/holdings#finance" className="hover:text-white transition-colors">Finance</a></li>
            <li><a href="/holdings#health" className="hover:text-white transition-colors">Health</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold uppercase tracking-widest text-xs mb-6 text-white">Perspectives</h4>
          <ul className="space-y-4 text-sm text-white/40">
            <li><Link to="/insights?category=Strategy" className="hover:text-white transition-colors">Strategy</Link></li>
            <li><Link to="/insights?category=Economy" className="hover:text-white transition-colors">Economy</Link></li>
            <li><Link to="/insights?category=Leadership" className="hover:text-white transition-colors">Leadership</Link></li>
            <li><Link to="/insights?category=Industrialism" className="hover:text-white transition-colors">Industrialism</Link></li>
            <li><Link to="/insights?category=Innovation" className="hover:text-white transition-colors">Innovation</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold uppercase tracking-widest text-xs mb-6 text-white">Connect</h4>
          <ul className="space-y-4 text-sm text-white/40">
            <li><a href="mailto:johnmichaelbassey@gmail.com" className="hover:text-white transition-colors">johnmichaelbassey@gmail.com</a></li>
            <li><a href="https://www.linkedin.com/in/michael-bassey-john-382447400?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a></li>
            <li><a href="https://x.com/jmbassey_1" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">X (Twitter)</a></li>
            <li><a href="https://www.instagram.com/jmb_gram?igsh=MXhnMDc1bXZmOXd3eA==" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold text-center md:text-left">
          © 2026 John Michael Bassey. All Rights Reserved.
        </p>
        <div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4 text-[10px] uppercase tracking-widest text-white/30 font-bold">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <PageWrapper>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/holdings" element={<Holdings />} />
              <Route path="/story" element={<Story />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/contact" element={<Contact />} />
              {/* Fallback to Home for demo purposes */}
              <Route path="*" element={<Home />} />
            </Routes>
          </PageWrapper>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
