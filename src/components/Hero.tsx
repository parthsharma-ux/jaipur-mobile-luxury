import { motion } from 'framer-motion';
import { MapPin, MessageCircle, Shield, CreditCard, Award, Sparkles } from 'lucide-react';

const Hero = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/919784112218?text=Hi! I visited your website and I\'m interested in buying a mobile phone.', '_blank');
  };

  const openMaps = () => {
    window.open('https://maps.app.goo.gl/eaQvoiwxwaMFHbgS7', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Premium background effects */}
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-champagne/3 rounded-full blur-[100px]" />
      
      {/* Floating phones - Left */}
      <motion.div 
        className="absolute left-[8%] top-[25%] hidden xl:block"
        animate={{ y: [0, -25, 0], rotate: [-8, -5, -8] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="relative">
          <div className="w-52 h-[420px] bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] rounded-[3.5rem] border border-white/10 shadow-2xl flex items-center justify-center p-3">
            <div className="w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-champagne/10 rounded-[3rem] border border-white/5" />
          </div>
          <div className="absolute -inset-4 bg-gradient-radial from-primary/10 to-transparent blur-2xl -z-10" />
        </div>
      </motion.div>

      {/* Floating phones - Right */}
      <motion.div 
        className="absolute right-[8%] top-[30%] hidden xl:block"
        animate={{ y: [0, -20, 0], rotate: [8, 5, 8] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      >
        <div className="relative">
          <div className="w-48 h-[400px] bg-gradient-to-b from-[#2a2a2a] to-[#111] rounded-[3.5rem] border border-white/10 shadow-2xl flex items-center justify-center p-3">
            <div className="w-full h-full bg-gradient-to-br from-champagne/10 via-transparent to-primary/10 rounded-[3rem] border border-white/5" />
          </div>
          <div className="absolute -inset-4 bg-gradient-radial from-champagne/10 to-transparent blur-2xl -z-10" />
        </div>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Premium badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full glass-card mb-10"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground/80">Premium Mobile Destination</span>
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-muted-foreground">Kalwar Road, Jaipur</span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold mb-8 leading-[1.1] tracking-tight"
          >
            <span className="gradient-text">Jaipur's Most Trusted</span>
            <br />
            <span className="gradient-text-silver">Mobile Store</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Experience premium iPhones & Android flagships with unmatched prices, 
            flexible EMI options, and 100% genuine products.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <button
              onClick={openMaps}
              className="group flex items-center justify-center gap-3 px-8 py-4 premium-button text-lg"
            >
              <MapPin className="w-5 h-5" />
              Visit Store
            </button>
            <button
              onClick={openWhatsApp}
              className="group flex items-center justify-center gap-3 px-8 py-4 glass-button text-foreground rounded-xl font-semibold text-lg"
            >
              <MessageCircle className="w-5 h-5 text-green-400" />
              WhatsApp Now
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
              { icon: Shield, text: "100% Original", color: "text-green-400" },
              { icon: CreditCard, text: "Easy EMI", color: "text-primary" },
              { icon: Award, text: "Best Price Guarantee", color: "text-champagne" },
            ].map((badge, index) => (
              <motion.div
                key={badge.text}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="flex items-center gap-2.5 px-5 py-3 glass-card"
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
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border border-muted-foreground/20 flex justify-center pt-2">
          <motion.div 
            className="w-1 h-2 bg-primary/60 rounded-full"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
