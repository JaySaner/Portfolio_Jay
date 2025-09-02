import { ExternalLink, Github, Calendar, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const PortfolioSection = () => {
  // Placeholder projects for future development
  const upcomingProjects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with modern UI and secure payment integration.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      status: 'Planning',
      estimatedDate: 'Q2 2024'
    },
    {
      title: 'AI Chatbot Assistant',
      description: 'Intelligent chatbot for customer support with natural language processing.',
      tags: ['Python', 'TensorFlow', 'Flask', 'NLP'],
      status: 'In Development',
      estimatedDate: 'Q1 2024'
    },
    {
      title: 'Portfolio Analytics Dashboard',
      description: 'Real-time analytics dashboard for tracking website performance and user engagement.',
      tags: ['React', 'D3.js', 'Express', 'PostgreSQL'],
      status: 'Planning',
      estimatedDate: 'Q3 2024'
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-secondary/10 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Exciting projects are coming soon! Here's what I'm currently working on and planning to build.
          </p>
        </div>

        {/* Coming Soon Banner */}
        <div className="text-center mb-12">
          <div className="glass-card p-8 max-w-2xl mx-auto animate-fade-in-up">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-gradient-primary rounded-full animate-glow-pulse">
                <Calendar size={24} className="text-primary-foreground" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4">Portfolio Under Development</h3>
            <p className="text-muted-foreground mb-6">
              I'm currently working on exciting projects that will showcase my skills and passion for development. 
              Stay tuned for updates!
            </p>
            <Button 
              onClick={scrollToContact}
              variant="outline"
              className="border-primary/50 text-primary hover:bg-primary/10 hover:border-primary"
            >
              Discuss Your Project
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        </div>

        {/* Upcoming Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingProjects.map((project, index) => (
            <Card 
              key={project.title} 
              className="glass-card hover-glow group animate-fade-in-up relative overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Status indicator */}
              <div className="absolute top-4 right-4 z-10">
                <Badge 
                  variant="secondary" 
                  className={`text-xs ${
                    project.status === 'In Development' 
                      ? 'bg-accent/20 text-accent border-accent/30' 
                      : 'bg-primary/20 text-primary border-primary/30'
                  }`}
                >
                  {project.status}
                </Badge>
              </div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/5 opacity-0 group-hover:opacity-100 animate-smooth" />
              
              <CardHeader className="relative z-10">
                <CardTitle className="text-xl mb-2 group-hover:text-primary animate-smooth">
                  {project.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Expected: {project.estimatedDate}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-4 relative z-10">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="outline" 
                      className="text-xs border-card-border/50 hover:border-primary/50 animate-smooth"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Placeholder buttons */}
                <div className="flex gap-2 pt-4">
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    className="flex-1 text-muted-foreground cursor-not-allowed opacity-50"
                    disabled
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    className="flex-1 text-muted-foreground cursor-not-allowed opacity-50"
                    disabled
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Have a Project in Mind?</h3>
            <p className="text-muted-foreground mb-6">
              I'm always interested in working on new and exciting projects. 
              Let's collaborate and build something amazing together!
            </p>
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-gradient-primary hover:shadow-glow animate-smooth font-semibold px-8 py-3"
            >
              Start a Project
              <ArrowRight size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;