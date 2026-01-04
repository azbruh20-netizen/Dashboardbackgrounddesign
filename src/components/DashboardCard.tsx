import { ReactNode } from 'react';

interface DashboardCardProps {
  children: ReactNode;
  variant?: 'default' | 'gradient';
  className?: string;
}

export function DashboardCard({ children, variant = 'default', className = '' }: DashboardCardProps) {
  const baseClasses = "rounded-3xl backdrop-blur-md border border-white/10 shadow-2xl";
  
  const variantClasses = {
    default: "bg-[#1a2942]/40",
    gradient: "bg-gradient-to-br from-[#4a6fa5]/50 via-[#2d4563]/40 to-[#4a3557]/50"
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </div>
  );
}
