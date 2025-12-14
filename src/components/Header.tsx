import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X, MapPin, Phone } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-background/70 backdrop-blur-2xl border-b border-border/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-champagne flex items-center justify-center shadow-lg">
              <span className="text-primary-foreground font-bold text-xl">G</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-semibold text-foreground tracking-tight">Globalworld</h1>
              <p className="text-xs text-muted-foreground -mt-0.5">Mobile</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {[
              { id: 'phones', label: 'Collection' },
              { id: 'location', label: 'Visit Store' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium text-sm tracking-wide"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+919784112218"
              className="flex items-center gap-2 px-4 py-2.5 glass-button text-foreground rounded-xl font-medium text-sm"
            >
              <Phone className="w-4 h-4 text-primary" />
              <span className="hidden lg:inline">Call Now</span>
            </a>
            <a
              href="https://maps.app.goo.gl/eaQvoiwxwaMFHbgS7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 premium-button text-sm"
            >
              <MapPin className="w-4 h-4" />
              <span className="hidden lg:inline">Get Directions</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ 
          height: isMobileMenuOpen ? 'auto' : 0, 
          opacity: isMobileMenuOpen ? 1 : 0 
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-background/95 backdrop-blur-2xl border-b border-border"
      >
        <div className="container mx-auto px-4 py-6 space-y-4">
          <button
            onClick={() => scrollToSection('phones')}
            className="block w-full text-left py-3 text-foreground font-medium"
          >
            Collection
          </button>
          <button
            onClick={() => scrollToSection('location')}
            className="block w-full text-left py-3 text-foreground font-medium"
          >
            Visit Store
          </button>
          <div className="flex gap-3 pt-4">
            <a
              href="tel:+919784112218"
              className="flex-1 flex items-center justify-center gap-2 py-3.5 glass-button text-foreground rounded-xl font-medium"
            >
              <Phone className="w-4 h-4" />
              Call
            </a>
            <a
              href="https://maps.app.goo.gl/eaQvoiwxwaMFHbgS7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3.5 premium-button"
            >
              <MapPin className="w-4 h-4" />
              Directions
            </a>
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;
