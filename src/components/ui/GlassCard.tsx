"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { 
  Card as ShadcnCard, 
  CardHeader as ShadcnCardHeader, 
  CardFooter as ShadcnCardFooter, 
  CardTitle as ShadcnCardTitle, 
  CardDescription as ShadcnCardDescription, 
  CardContent as ShadcnCardContent 
} from "@/components/ui/card"; // Import shadcn/ui Card components

// Define props by extending React.HTMLAttributes<HTMLDivElement>
// This makes them compatible with the underlying div element of ShadcnCard
type CardProps = React.HTMLAttributes<HTMLDivElement>;
type CardHeaderProps = React.HTMLAttributes<HTMLDivElement>;
type CardFooterProps = React.HTMLAttributes<HTMLDivElement>;
type CardTitleProps = React.HTMLAttributes<HTMLHeadingElement>; // CardTitle is h3 by default
type CardDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>; // CardDescription is p
type CardContentProps = React.HTMLAttributes<HTMLDivElement>;


const GlassCard = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, ...props }, ref) => (
    <ShadcnCard
      ref={ref}
      className={cn(
        "glass-card rounded-xl", // Use the utility class from globals.css
        className
      )}
      {...props}
    >
      {children}
    </ShadcnCard>
  )
);
GlassCard.displayName = "GlassCard";

const GlassCardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, ...props }, ref) => (
    <ShadcnCardHeader ref={ref} className={cn("p-6", className)} {...props} />
  )
);
GlassCardHeader.displayName = "GlassCardHeader";

const GlassCardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, ...props }, ref) => (
    <ShadcnCardTitle ref={ref} className={cn("text-2xl font-semibold leading-none tracking-tight", className)} {...props} />
  )
);
GlassCardTitle.displayName = "GlassCardTitle";

const GlassCardDescription = React.forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className, ...props }, ref) => (
    <ShadcnCardDescription ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
  )
);
GlassCardDescription.displayName = "GlassCardDescription";

const GlassCardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, ...props }, ref) => (
    <ShadcnCardContent ref={ref} className={cn("p-6 pt-0", className)} {...props} />
  )
);
GlassCardContent.displayName = "GlassCardContent";

const GlassCardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, ...props }, ref) => (
    <ShadcnCardFooter ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
  )
);
GlassCardFooter.displayName = "GlassCardFooter";


export { 
  GlassCard, 
  GlassCardHeader, 
  GlassCardFooter, 
  GlassCardTitle, 
  GlassCardDescription, 
  GlassCardContent 
};
