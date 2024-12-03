interface HeadingProps {
  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4';
}

export function Heading({ children, className = "", as = 'h2' }: HeadingProps) {
  const Component = as;
  const baseStyles = "font-bold text-white";
  const styles = {
    h1: "text-6xl md:text-7xl",
    h2: "text-4xl",
    h3: "text-2xl",
    h4: "text-xl"
  };

  return (
    <Component className={`${baseStyles} ${styles[as]} ${className}`}>
      {children}
    </Component>
  );
}

interface TextProps {
  children: React.ReactNode;
  className?: string;
}

export function Text({ children, className = "" }: TextProps) {
  return (
    <p className={`text-gray-400 ${className}`}>
      {children}
    </p>
  );
}