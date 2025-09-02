import { Globe, Bot, Code, Smartphone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Designing and developing modern, responsive websites using the latest technologies and best practices.',
      features: [
        'Responsive Design',
        'Modern UI/UX',
        'Fast Performance',
        'SEO Optimized'
      ],
      color: 'primary'
    },
    {
      icon: Bot,
      title: 'Chatbot Development',
      description: 'Creating AI-powered chatbots for businesses to enhance customer engagement and automate support.',
      features: [
        'AI Integration',
        'Natural Language Processing',
        'Custom Workflows',
        'Multi-platform Support'
      ],
      color: 'accent'
    },
    {
      icon: Code,
      title: 'Custom Solutions',
      description: 'Building tailored software solutions to meet specific business requirements and challenges.',
      features: [
        'Problem Analysis',
        'Scalable Architecture',
        'Clean Code',
        'Documentation'
      ],
      color: 'primary'
    },
    {
      icon: Smartphone,
      title: 'Responsive Development',
      description: 'Ensuring your web applications work seamlessly across all devices and screen sizes.',
      features: [
        'Mobile-First Approach',
        'Cross-Browser Testing',
        'Touch Optimization',
        'Progressive Enhancement'
      ],
      color: 'accent'
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive web development and technical solutions tailored to your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="glass-card hover-glow group animate-fade-in-up relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/5 opacity-0 group-hover:opacity-100 animate-smooth" />
              
              <CardHeader className="text-center pb-4 relative z-10">
                <div className="flex justify-center mb-4">
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${
                    service.color === 'primary' 
                      ? 'from-primary/20 to-primary/10' 
                      : 'from-accent/20 to-accent/10'
                  } group-hover:scale-110 animate-smooth`}>
                    <service.icon 
                      size={32} 
                      className={service.color === 'primary' ? 'text-primary' : 'text-accent'} 
                    />
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary animate-smooth">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="text-center space-y-4 relative z-10">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center justify-center text-xs">
                      <div className={`w-1.5 h-1.5 rounded-full mr-2 ${
                        service.color === 'primary' ? 'bg-primary' : 'bg-accent'
                      }`} />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="glass-card p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss your project and bring your ideas to life with modern web technologies.
            </p>
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-gradient-primary hover:shadow-glow animate-smooth font-semibold px-8 py-3"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;