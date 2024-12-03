interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export function Input({ className = "", ...props }: InputProps) {
  return (
    <input
      {...props}
      className={`w-full px-6 py-3 rounded-full bg-purple-950 text-white border border-purple-800 focus:outline-none focus:border-yellow-400 transition-colors duration-200 ${className}`}
    />
  );
}