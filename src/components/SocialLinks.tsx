
import { Github, Linkedin } from 'lucide-react';

const SocialLinks = () => {
  return (
    <div className="flex gap-4 mt-6">
      <a 
        href="https://github.com/yourusername" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-neonBlue hover:text-lightBlue transition-colors"
      >
        <Github size={24} />
      </a>
      <a 
        href="https://linkedin.com/in/yourusername" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-neonBlue hover:text-lightBlue transition-colors"
      >
        <Linkedin size={24} />
      </a>
    </div>
  );
};

export default SocialLinks;
