import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FileText, Code, Award } from 'lucide-react';
import TypingAnimation from '../components/TypingAnimation';

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

  const techStack = [
    { name: 'HTML', icon: '/path-to-html-icon.svg' },
    { name: 'CSS', icon: '/path-to-css-icon.svg' },
    { name: 'JavaScript', icon: '/path-to-js-icon.svg' },
    { name: 'Tailwind CSS', icon: '/path-to-tailwind-icon.svg' },
    { name: 'ReactJS', icon: '/path-to-react-icon.svg' },
    { name: 'Vite', icon: '/path-to-vite-icon.svg' },
    { name: 'Node.js', icon: '/path-to-node-icon.svg' },
    { name: 'Bootstrap', icon: '/path-to-bootstrap-icon.svg' },
    { name: 'Firebase', icon: '/path-to-firebase-icon.svg' },
    { name: 'Material UI', icon: '/path-to-mui-icon.svg' },
    { name: 'Vercel', icon: '/path-to-vercel-icon.svg' },
    { name: 'SweetAlert2', icon: '/path-to-sweetalert-icon.svg' },
  ];

  return (
    <div className="min-h-screen bg-deepBlue bg-opacity-95 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-background/90 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-neonBlue">Subhs</div>
          <div className="flex gap-8">
            {['Home', 'About', 'Portfolio', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="relative bg-blue-gradient bg-clip-text text-transparent hover:after:w-full after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-neonBlue after:transition-all after:duration-300"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-6" data-aos="fade-up">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-neonBlue mb-8 inline-block px-6 py-2 rounded-full border border-neonBlue">
              Ready to Innovate
            </div>
            <h1 className="text-6xl font-bold mb-6 text-neonBlue">Frontend<br/>Developer</h1>
            <TypingAnimation />
            <p className="text-lg mb-8 text-gray-300">
              Creating innovative, functional, and user-friendly websites for digital solutions.
            </p>
            <div className="flex gap-4 flex-wrap mb-8">
              {['React', 'Javascript', 'Node.js', 'Tailwind'].map((tech) => (
                <span key={tech} className="px-4 py-2 rounded-full bg-deepBlue border border-neonBlue text-neonBlue">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <button onClick={() => scrollToSection('portfolio')} className="flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-gradient hover:opacity-90 transition-all">
                <Code size={20} />
                Projects
              </button>
              <button onClick={() => scrollToSection('contact')} className="flex items-center gap-2 px-6 py-3 rounded-lg border border-neonBlue hover:bg-neonBlue/20 transition-all">
                <FileText size={20} />
                Contact
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <div className="container mx-auto px-6" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-center mb-12 text-neonBlue">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4 text-neonBlue">Hello, I'm<br/>Subham Kumar Shee</h3>
              <p className="mb-6 text-gray-300">A Computer Network and Telecommunications Engineering student passionate about Front-End development. I focus on creating engaging digital experiences and always strive to provide the best solutions in every project.</p>
              <div className="flex flex-col gap-4">
                <button className="flex items-center gap-2 bg-blue-gradient px-6 py-3 rounded-lg hover:opacity-90 transition-all">
                  <FileText size={20} />
                  Download CV
                </button>
                <button onClick={() => scrollToSection('portfolio')} className="flex items-center gap-2 bg-blue-gradient px-6 py-3 rounded-lg hover:opacity-90 transition-all">
                  <Code size={20} />
                  View Projects
                </button>
                <button onClick={() => scrollToSection('certificates')} className="flex items-center gap-2 bg-blue-gradient px-6 py-3 rounded-lg hover:opacity-90 transition-all">
                  <Award size={20} />
                  View Certificates
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
          <h2 className="text-4xl font-bold text-center mb-12 text-neonBlue">Portfolio Showcase</h2>
          <p className="text-center mb-12 max-w-2xl mx-auto text-gray-300">
            Explore my journey through projects, certifications, and technical expertise. Each section represents a milestone in my continuous learning path.
          </p>
          
          <div className="flex justify-center gap-6 mb-12">
            {[
              { title: 'Projects', icon: <Code size={20} />, id: 'projects' },
              { title: 'Certificates', icon: <Award size={20} />, id: 'certificates' },
              { title: 'Tech Stack', icon: <FileText size={20} />, id: 'tech-stack' }
            ].map((item) => (
              <button 
                key={item.title}
                onClick={() => scrollToSection(item.id)}
                className="flex items-center gap-2 px-8 py-4 rounded-lg bg-blue-gradient hover:opacity-90 transition-all text-white hover:-translate-y-1 duration-300"
              >
                {item.icon}
                {item.title}
              </button>
            ))}
          </div>

          <div id="tech-stack" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {techStack.map((tech) => (
              <div 
                key={tech.name} 
                className="p-6 rounded-lg bg-deepBlue border border-neonBlue/20 hover:border-neonBlue transition-all transform hover:-translate-y-2 duration-300"
              >
                <img src={tech.icon} alt={tech.name} className="w-16 h-16 mx-auto mb-4" />
                <p className="text-center text-neonBlue">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
