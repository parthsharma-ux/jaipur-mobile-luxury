import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/919784112218?text=Hi! I visited your website and I\'m interested in buying a mobile phone.', '_blank');
  };

  return (
    <motion.button
      onClick={openWhatsApp}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 text-white rounded-full shadow-lg flex items-center justify-center group"
      style={{
        boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
      }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      
      {/* Pulse effect */}
      <span className="absolute w-full h-full rounded-full bg-green-500 animate-ping opacity-30" />
      
      {/* Tooltip */}
      <motion.span
        initial={{ opacity: 0, x: 20 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="absolute right-20 bg-card text-foreground px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap shadow-lg border border-border"
      >
        Chat with us!
      </motion.span>
    </motion.button>
  );
};

export default WhatsAppButton;
