import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FileText, Code, Award, ExternalLink } from 'lucide-react';
import TypingAnimation from '../components/TypingAnimation';
import TechStack from '../components/TechStack';
import { Card, CardContent } from "@/components/ui/card";
import SocialLinks from '../components/SocialLinks';
import { useQuery } from '@tanstack/react-query';

const Index = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const [activeSection, setActiveSection] = useState('projects');

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

  const projects = [
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio website built with React and Tailwind CSS',
      image: '/lovable-uploads/4530cc6d-3c81-4666-8d12-8a7939198fca.png',
      tags: ['React', 'Tailwind CSS', 'Vite'],
      link: '#'
    },
    {
      title: 'E-commerce Platform',
      description: 'Full-featured online store with product management and checkout',
      image: '/lovable-uploads/57b62b18-60cc-4441-8b4f-ee77b65ea9f3.png',
      tags: ['React', 'Node.js', 'MongoDB'],
      link: '#'
    },
    {
      title: 'Task Manager App',
      description: 'Productivity tool for organizing and tracking daily tasks',
      image: '/lovable-uploads/b23e55b2-d1ac-41d5-815f-c06d0a162b82.png',
      tags: ['JavaScript', 'Firebase', 'Bootstrap'],
      link: '#'
    }
  ];

  const certificates = [
    {
      title: 'Web Development Certification',
      issuer: 'Coursera',
      date: 'March 2023',
      image: '/lovable-uploads/57b62b18-60cc-4441-8b4f-ee77b65ea9f3.png',
      link: '#'
    },
    {
      title: 'React JS Advanced',
      issuer: 'Udemy',
      date: 'January 2023',
      image: '/lovable-uploads/b23e55b2-d1ac-41d5-815f-c06d0a162b82.png',
      link: '#'
    },
    {
      title: 'Full-Stack Development',
      issuer: 'freeCodeCamp',
      date: 'December 2022',
      image: '/lovable-uploads/4530cc6d-3c81-4666-8d12-8a7939198fca.png',
      link: '#'
    }
  ];

  const { data: projectCount = 3 } = useQuery({
    queryKey: ['projectCount'],
    queryFn: () => Promise.resolve(3)
  });

  const { data: certificateCount = 3 } = useQuery({
    queryKey: ['certificateCount'],
    queryFn: () => Promise.resolve(3)
  });

  const { data: techStackCount = 12 } = useQuery({
    queryKey: ['techStackCount'],
    queryFn: () => Promise.resolve(12)
  });

  return (
    <div className="min-h-screen bg-deepBlue text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-background/90 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-neonBlue">Subhs</div>
          <div className="flex gap-8">
            {['Home', 'About', 'Portfolio', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="nav-link"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-20">
        <div className="container mx-auto px-6" data-aos="fade-up">
          <div className="max-w-4xl text-right">
            <div className="text-neonBlue mb-8 inline-block px-6 py-2 rounded-full border border-neonBlue">
              Ready to Innovate
            </div>
            <h1 className="text-6xl font-bold mb-6 text-neonBlue">Frontend<br/>Developer</h1>
            <TypingAnimation />
            <p className="text-lg mb-8 text-gray-300 mt-6">
              Creating innovative, functional, and user-friendly websites for digital solutions.
            </p>
            <div className="flex gap-4 flex-wrap justify-end mb-8">
              {['React', 'Javascript', 'Node.js', 'Tailwind'].map((tech) => (
                <span key={tech} className="px-4 py-2 rounded-full bg-deepBlue border border-neonBlue text-neonBlue">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4 justify-end">
              <button onClick={() => scrollToSection('portfolio')} className="flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-gradient hover:opacity-90 transition-all">
                <Code size={20} />
                Projects
              </button>
              <button onClick={() => scrollToSection('contact')} className="flex items-center gap-2 px-6 py-3 rounded-lg border border-neonBlue hover:bg-neonBlue/20 transition-all">
                <FileText size={20} />
                Contact
              </button>
            </div>
            <SocialLinks />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <div className="container mx-auto px-6" data-aos="fade-up">
          <h2 className="section-title">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4 text-neonBlue">Hello, I'm<br/>Subham Kumar Shee</h3>
              <p className="mb-6 text-gray-300">A Computer Network and Telecommunications Engineering student passionate about Front-End development. I focus on creating engaging digital experiences and always strive to provide the best solutions in every project.</p>
              <div className="flex flex-col gap-4">
                <button className="flex items-center gap-2 bg-blue-gradient px-6 py-3 rounded-lg hover:opacity-90 transition-all">
                  <FileText size={20} />
                  Download CV
                </button>
              </div>
            </div>
            <div className="relative" data-aos="fade-left">
              <div className="w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-neonBlue group hover:scale-105 transition-transform duration-300">
                <img 
                  src="/lovable-uploads/4530cc6d-3c81-4666-8d12-8a7939198fca.png" 
                  alt="Profile" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-10 space-x-4">
            <button onClick={() => scrollToSection('portfolio')} className="flex items-center gap-2 px-6 py-3 rounded-lg bg-deepBlue border border-neonBlue hover:bg-neonBlue/20 transition-all">
              <Code size={20} />
              Projects ({projectCount})
            </button>
            <button onClick={() => scrollToSection('certificates')} className="flex items-center gap-2 px-6 py-3 rounded-lg bg-deepBlue border border-neonBlue hover:bg-neonBlue/20 transition-all">
              <Award size={20} />
              Certificates ({certificateCount})
            </button>
            <button onClick={() => scrollToSection('tech-stack')} className="flex items-center gap-2 px-6 py-3 rounded-lg bg-deepBlue border border-neonBlue hover:bg-neonBlue/20 transition-all">
              <FileText size={20} />
              Tech Stack ({techStackCount})
            </button>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="min-h-screen py-20">
        <div className="container mx-auto px-6" data-aos="fade-up">
          <h2 className="section-title">Portfolio Showcase</h2>
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
                onClick={() => {
                  setActiveSection(item.id);
                  scrollToSection(`${item.id}-section`);
                }}
                className={`flex items-center gap-2 px-8 py-4 rounded-lg hover:-translate-y-1 duration-300 ${
                  activeSection === item.id 
                    ? 'bg-purple-gradient text-white' 
                    : 'bg-deepBlue border border-neonBlue text-white'
                }`}
              >
                {item.icon}
                {item.title}
              </button>
            ))}
          </div>

          {/* Projects Section */}
          <div 
            id="projects-section" 
            className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 ${activeSection === 'projects' ? 'block' : 'hidden'}`}
          >
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="bg-deepBlue border border-neonBlue/20 overflow-hidden card-hover"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-neonBlue">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 text-xs rounded bg-neonBlue/10 text-neonBlue">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-neonBlue hover:underline flex items-center gap-1"
                  >
                    View Project <ExternalLink size={16} />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certificates Section */}
          <div 
            id="certificates-section" 
            className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 ${activeSection === 'certificates' ? 'block' : 'hidden'}`}
          >
            {certificates.map((cert, index) => (
              <Card 
                key={index} 
                className="bg-deepBlue border border-neonBlue/20 overflow-hidden card-hover"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-neonBlue">{cert.title}</h3>
                  <p className="text-gray-300 mb-1">Issuer: {cert.issuer}</p>
                  <p className="text-gray-400 mb-4">Date: {cert.date}</p>
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-neonBlue hover:underline flex items-center gap-1"
                  >
                    View Certificate <ExternalLink size={16} />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Tech Stack Section */}
          <div id="tech-stack-section" className={activeSection === 'tech-stack' ? 'block' : 'hidden'}>
            <TechStack items={techStack} />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-20">
        <div className="container mx-auto px-6" data-aos="fade-up">
          <h2 className="section-title">Get In Touch</h2>
          <div className="max-w-2xl mx-auto bg-deepBlue border border-neonBlue/20 rounded-lg p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-neonBlue">Contact Information</h3>
                <p className="text-gray-300 mb-6">Feel free to reach out to me for collaboration or any questions.</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-neonBlue/20 flex items-center justify-center">
                      <span className="text-neonBlue">📧</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <p className="text-neonBlue">subhamks@example.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-neonBlue/20 flex items-center justify-center">
                      <span className="text-neonBlue">📱</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Phone</p>
                      <p className="text-neonBlue">+91 9876543210</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-neonBlue/20 flex items-center justify-center">
                      <span className="text-neonBlue">📍</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Location</p>
                      <p className="text-neonBlue">Kolkata, India</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full p-3 rounded-lg bg-deepBlue border border-neonBlue/20 focus:border-neonBlue outline-none"
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full p-3 rounded-lg bg-deepBlue border border-neonBlue/20 focus:border-neonBlue outline-none"
                />
                <textarea 
                  placeholder="Your Message" 
                  rows={4}
                  className="w-full p-3 rounded-lg bg-deepBlue border border-neonBlue/20 focus:border-neonBlue outline-none resize-none"
                />
                <button className="w-full p-3 rounded-lg bg-blue-gradient hover:opacity-90 transition-all">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-deepBlue border-t border-neonBlue/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold text-neonBlue mb-4 md:mb-0">Subhs</div>
            <div className="text-gray-400">© 2025 Subham Kumar Shee. All rights reserved.</div>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="w-10 h-10 rounded-full bg-neonBlue/20 flex items-center justify-center hover:bg-neonBlue/40 transition-colors">
                <span className="text-neonBlue">📱</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-neonBlue/20 flex items-center justify-center hover:bg-neonBlue/40 transition-colors">
                <span className="text-neonBlue">💼</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-neonBlue/20 flex items-center justify-center hover:bg-neonBlue/40 transition-colors">
                <span className="text-neonBlue">📷</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
