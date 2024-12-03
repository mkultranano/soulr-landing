import { motion } from 'framer-motion';
import { Apple, Smartphone } from 'lucide-react';

export function PlatformBadges() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
      <motion.a
        href="#"
        className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl transition-colors cosmic-border"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Apple className="w-8 h-8" />
        <div className="flex flex-col">
          <span className="text-xs">Download on the</span>
          <span className="text-lg font-semibold">App Store</span>
        </div>
      </motion.a>

      <motion.a
        href="#"
        className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl transition-colors cosmic-border"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Smartphone className="w-8 h-8" />
        <div className="flex flex-col">
          <span className="text-xs">Get it on</span>
          <span className="text-lg font-semibold">Google Play</span>
        </div>
      </motion.a>
    </div>
  );
}