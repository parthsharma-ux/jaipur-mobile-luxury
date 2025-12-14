import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';

const phoneCategories = [
  { id: 'iphone', name: 'iPhone', icon: '🍎' },
  { id: 'samsung', name: 'Samsung', icon: '📱' },
  { id: 'oneplus', name: 'OnePlus', icon: '⚡' },
  { id: 'vivo', name: 'Vivo/Oppo', icon: '✨' },
];

const phones = {
  iphone: [
    { name: 'iPhone 15 Pro Max', price: '₹1,59,900', tag: 'Titanium' },
    { name: 'iPhone 15 Pro', price: '₹1,34,900', tag: 'New' },
    { name: 'iPhone 15', price: '₹79,900', tag: 'Popular' },
    { name: 'iPhone 14', price: '₹69,900', tag: 'Best Value' },
  ],
  samsung: [
    { name: 'Galaxy S24 Ultra', price: '₹1,29,999', tag: 'Flagship' },
    { name: 'Galaxy S24+', price: '₹99,999', tag: 'New' },
    { name: 'Galaxy Z Fold 5', price: '₹1,54,999', tag: 'Premium' },
    { name: 'Galaxy A55', price: '₹39,999', tag: 'Best Seller' },
  ],
  oneplus: [
    { name: 'OnePlus 12', price: '₹64,999', tag: 'Flagship' },
    { name: 'OnePlus 12R', price: '₹42,999', tag: 'Popular' },
    { name: 'OnePlus Nord 4', price: '₹29,999', tag: 'Value' },
    { name: 'OnePlus Open', price: '₹1,39,999', tag: 'Foldable' },
  ],
  vivo: [
    { name: 'Vivo X100 Pro', price: '₹89,999', tag: 'Camera Pro' },
    { name: 'Vivo V30 Pro', price: '₹46,999', tag: 'Popular' },
    { name: 'Oppo Find X7', price: '₹79,999', tag: 'Flagship' },
    { name: 'Oppo Reno 11', price: '₹37,999', tag: 'Best Seller' },
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
    <section ref={ref} className="py-28 relative overflow-hidden" id="phones">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-champagne/3 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase">
            Our Collection
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            <span className="gradient-text-silver">Featured</span>{' '}
            <span className="gradient-text">Smartphones</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our curated selection of premium devices
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-14"
        >
          {phoneCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3.5 rounded-xl font-medium transition-all duration-400 flex items-center gap-2.5 ${
                activeCategory === category.id
                  ? 'premium-button'
                  : 'glass-button text-foreground'
              }`}
            >
              <span className="text-lg">{category.icon}</span>
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
              whileHover={{ y: -12, transition: { duration: 0.3 } }}
              className="glass-card p-6 group cursor-pointer relative overflow-hidden"
            >
              {/* Tag */}
              <div className="absolute top-4 right-4">
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                  {phone.tag}
                </span>
              </div>

              {/* Phone visual */}
              <div className="w-full h-56 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-secondary to-background">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="w-24 h-48 bg-gradient-to-b from-muted/40 to-muted/20 rounded-3xl border border-white/10 flex items-center justify-center shadow-2xl"
                >
                  <div className="w-20 h-40 rounded-2xl bg-gradient-to-br from-primary/10 to-champagne/10 border border-white/5" />
                </motion.div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end justify-center pb-6">
                  <span className="text-2xl font-bold text-foreground">{phone.price}</span>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2 tracking-tight">{phone.name}</h3>
              <p className="text-muted-foreground text-sm mb-5">Starting from <span className="text-foreground font-medium">{phone.price}</span></p>

              <button
                onClick={() => openWhatsApp(phone.name)}
                className="w-full flex items-center justify-center gap-2 py-3.5 glass-button text-foreground rounded-xl font-medium group-hover:bg-green-500/10 group-hover:border-green-500/30 transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4 text-green-400" />
                <span>Check Availability</span>
                <ArrowRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedPhones;
