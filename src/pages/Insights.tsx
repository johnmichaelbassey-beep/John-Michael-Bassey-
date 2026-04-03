import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, TrendingUp, Users, Lightbulb } from 'lucide-react';
import { cn } from '@/src/lib/utils';

import { useLocation, useNavigate } from 'react-router-dom';

export const Insights = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get category from query param or default to 'All Insights'
  const queryParams = new URLSearchParams(location.search);
  const initialCategory = queryParams.get('category') || 'All Insights';
  
  const [activeCategory, setActiveCategory] = React.useState(initialCategory);

  // Update URL when category changes
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    if (category === 'All Insights') {
      navigate('/insights', { replace: true });
    } else {
      navigate(`/insights?category=${category}`, { replace: true });
    }
  };

  React.useEffect(() => {
    const cat = queryParams.get('category');
    if (cat) {
      setActiveCategory(cat);
    } else {
      setActiveCategory('All Insights');
    }
  }, [location.search]);

  const articles = [
    {
      title: "The Future of African Industrialization: A 100-Year Vision",
      category: "Strategy",
      date: "March 24, 2026",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "How AI is Revolutionizing Precision Agriculture in the Sahel",
      category: "Innovation",
      date: "March 18, 2026",
      image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Building the Digital Backbone: Finance and the Next Billion",
      category: "Economy",
      date: "March 10, 2026",
      image: "https://images.unsplash.com/photo-1611974717484-38818203adad?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Sustainable Energy: Powering the African Manufacturing Renaissance",
      category: "Industrialism",
      date: "March 05, 2026",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "The Servant Leader: Reimagining Governance in the 21st Century",
      category: "Leadership",
      date: "February 28, 2026",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Strategic Partnerships: Navigating the Global Trade Landscape",
      category: "Strategy",
      date: "February 20, 2026",
      image: "https://images.unsplash.com/photo-1521791136364-798a7bc0d262?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Blockchain for Supply Chain: Transparency in African Logistics",
      category: "Innovation",
      date: "February 15, 2026",
      image: "https://images.unsplash.com/photo-1561414927-6d86591d0c4f?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Macroeconomic Resilience: Lessons from Emerging Markets",
      category: "Economy",
      date: "February 10, 2026",
      image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Industrial Clusters: The Engine of Regional Growth",
      category: "Industrialism",
      date: "February 05, 2026",
      image: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "The Psychology of Risk: Decision Making in High-Stakes Ventures",
      category: "Leadership",
      date: "January 30, 2026",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Venture Capital in Africa: Beyond the Hype",
      category: "Economy",
      date: "January 22, 2026",
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Smart Cities: Urban Planning for a Digital Generation",
      category: "Innovation",
      date: "January 15, 2026",
      image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "The Ethics of Automation: Balancing Progress and Employment",
      category: "Industrialism",
      date: "January 08, 2026",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Geopolitical Shifts: Africa's Role in the New World Order",
      category: "Strategy",
      date: "January 02, 2026",
      image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const filteredArticles = activeCategory === 'All Insights' 
    ? articles 
    : articles.filter(article => article.category === activeCategory);

  const categories = ['All Insights', 'Strategy', 'Innovation', 'Economy', 'Industrialism', 'Leadership'];

  return (
    <main className="pt-32 pb-20 bg-brand-slate min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-20 text-center max-w-3xl mx-auto">
          <span className="text-black font-bold tracking-[0.4em] uppercase text-xs mb-6 block">
            Personal Perspectives
          </span>
          <h1 className="text-6xl font-serif font-extrabold text-black mb-8 tracking-tight">
            My Journal & <br /> Strategic Insights.
          </h1>
          <p className="text-xl text-black/60 leading-relaxed mb-12 font-medium">
            I explore the intersection of technology, infrastructure, and the global economy 
            through the lens of African excellence and long-term industrialism.
          </p>

          {/* Responsive Category Tabs */}
          <div className="flex gap-4 border-b border-black/5 mb-12 overflow-x-auto no-scrollbar scroll-smooth -mx-6 px-6">
            {categories.map((category) => (
              <button 
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={cn(
                  "text-[10px] uppercase tracking-[0.2em] font-bold px-4 py-4 whitespace-nowrap transition-all relative",
                  activeCategory === category ? "text-black" : "text-black/40 hover:text-black"
                )}
              >
                {category}
                {activeCategory === category && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-black"
                  />
                )}
              </button>
            ))}
          </div>
        </header>

        <div className="grid md:grid-cols-3 gap-12">
          <AnimatePresence mode="popLayout">
            {filteredArticles.map((article, index) => (
              <motion.article
                key={article.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="bg-white group cursor-pointer border border-black/5 hover:border-black transition-all"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-black">{article.category}</span>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-black/30">{article.date}</span>
                  </div>
                  <h3 className="text-2xl font-serif font-extrabold text-black mb-6 group-hover:opacity-60 transition-opacity tracking-tight">
                    {article.title}
                  </h3>
                  <button className="text-[10px] uppercase tracking-[0.2em] font-bold text-black border-b border-black pb-1">
                    Read Article
                  </button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Newsletter / Lead Magnet */}
        <section className="mt-32 bg-black p-16 text-center text-white">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-serif font-bold mb-6">The Conglomerate Brief</h2>
            <p className="text-white/40 mb-10">
              Join 50,000+ global leaders receiving my weekly insights on infrastructure, 
              innovation, and the future of the global economy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow bg-white/10 border border-white/20 p-4 text-sm outline-none focus:border-white transition-colors"
              />
              <button className="bg-white text-black px-10 py-4 text-xs uppercase tracking-widest font-bold hover:bg-black hover:text-white border border-white transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
