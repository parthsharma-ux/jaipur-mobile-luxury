import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ShieldCheck, Tag, RefreshCw, Store, Users, CheckCircle2 } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: "Original & Sealed",
    description: "Every device comes with official manufacturer warranty and authentic accessories",
    highlight: "100% Genuine",
  },
  {
    icon: Tag,
    title: "Best Market Prices",
    description: "Competitive pricing on all iPhones, Samsung Galaxy, OnePlus & flagship devices",
    highlight: "Price Match",
  },
  {
    icon: RefreshCw,
    title: "EMI & Exchange",
    description: "Flexible payment plans and premium value for your existing smartphone",
    highlight: "0% EMI Available",
  },
  {
    icon: Store,
    title: "Premium Experience",
    description: "Visit our store for hands-on experience and expert consultation",
    highlight: "Walk-in Welcome",
  },
  {
    icon: Users,
    title: "4000+ Happy Customers",
    description: "Join Jaipur's growing community of satisfied smartphone buyers",
    highlight: "5-Star Rated",
  },
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-28 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase"
          >
            Why Choose Us
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            <span className="gradient-text-silver">The Globalworld</span>
            <br />
            <span className="gradient-text">Advantage</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experience the difference at Jaipur's most trusted mobile destination
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ 
                opacity: 0, 
                y: 40 
              }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.12,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="glass-card p-8 group cursor-pointer relative overflow-hidden"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Icon */}
              <div className="relative mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
              </div>

              {/* Highlight badge */}
              <div className="flex items-center gap-1.5 mb-4">
                <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
                <span className="text-xs font-medium text-green-400 tracking-wide">{feature.highlight}</span>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-foreground tracking-tight">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-[15px]">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
