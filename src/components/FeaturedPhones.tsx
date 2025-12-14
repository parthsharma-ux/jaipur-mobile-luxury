import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { MessageCircle, Smartphone } from 'lucide-react';

const phoneCategories = [
  { id: 'iphone', name: 'iPhone', icon: '🍎' },
  { id: 'samsung', name: 'Samsung', icon: '📱' },
  { id: 'oneplus', name: 'OnePlus', icon: '🚀' },
  { id: 'vivo', name: 'Vivo/Oppo', icon: '✨' },
];

const phones = {
  iphone: [
    { name: 'iPhone 15 Pro Max', price: '₹1,59,900', image: 'linear-gradient(135deg, #1a1a1a 0%, #333 100%)' },
    { name: 'iPhone 15 Pro', price: '₹1,34,900', image: 'linear-gradient(135deg, #2a2a3e 0%, #1a1a2e 100%)' },
    { name: 'iPhone 15', price: '₹79,900', image: 'linear-gradient(135deg, #1e3a5f 0%, #0d1b2a 100%)' },
    { name: 'iPhone 14', price: '₹69,900', image: 'linear-gradient(135deg, #2d1f3d 0%, #1a1a2e 100%)' },
  ],
  samsung: [
    { name: 'Galaxy S24 Ultra', price: '₹1,29,999', image: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)' },
    { name: 'Galaxy S24+', price: '₹99,999', image: 'linear-gradient(135deg, #1e2a3a 0%, #0f1a2a 100%)' },
    { name: 'Galaxy Z Fold 5', price: '₹1,54,999', image: 'linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%)' },
    { name: 'Galaxy A55', price: '₹39,999', image: 'linear-gradient(135deg, #1a2a3a 0%, #0a1a2a 100%)' },
  ],
  oneplus: [
    { name: 'OnePlus 12', price: '₹64,999', image: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)' },
    { name: 'OnePlus 12R', price: '₹42,999', image: 'linear-gradient(135deg, #1a2a1a 0%, #0a1a0a 100%)' },
    { name: 'OnePlus Nord 4', price: '₹29,999', image: 'linear-gradient(135deg, #2a2a3a 0%, #1a1a2a 100%)' },
    { name: 'OnePlus Open', price: '₹1,39,999', image: 'linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%)' },
  ],
  vivo: [
    { name: 'Vivo X100 Pro', price: '₹89,999', image: 'linear-gradient(135deg, #1a2a3a 0%, #0a1a2a 100%)' },
    { name: 'Vivo V30 Pro', price: '₹46,999', image: 'linear-gradient(135deg, #2a1a2a 0%, #1a0a1a 100%)' },
    { name: 'Oppo Find X7', price: '₹79,999', image: 'linear-gradient(135deg, #1a1a2a 0%, #0a0a1a 100%)' },
    { name: 'Oppo Reno 11', price: '₹37,999', image: 'linear-gradient(135deg, #2a2a1a 0%, #1a1a0a 100%)' },
  ],
};

const FeaturedPhones = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState('iphone');

  const openWhatsApp = (phoneName: string) => {
    window.open(`https://wa.me/919784112218?text=Hi! I'm interested in ${phoneName}. Is it available?`, '_blank');
  };

  return (
    <section ref={ref} className="py-24 relative overflow-hidden" id="phones">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Mobiles</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our premium collection of latest smartphones
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {phoneCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                activeCategory === category.id
                  ? 'bg-primary text-primary-foreground glow-effect'
                  : 'glass-button text-foreground hover:text-primary'
              }`}
            >
              <span>{category.icon}</span>
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Phone Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {phones[activeCategory as keyof typeof phones].map((phone, index) => (
            <motion.div
              key={phone.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-card p-6 group cursor-pointer"
            >
              {/* Phone visual */}
              <div 
                className="w-full h-48 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden"
                style={{ background: phone.image }}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0.8 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="w-20 h-40 bg-gradient-to-b from-muted/30 to-muted/10 rounded-2xl border border-glass-border backdrop-blur-sm flex items-center justify-center"
                >
                  <Smartphone className="w-10 h-10 text-foreground/50" />
                </motion.div>
                
                {/* Price reveal overlay */}
                <div className="absolute inset-0 bg-primary/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
                  <div className="text-center">
                    <p className="text-primary-foreground font-bold text-2xl">{phone.price}</p>
                    <p className="text-primary-foreground/80 text-sm">Check Availability</p>
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2">{phone.name}</h3>
              <p className="text-muted-foreground text-sm mb-4">Starting from {phone.price}</p>

              <button
                onClick={() => openWhatsApp(phone.name)}
                className="w-full flex items-center justify-center gap-2 py-3 glass-button text-foreground rounded-xl font-medium group-hover:bg-green-500/20 group-hover:border-green-500/50 transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4 text-green-500" />
                Check Availability
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedPhones;
