import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ShieldCheck, Tag, RefreshCw, Store, Users } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: "Original & Sealed Products",
    description: "Every device comes with official warranty and authentic accessories",
    gradient: "from-green-500/20 to-emerald-500/20",
    iconColor: "text-green-500",
  },
  {
    icon: Tag,
    title: "Best Deals on iPhone & Android",
    description: "Competitive prices on latest iPhones, Samsung, OnePlus & more",
    gradient: "from-primary/20 to-accent/20",
    iconColor: "text-primary",
  },
  {
    icon: RefreshCw,
    title: "Easy EMI & Exchange",
    description: "Flexible payment options and best value for your old phone",
    gradient: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-500",
  },
  {
    icon: Store,
    title: "Local Store – Real Support",
    description: "Walk into our Jaipur store for hands-on experience & instant support",
    gradient: "from-orange-500/20 to-amber-500/20",
    iconColor: "text-orange-500",
  },
  {
    icon: Users,
    title: "Trusted by 4000+ Customers",
    description: "Join our growing family of satisfied customers across Jaipur",
    gradient: "from-accent/20 to-primary/20",
    iconColor: "text-accent",
  },
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Why Choose <span className="gradient-text">Globalworld Mobile?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experience the difference of shopping at Jaipur's premium mobile destination
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ 
                opacity: 0, 
                x: index % 2 === 0 ? -50 : 50,
                y: 30 
              }}
              animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                ease: "easeOut"
              }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass-card p-8 group cursor-pointer"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-7 h-7 ${feature.iconColor}`} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
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
