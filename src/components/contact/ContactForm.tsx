"use client";

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { GlassCard, GlassCardContent, GlassCardHeader, GlassCardTitle, GlassCardDescription } from '@/components/ui/GlassCard';
import { Loader2, Send } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const FormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof FormSchema>;

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<ContactFormValues> = async (data) => {
    setIsLoading(true);
    // Simulate API call for form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Contact form submitted:", data);
    
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    form.reset();
    setIsLoading(false);
  };

  return (
    <GlassCard className="w-full max-w-xl mx-auto">
      <GlassCardHeader className="text-center">
        <GlassCardTitle className="text-3xl">Get In Touch</GlassCardTitle>
        <GlassCardDescription>
          Have a question or want to work together? Fill out the form below.
        </GlassCardDescription>
      </GlassCardHeader>
      <GlassCardContent>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <Label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</Label>
            <Input
              id="name"
              {...form.register("name")}
              placeholder="John Doe"
              className="bg-background/80 focus:bg-background"
              aria-invalid={form.formState.errors.name ? "true" : "false"}
            />
            {form.formState.errors.name && (
              <p className="text-sm text-destructive mt-1">{form.formState.errors.name.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</Label>
            <Input
              id="email"
              type="email"
              {...form.register("email")}
              placeholder="you@example.com"
              className="bg-background/80 focus:bg-background"
              aria-invalid={form.formState.errors.email ? "true" : "false"}
            />
            {form.formState.errors.email && (
              <p className="text-sm text-destructive mt-1">{form.formState.errors.email.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="message" className="block text-sm font-medium mb-1">Message</Label>
            <Textarea
              id="message"
              {...form.register("message")}
              placeholder="Your message here..."
              className="min-h-[120px] bg-background/80 focus:bg-background"
              aria-invalid={form.formState.errors.message ? "true" : "false"}
            />
            {form.formState.errors.message && (
              <p className="text-sm text-destructive mt-1">{form.formState.errors.message.message}</p>
            )}
          </div>

          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Send className="mr-2 h-4 w-4" />
            )}
            Send Message
          </Button>
        </form>
      </GlassCardContent>
    </GlassCard>
  );
}
