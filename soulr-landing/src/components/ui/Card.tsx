interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`bg-purple-950/30 rounded-xl p-6 cosmic-border ${className}`}>
      {children}
    </div>
  );
}