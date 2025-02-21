
import { Award, Building, Handshake } from "lucide-react";
import { useState, useEffect } from "react";

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  delay 
}: { 
  icon: React.ComponentType<any>, 
  title: string, 
  description: string,
  delay: number
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={`transform transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="relative overflow-hidden rounded-xl bg-white/20 backdrop-blur-lg border border-white/10 p-8 shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
        <div className="flex items-center justify-center w-12 h-12 mb-6 rounded-full bg-accent/10">
          <Icon className="w-6 h-6 text-accent" />
        </div>
        <h3 className="mb-3 text-xl font-semibold text-secondary">{title}</h3>
        <p className="text-secondary/80 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const Index = () => {
  const services = [
    {
      icon: Building,
      title: "Business Infrastructure",
      description: "Comprehensive solutions for establishing and optimizing your business operations.",
    },
    {
      icon: Handshake,
      title: "Strategic Partnerships",
      description: "Foster valuable connections and collaborations to accelerate your growth.",
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Maintain the highest standards of excellence in all your business processes.",
    },
  ];

  return (
    <div className="min-h-screen bg-primary">
      <div className="container px-4 py-24 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-20 animate-fade-in">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-accent uppercase rounded-full bg-accent/10">
            Welcome to Poquillo
          </span>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-secondary sm:text-5xl">
            Elevate Your Business with Our Premium Services
          </h1>
          <p className="mx-auto text-lg text-secondary/80">
            We provide innovative solutions to help your business thrive in today's competitive landscape.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 md:gap-12">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
