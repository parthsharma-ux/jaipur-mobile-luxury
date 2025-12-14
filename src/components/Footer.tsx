import { motion } from 'framer-motion';
import { Instagram, Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-20 border-t border-border/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-glow opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-champagne flex items-center justify-center shadow-lg"
              >
                <span className="text-primary-foreground font-bold text-xl">G</span>
              </motion.div>
              <div>
                <h3 className="font-bold text-xl text-foreground tracking-tight">Globalworld Mobile</h3>
                <p className="text-sm text-muted-foreground">Premium Mobile Destination</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed text-[15px]">
              Jaipur's most trusted destination for genuine iPhones and Android smartphones. 
              Unmatched prices, flexible EMI, and authentic products guaranteed.
            </p>
          </motion.div>

          {/* Store Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-semibold text-lg text-foreground mb-6">Store Information</h4>
            <div className="space-y-5">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span className="text-[15px]">Kalwar Road, Jaipur, Rajasthan</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Clock className="w-5 h-5 text-champagne shrink-0" />
                <span className="text-[15px]">10:00 AM – 8:30 PM (All Days)</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-green-400 shrink-0" />
                <a href="tel:+919784112218" className="hover:text-foreground transition-colors text-[15px]">
                  +91 97841 12218
                </a>
              </div>
            </div>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-semibold text-lg text-foreground mb-6">Follow Us</h4>
            <p className="text-muted-foreground mb-6 text-[15px]">
              Stay updated with our latest offers and new arrivals on Instagram
            </p>
            <motion.a
              href="https://instagram.com/globalworldmobile"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-6 py-4 glass-card hover:border-pink-500/30 transition-all duration-300"
            >
              <Instagram className="w-5 h-5 text-pink-400" />
              <span className="font-medium text-foreground">@globalworldmobile</span>
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-10 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Globalworld Mobile. All rights reserved.
          </p>
          <motion.p 
            className="text-muted-foreground/60 text-sm flex items-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
            Crafted with precision
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
