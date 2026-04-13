import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  features = [],
  delay = 0,
}) => {
  return (
    <div
      className="animate-fade-up bg-card border border-border rounded-xl p-8 hover-lift group"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center mb-4 group-hover:animate-pulse-glow transition-all">
        <Icon className="text-primary-foreground" size={24} />
      </div>
      
      <h3 className="font-heading text-xl font-bold text-foreground mb-3">{title}</h3>
      
      <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
      
      {features.length > 0 && (
        <ul className="space-y-2">
          {features.map((feature, idx) => (
            <li key={idx} className="text-muted-foreground text-sm flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
              {feature}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ServiceCard;
