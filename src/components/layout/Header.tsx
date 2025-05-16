"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Briefcase, Code2, FileText, Home, Mail, Menu, X, BrainCircuit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState } from 'react';
import NavLink from './NavLink';

const navItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/projects', label: 'Projects', icon: Code2 },
  { href: '/contact', label: 'Contact', icon: Mail },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-2xl font-bold text-primary hover:opacity-80 transition-opacity">
          Portfolio Axel
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href} exact={item.href === '/'}>
              <item.icon className="mr-2 h-4 w-4" />
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background p-6">
              <div className="flex flex-col space-y-4">
                <div className="flex justify-between items-center mb-4">
                   <Link href="/" className="text-xl font-bold text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                      PortfolioPro
                   </Link>
                   <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                      <X className="h-6 w-6" />
                      <span className="sr-only">Close menu</span>
                   </Button>
                </div>
                {navItems.map((item) => (
                  <NavLink 
                    key={item.href} 
                    href={item.href} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center py-2 text-lg"
                    exact={item.href === '/'}
                  >
                    <item.icon className="mr-3 h-5 w-5" />
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
