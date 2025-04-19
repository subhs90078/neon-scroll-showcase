
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FileText, Code, Award } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-background/90 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-neonBlue">Ekizr</div>
          <div className="flex gap-8">
            <button onClick={() => scrollToSection('home')} className="hover:text-neonBlue transition-colors">Home</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-neonBlue transition-colors">About</button>
            <button onClick={() => scrollToSection('portfolio')} className="hover:text-neonBlue transition-colors">Portfolio</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-neonBlue transition-colors">Contact</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-6" data-aos="fade-up">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 animate-glow">Frontend Developer</h1>
            <p className="text-xl mb-8">Tech Enthusiast</p>
            <p className="mb-8">Creating innovative, functional, and user-friendly websites for digital solutions.</p>
            <div className="flex gap-4 justify-center">
              <button className="bg-neonBlue px-6 py-2 rounded-lg hover:bg-lightBlue transition-colors">
                Projects
              </button>
              <button className="border border-neonBlue px-6 py-2 rounded-lg hover:bg-neonBlue/20 transition-colors">
                Contact
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <div className="container mx-auto px-6" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-center mb-12 animate-glow">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Hello, I'm<br/>Eki Zulfar Rachman</h3>
              <p className="mb-6">A Computer Network and Telecommunications Engineering student passionate about Front-End development. I focus on creating engaging digital experiences and always strive to provide the best solutions in every project.</p>
              <div className="flex gap-4">
                <button className="flex items-center gap-2 bg-neonBlue px-6 py-2 rounded-lg hover:bg-lightBlue transition-colors">
                  <FileText size={20} />
                  Download CV
                </button>
                <button onClick={() => scrollToSection('portfolio')} className="flex items-center gap-2 border border-neonBlue px-6 py-2 rounded-lg hover:bg-neonBlue/20 transition-colors">
                  <Code size={20} />
                  View Projects
                </button>
              </div>
            </div>
            <div className="relative" data-aos="fade-left">
              <div className="w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-neonBlue">
                <img src="/lovable-uploads/4530cc6d-3c81-4666-8d12-8a7939198fca.png" alt="Profile" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="min-h-screen py-20">
        <div className="container mx-auto px-6" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-center mb-12 animate-glow">Portfolio Showcase</h2>
          <p className="text-center mb-12 max-w-2xl mx-auto">
            Explore my journey through projects, certifications, and technical expertise. Each section represents a milestone in my continuous learning path.
          </p>
          
          <div className="flex justify-center gap-6 mb-12">
            <button 
              onClick={() => scrollToSection('projects')}
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-neonBlue hover:bg-lightBlue transition-colors"
            >
              <Code size={20} />
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('certificates')}
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-neonBlue hover:bg-lightBlue transition-colors"
            >
              <Award size={20} />
              Certificates
            </button>
            <button 
              onClick={() => scrollToSection('tech-stack')}
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-neonBlue hover:bg-lightBlue transition-colors"
            >
              <FileText size={20} />
              Tech Stack
            </button>
          </div>

          <div id="projects" className="space-y-12">
            {/* Project cards can be added here */}
            <div className="grid md:grid-cols-2 gap-6" data-aos="fade-up">
              <div className="bg-deepBlue p-6 rounded-lg">
                <img src="/lovable-uploads/b23e55b2-d1ac-41d5-815f-c06d0a162b82.png" alt="Project 1" className="w-full rounded-lg mb-4" />
                <h3 className="text-xl font-bold mb-2">Aritmatika Solver</h3>
                <p>A powerful calculator application with advanced mathematical capabilities.</p>
              </div>
              <div className="bg-deepBlue p-6 rounded-lg">
                <img src="/lovable-uploads/57b62b18-60cc-4441-8b4f-ee77b65ea9f3.png" alt="Project 2" className="w-full rounded-lg mb-4" />
                <h3 className="text-xl font-bold mb-2">AutoChat-Discord</h3>
                <p>Automated Discord messaging system with advanced features.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
