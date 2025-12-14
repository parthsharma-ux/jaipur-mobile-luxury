import { motion } from 'framer-motion';
import { Instagram, Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-glow opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
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
                transition={{ duration: 0.6 }}
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center"
              >
                <span className="text-primary-foreground font-bold text-xl">G</span>
              </motion.div>
              <div>
                <h3 className="font-bold text-xl text-foreground">Globalworld Mobile</h3>
                <p className="text-sm text-muted-foreground">Jaipur's Premium Store</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Your trusted destination for genuine iPhones and Android smartphones in Jaipur. 
              Best prices, easy EMI, and real support.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-semibold text-lg text-foreground mb-6">Store Info</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>Kalwar Road, Jaipur, Rajasthan</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Clock className="w-5 h-5 text-accent shrink-0" />
                <span>10:00 AM – 8:30 PM (All Days)</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-green-500 shrink-0" />
                <a href="tel:+919784112218" className="hover:text-foreground transition-colors">
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
            <p className="text-muted-foreground mb-6">
              Stay updated with latest offers and new arrivals on Instagram
            </p>
            <motion.a
              href="https://instagram.com/globalworldmobile"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-6 py-3 glass-card hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300"
            >
              <Instagram className="w-5 h-5 text-pink-500" />
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
          className="pt-8 border-t border-border text-center"
        >
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Globalworld Mobile. All rights reserved.
          </p>
          <motion.p 
            className="text-muted-foreground/50 text-xs mt-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Designed for Growth ✨
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
