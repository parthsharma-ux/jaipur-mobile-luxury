import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Star, Quote } from 'lucide-react';

const stats = [
  { label: "Happy Customers", value: 4000, suffix: "+" },
  { label: "Years Experience", value: 5, suffix: "+" },
  { label: "Brands Available", value: 15, suffix: "+" },
  { label: "5-Star Reviews", value: 500, suffix: "+" },
];

const testimonials = [
  {
    name: "Rajesh Kumar",
    rating: 5,
    text: "Best place to buy iPhone in Jaipur! Got my iPhone 15 Pro at amazing price with genuine warranty. Highly recommended!",
    avatar: "RK",
  },
  {
    name: "Priya Sharma",
    rating: 5,
    text: "Excellent service and great EMI options. The staff is very helpful and knowledgeable about all the latest phones.",
    avatar: "PS",
  },
  {
    name: "Amit Jain",
    rating: 5,
    text: "Trusted store with original products. Got best exchange value for my old phone. Will definitely visit again!",
    avatar: "AJ",
  },
];

const Counter = ({ value, suffix, isInView }: { value: number; suffix: string; isInView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span className="tabular-nums">{count.toLocaleString()}{suffix}</span>
  );
};

const TrustSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-glow opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 text-center"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                <Counter value={stat.value} suffix={stat.suffix} isInView={isInView} />
              </div>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Customer <span className="gradient-text">Love</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            See what our customers say about us
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.15 }}
              whileHover={{ y: -5 }}
              className="glass-card p-8 relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <div className="flex gap-0.5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: 0.8 + i * 0.1 }}
                      >
                        <Star className="w-4 h-4 fill-luxury-gold text-luxury-gold" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                "{testimonial.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
