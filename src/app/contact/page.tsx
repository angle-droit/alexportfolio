import ContactForm from '@/components/contact/ContactForm';
import { Mail } from 'lucide-react';

export const metadata = {
  title: 'Contact | PortfolioPro',
  description: 'Get in touch with me. I am open to new opportunities and collaborations.',
};

export default function ContactPage() {
  return (
    <div className="py-8 md:py-12">
      <header className="text-center mb-12 md:mb-16">
        <Mail className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Contact <span className="text-primary">Me</span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          I&apos;m always excited to discuss new projects, creative ideas, or opportunities to be part of your vision.
        </p>
      </header>
      <ContactForm />
    </div>
  );
}
