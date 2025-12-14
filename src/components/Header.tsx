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
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-xl border-b border-border' : ''
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">G</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-foreground">Globalworld</h1>
              <p className="text-xs text-muted-foreground -mt-1">Mobile</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {['phones', 'location'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-muted-foreground hover:text-foreground transition-colors capitalize font-medium"
              >
                {item === 'phones' ? 'Phones' : 'Visit Store'}
              </button>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+919784112218"
              className="flex items-center gap-2 px-4 py-2 glass-button text-foreground rounded-xl font-medium"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden lg:inline">Call Now</span>
            </a>
            <a
              href="https://maps.app.goo.gl/eaQvoiwxwaMFHbgS7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-xl font-medium"
            >
              <MapPin className="w-4 h-4" />
              <span className="hidden lg:inline">Directions</span>
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
        animate={{ height: isMobileMenuOpen ? 'auto' : 0, opacity: isMobileMenuOpen ? 1 : 0 }}
        className="md:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-b border-border"
      >
        <div className="container mx-auto px-4 py-6 space-y-4">
          <button
            onClick={() => scrollToSection('phones')}
            className="block w-full text-left py-3 text-foreground font-medium"
          >
            Featured Phones
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
              className="flex-1 flex items-center justify-center gap-2 py-3 glass-button text-foreground rounded-xl font-medium"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <a
              href="https://maps.app.goo.gl/eaQvoiwxwaMFHbgS7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 bg-primary text-primary-foreground rounded-xl font-medium"
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
