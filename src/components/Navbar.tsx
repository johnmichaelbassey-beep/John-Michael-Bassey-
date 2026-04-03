import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'My Story', href: '/story' },
    { label: 'The Ecosystem', href: '/holdings' },
    { label: 'Perspectives', href: '/insights' },
    { label: 'Connect', href: '/contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-500 px-6 py-4",
      scrolled ? "glass-nav py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-black flex items-center justify-center rounded-sm group-hover:bg-white group-hover:border group-hover:border-black transition-all duration-300">
            <span className="text-white group-hover:text-black font-display font-extrabold text-xl">J</span>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-extrabold tracking-widest text-sm uppercase">John Michael Bassey</span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-black font-bold">Founder & Industrialist</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={cn(
                "text-[10px] uppercase tracking-widest font-bold px-4 py-2 hover:bg-black/5 transition-all rounded-sm",
                location.pathname === item.href ? "text-black bg-black/5" : "text-black/60"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link to="/contact" className="ml-4">
            <button className="bg-black text-white px-6 py-2.5 text-[10px] uppercase tracking-widest font-bold hover:bg-white hover:text-black border border-black transition-all duration-300 rounded-sm">
              Inquiries
            </button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-black" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-b border-black/10 p-8 md:hidden flex flex-col gap-6 shadow-xl"
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className="text-sm uppercase tracking-widest font-bold text-black hover:opacity-50"
              >
                {item.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <button className="w-full bg-black text-white py-4 text-xs uppercase tracking-widest font-bold">
                Inquiries
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
