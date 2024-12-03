import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { Heading, Text } from './Typography';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="cosmic-border p-8 h-full">
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <Icon className="w-12 h-12 text-yellow-400 mb-6" />
        <Heading as="h3" className="mb-4">{title}</Heading>
        <Text>{description}</Text>
      </motion.div>
    </div>
  );
}