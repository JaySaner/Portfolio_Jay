import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/20 border-t border-card-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center space-y-6">
          {/* Logo */}
          <div className="font-bold text-2xl bg-gradient-primary bg-clip-text text-transparent">
            Jay Saner
          </div>

          {/* Tagline */}
          <p className="text-muted-foreground max-w-md mx-auto">
            Aspiring Engineer | Web Developer & Coding Enthusiast
          </p>

          {/* Copyright */}
          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
            <span>© {currentYear} Jay Saner. Made with</span>
            <Heart size={16} className="text-red-500 animate-pulse" />
            <span>and lots of coffee.</span>
          </div>

          {/* Back to Top Button */}
          <Button
            onClick={scrollToTop}
            variant="outline"
            size="sm"
            className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary animate-smooth"
          >
            <ArrowUp size={16} className="mr-2" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;