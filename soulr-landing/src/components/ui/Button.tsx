import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

export function Button({ children, className = "", onClick, type = "button", disabled = false }: ButtonProps) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={disabled ? {} : { scale: 1.05 }}
      whileTap={disabled ? {} : { scale: 0.95 }}
      className={`
        relative px-8 py-4 text-lg font-semibold text-black 
        bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 
        rounded-full transition-all duration-200 
        shadow-[0_0_20px_rgba(250,204,21,0.5)]
        hover:shadow-[0_0_30px_rgba(250,204,21,0.8)]
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
    >
      {children}
    </motion.button>
  );
}