import { motion } from 'framer-motion';
import { MapPin, MessageCircle, Shield, CreditCard, Award } from 'lucide-react';

const Hero = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/919784112218?text=Hi! I visited your website and I\'m interested in buying a mobile phone.', '_blank');
  };

  const openMaps = () => {
    window.open('https://maps.app.goo.gl/eaQvoiwxwaMFHbgS7', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background effects */}
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      
      {/* Floating phones */}
      <motion.div 
        className="absolute left-[5%] top-[20%] hidden lg:block"
        animate={{ y: [0, -20, 0], rotate: [-5, 0, -5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-48 h-96 bg-gradient-to-b from-secondary to-card rounded-[3rem] border border-glass-border shadow-2xl flex items-center justify-center">
          <div className="w-40 h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-[2.5rem]" />
        </div>
      </motion.div>

      <motion.div 
        className="absolute right-[5%] top-[25%] hidden lg:block"
        animate={{ y: [0, -25, 0], rotate: [5, 0, 5] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <div className="w-44 h-88 bg-gradient-to-b from-card to-secondary rounded-[3rem] border border-glass-border shadow-2xl flex items-center justify-center">
          <div className="w-36 h-72 bg-gradient-to-br from-accent/20 to-primary/20 rounded-[2.5rem]" />
        </div>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">Open Now • Kalwar Road, Jaipur</span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="gradient-text">Jaipur's Most Trusted</span>
            <br />
            <span className="text-foreground">Mobile Store</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
          >
            Premium iPhones & Android flagships with best prices, 
            easy EMI options, and genuine products — all under one roof.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <button
              onClick={openMaps}
              className="group flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 glow-effect"
            >
              <MapPin className="w-5 h-5" />
              Get Directions
              <span className="text-sm opacity-70">📍</span>
            </button>
            <button
              onClick={openWhatsApp}
              className="group flex items-center justify-center gap-3 px-8 py-4 glass-button text-foreground rounded-2xl font-semibold text-lg"
            >
              <MessageCircle className="w-5 h-5 text-green-500" />
              WhatsApp Now
              <span className="text-sm opacity-70">💬</span>
            </button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4 md:gap-6"
          >
            {[
              { icon: Shield, text: "100% Original", color: "text-green-500" },
              { icon: CreditCard, text: "EMI Available", color: "text-primary" },
              { icon: Award, text: "Best Price Guarantee", color: "text-luxury-gold" },
            ].map((badge, index) => (
              <motion.div
                key={badge.text}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="flex items-center gap-2 px-4 py-2 glass-card"
              >
                <badge.icon className={`w-5 h-5 ${badge.color}`} />
                <span className="text-sm font-medium text-foreground">{badge.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-muted-foreground/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
