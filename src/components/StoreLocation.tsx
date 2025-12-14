import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Navigation, Clock, Phone } from 'lucide-react';

const StoreLocation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const openMaps = () => {
    window.open('https://maps.app.goo.gl/eaQvoiwxwaMFHbgS7', '_blank');
  };

  return (
    <section ref={ref} className="py-24 relative overflow-hidden" id="location">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Visit Our <span className="gradient-text">Store</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experience our premium collection in person at Kalwar Road, Jaipur
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card p-2 h-[400px] relative overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.7073891372676!2d75.82641!3d26.9424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db35a5f5f5f5f%3A0x5f5f5f5f5f5f5f5f!2sKalwar%20Road%2C%20Jaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '0.75rem' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Globalworld Mobile Location"
            />
            
            {/* Animated pin overlay */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="relative">
                <MapPin className="w-10 h-10 text-primary drop-shadow-lg" fill="currentColor" />
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-2 bg-primary/30 rounded-full blur-sm" />
              </div>
            </motion.div>
          </motion.div>

          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Address Card */}
            <div className="glass-card p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Store Address</h3>
                  <p className="text-muted-foreground">
                    Kalwar Road, Near Jaipur Hospital<br />
                    Jaipur, Rajasthan 302012
                  </p>
                </div>
              </div>
            </div>

            {/* Timings Card */}
            <div className="glass-card p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Store Timings</h3>
                  <motion.p 
                    className="text-muted-foreground"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <span className="text-green-500 font-medium">Open Now</span> • 10:00 AM – 8:30 PM
                  </motion.p>
                  <p className="text-muted-foreground text-sm mt-1">Monday to Sunday</p>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="glass-card p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Call Us</h3>
                  <a 
                    href="tel:+919784112218"
                    className="text-primary hover:text-accent transition-colors text-lg font-medium"
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
              className="w-full flex items-center justify-center gap-3 py-4 bg-primary text-primary-foreground rounded-2xl font-semibold text-lg glow-effect"
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
