
import { Card, CardContent } from "@/components/ui/card";

interface TechItem {
  name: string;
  icon: string;
}

interface TechStackProps {
  items: TechItem[];
}

const TechStack = ({ items }: TechStackProps) => {
  return (
    <div id="tech-stack" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
      {items.map((tech) => (
        <Card 
          key={tech.name} 
          className="p-6 rounded-lg bg-deepBlue border border-neonBlue/20 card-hover"
        >
          <CardContent className="p-0 flex flex-col items-center">
            <img src={tech.icon} alt={tech.name} className="w-16 h-16 mx-auto mb-4" />
            <p className="text-center text-neonBlue">{tech.name}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default TechStack;
