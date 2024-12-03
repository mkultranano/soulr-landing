import { motion } from 'framer-motion';
import { Heading, Text } from './Typography';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({ title, subtitle, className = "" }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`text-center max-w-3xl mx-auto ${className}`}
    >
      <Heading className="mb-4">{title}</Heading>
      {subtitle && (
        <Text className="text-xl">{subtitle}</Text>
      )}
    </motion.div>
  );
}