import { motion } from 'framer-motion';
import { Orbit } from 'lucide-react';

export function AppIcon() {
  return (
    <motion.div 
      className="relative w-20 h-20 mx-auto"
      whileHover={{ scale: 1.05 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-purple-600 rounded-2xl blur-sm opacity-50" />
      <div className="relative h-full w-full bg-black rounded-2xl flex items-center justify-center border border-yellow-400/30">
        <Orbit className="w-12 h-12 text-yellow-400" />
      </div>
    </motion.div>
  );
}