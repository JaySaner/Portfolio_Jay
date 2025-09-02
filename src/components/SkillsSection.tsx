import { useState, useEffect } from 'react';
import { Code, Database, Globe, Wrench } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Skill {
  name: string;
  level: number;
  category: string;
}

const SkillsSection = () => {
  const [inView, setInView] = useState(false);

  const skills: Skill[] = [
    { name: 'C Programming', level: 85, category: 'Programming' },
    { name: 'C++', level: 80, category: 'Programming' },
    { name: 'Python', level: 75, category: 'Programming' },
    { name: 'SQL', level: 70, category: 'Database' },
    { name: 'HTML', level: 90, category: 'Web' },
    { name: 'CSS', level: 85, category: 'Web' },
    { name: 'JavaScript', level: 75, category: 'Web' },
    { name: 'WordPress', level: 80, category: 'CMS' },
  ];

  const categories = [
    { name: 'Programming Languages', icon: Code, skills: skills.filter(s => s.category === 'Programming') },
    { name: 'Web Development', icon: Globe, skills: skills.filter(s => s.category === 'Web') },
    { name: 'Database & CMS', icon: Database, skills: skills.filter(s => s.category === 'Database' || s.category === 'CMS') },
  ];

  const strengths = [
    { name: 'Problem Solving', icon: Wrench, description: 'Analytical thinking and systematic approach to challenges' },
    { name: 'Continuous Learning', icon: Code, description: 'Always exploring new technologies and methodologies' },
    { name: 'Web Development', icon: Globe, description: 'Creating responsive and user-friendly web applications' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-secondary/10 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and core competencies.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => (
            <Card key={category.name} className="glass-card hover-glow animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-primary rounded-lg">
                    <category.icon size={24} className="text-primary-foreground" />
                  </div>
                </div>
                <CardTitle className="text-lg">{category.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="skill-progress">
                      <div 
                        className="skill-fill"
                        style={{ 
                          width: inView ? `${skill.level}%` : '0%',
                          transitionDelay: `${categories.findIndex(c => c === category) * 0.2 + category.skills.findIndex(s => s === skill) * 0.1}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Core Strengths */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-3 text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Core Strengths</h3>
            <p className="text-muted-foreground">Key attributes that define my approach to development</p>
          </div>
          
          {strengths.map((strength, index) => (
            <Card key={strength.name} className="glass-card hover-glow text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-accent/20 rounded-full">
                    <strength.icon size={32} className="text-accent" />
                  </div>
                </div>
                <h4 className="text-xl font-semibold mb-3">{strength.name}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{strength.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;