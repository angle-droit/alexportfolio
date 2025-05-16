
import { Button } from "@/components/ui/button";
import { ArrowDownToLine, Eye } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="py-12 md:py-20 lg:py-28 text-center">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 rounded-full overflow-hidden shadow-xl border-4 border-primary/50">
            <Image 
              src="https://i.imgur.com/udDPqBW.jpeg" 
              alt="Your Name" 
              data-ai-hint="professional portrait"
              width={200}
              height={200}
              className="object-cover w-full h-full"
              priority
            />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Hello, I&apos;m{' '}
            <span className="text-primary">Axel</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          Versatile autodidact, low-level explorer (Linux, ASM), creator of distributions and system tools, passionate about cybersecurity and systems-oriented development.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button asChild size="lg" className="shadow-lg hover:shadow-primary/50 transition-shadow">
              <Link href="/projects">
                <Eye className="mr-2 h-5 w-5" />
                View My Work
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
