import { GraduationCap, Target, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Passionate about technology and continuous learning, I'm on a journey to become a skilled software developer.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="space-y-6 animate-slide-in-left">
            <Card className="glass-card hover-glow">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <GraduationCap className="text-primary mr-3" size={28} />
                  <h3 className="text-xl font-semibold">Educational Background</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Currently pursuing <strong className="text-foreground">B.E. in Electronics & Telecommunication</strong> at 
                  AISSMS College of Engineering with a <strong className="text-primary">9+ CGPA</strong>. 
                  My academic excellence reflects my dedication to learning and problem-solving.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card hover-glow">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <BookOpen className="text-accent mr-3" size={28} />
                  <h3 className="text-xl font-semibold">Technical Expertise</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Skilled in <strong className="text-foreground">C, C++, Python, HTML, CSS, JavaScript, SQL, and WordPress</strong>. 
                  Strong foundation in programming fundamentals with hands-on experience in web development technologies.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Vision & Mission */}
          <div className="space-y-6 animate-fade-in-up">
            <Card className="glass-card hover-glow">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Target className="text-primary mr-3" size={28} />
                  <h3 className="text-xl font-semibold">Vision Statement</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  "To grow as a skilled software & web developer, contribute to impactful projects, 
                  and continuously innovate in the tech space."
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-sm">Bridge engineering with real-world applications</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    <span className="text-sm">Continuous learning and adaptation</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-sm">Building scalable and innovative solutions</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Personal Traits */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-6 text-center hover-glow">
                <div className="text-2xl font-bold text-primary mb-2">9+</div>
                <div className="text-sm text-muted-foreground">CGPA</div>
              </div>
              <div className="glass-card p-6 text-center hover-glow">
                <div className="text-2xl font-bold text-accent mb-2">7+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;