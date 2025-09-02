import { ArrowDown, Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import jayProfile from '@/assets/jay-profile.jpg';

const HeroSection = () => {
  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in-up">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-primary rounded-full blur opacity-75 group-hover:opacity-100 animate-glow-pulse"></div>
          <img 
            src={jayProfile} 
            alt="Jay Saner - Professional Profile" 
            className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary/20 shadow-glow"
          />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-foreground">Jay</span>
            <span className="block bg-gradient-primary bg-clip-text text-transparent">Saner</span>
          </h1>

          {/* Title */}
          <h2 className="text-xl md:text-2xl lg:text-3xl text-accent font-semibold mb-4">
            Aspiring Engineer | Web Developer & Coding Enthusiast
          </h2>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            Passionate about building scalable web solutions & modern technologies.
            <br className="hidden md:block" />
            Transforming ideas into elegant digital experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              onClick={scrollToPortfolio}
              size="lg"
              className="bg-gradient-primary hover:shadow-glow animate-smooth font-semibold px-8 py-3 text-lg group"
            >
              View Portfolio
              <ArrowDown size={20} className="ml-2 group-hover:translate-y-1 animate-smooth" />
            </Button>
            
            <Button 
              onClick={scrollToContact}
              variant="outline"
              size="lg"
              className="border-primary/50 text-primary hover:bg-primary/10 hover:border-primary animate-smooth font-semibold px-8 py-3 text-lg group"
            >
              <Mail size={20} className="mr-2 group-hover:scale-110 animate-smooth" />
              Contact Me
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;