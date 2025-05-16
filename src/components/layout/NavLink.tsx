"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import type { UrlObject } from 'url';

type NavLinkProps = {
  href: string | UrlObject;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
  exact?: boolean;
  onClick?: () => void; 
};

export default function NavLink({ 
  href, 
  children, 
  className, 
  activeClassName = 'text-primary font-semibold bg-primary/10', 
  exact = false,
  onClick 
}: NavLinkProps) {
  const pathname = usePathname();
  const hrefStr = typeof href === 'string' ? href : href.pathname || '';
  const isActive = exact ? pathname === hrefStr : pathname.startsWith(hrefStr);

  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent/50 hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
        isActive ? activeClassName : 'text-muted-foreground hover:text-foreground',
        className
      )}
      onClick={onClick}
      aria-current={isActive ? 'page' : undefined}
    >
      {children}
    </Link>
  );
}
