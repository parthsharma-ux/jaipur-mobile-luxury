import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Navigation, Clock, Phone, ExternalLink } from 'lucide-react';

const StoreLocation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const openMaps = () => {
    window.open('https://maps.app.goo.gl/eaQvoiwxwaMFHbgS7', '_blank');
  };

  return (
    <section ref={ref} className="py-28 relative overflow-hidden" id="location">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/3 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase">
            Location
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            <span className="gradient-text-silver">Visit Our</span>{' '}
            <span className="gradient-text">Premium Store</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experience our collection in person at Kalwar Road, Jaipur
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card p-2 h-[450px] relative overflow-hidden group"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.7073891372676!2d75.82641!3d26.9424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db35a5f5f5f5f%3A0x5f5f5f5f5f5f5f5f!2sKalwar%20Road%2C%20Jaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '0.75rem', filter: 'grayscale(0.3) contrast(1.1)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Globalworld Mobile Location"
            />
            
            {/* Animated pin overlay */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full pointer-events-none"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" fill="currentColor" />
                </div>
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-3 bg-primary/20 rounded-full blur-md" />
              </div>
            </motion.div>

            {/* CTA Overlay */}
            <button
              onClick={openMaps}
              className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2.5 premium-button text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              Open in Maps
              <ExternalLink className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col gap-5"
          >
            {/* Address Card */}
            <div className="glass-card p-7 flex-1">
              <div className="flex items-start gap-5">
                <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Store Address</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Kalwar Road, Near Jaipur Hospital<br />
                    Jaipur, Rajasthan 302012
                  </p>
                </div>
              </div>
            </div>

            {/* Timings Card */}
            <div className="glass-card p-7 flex-1">
              <div className="flex items-start gap-5">
                <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-champagne/15 to-champagne/5 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-champagne" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Store Hours</h3>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-green-400 font-medium text-sm">Currently Open</span>
                  </div>
                  <p className="text-muted-foreground">10:00 AM – 8:30 PM • Every Day</p>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="glass-card p-7 flex-1">
              <div className="flex items-start gap-5">
                <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-green-500/15 to-green-500/5 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Contact</h3>
                  <a 
                    href="tel:+919784112218"
                    className="text-xl font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    +91 97841 12218
                  </a>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <motion.button
              onClick={openMaps}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-3 py-5 premium-button text-lg"
            >
              <Navigation className="w-5 h-5" />
              Get Directions to Store
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StoreLocation;
