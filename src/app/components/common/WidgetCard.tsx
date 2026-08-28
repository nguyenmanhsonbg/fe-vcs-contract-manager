import React from "react";

interface WidgetCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

/**
 * Reusable WidgetCard component
 * Standardized container with soft shadow (shade) and no borders.
 */
export function WidgetCard({ children, className = "", ...props }: WidgetCardProps) {
  return (
    <div
      className={`rounded-[6px] bg-white p-6 shadow-[0_2px_8px_rgba(47,43,61,0.08)] ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
