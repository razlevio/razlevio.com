'use client';

import { cn } from '@/lib/utils';

export function Heading({ 
  children, 
  level = 1,
  className = "",
}: { 
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}) {
  const Component = `h${level}` as keyof JSX.IntrinsicElements;
  
  const styles = {
    1: 'text-4xl mb-4',
    2: 'text-xl mb-4',
    3: 'text-lg mb-2',
    4: 'text-base mb-2',
    5: 'text-sm mb-2',
    6: 'text-xs mb-2',
  }[level];

  return (
    <Component className={cn(styles, 'tracking-tight', className)}>
      {children}
    </Component>
  );
}

export function Text({ 
  children,
  className = "",
}: { 
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={cn('leading-relaxed text-muted-foreground', className)}>
      {children}
    </p>
  );
}