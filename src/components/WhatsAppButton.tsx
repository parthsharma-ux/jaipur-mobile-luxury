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
      transition={{ delay: 1.5, duration: 0.6, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center group"
      style={{
        background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
        boxShadow: '0 8px 32px rgba(37, 211, 102, 0.35)',
      }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
      
      {/* Pulse rings */}
      <span className="absolute w-full h-full rounded-full bg-green-500/40 animate-ping" style={{ animationDuration: '2s' }} />
      <span className="absolute w-full h-full rounded-full border-2 border-green-400/30 animate-pulse" />
      
      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, x: 20, scale: 0.9 }}
        whileHover={{ opacity: 1, x: 0, scale: 1 }}
        className="absolute right-20 glass-card px-4 py-2.5 whitespace-nowrap pointer-events-none"
      >
        <span className="text-sm font-medium text-foreground">Chat with us</span>
      </motion.div>
    </motion.button>
  );
};

export default WhatsAppButton;
