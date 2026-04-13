import { Share2, Target, Palette, TrendingUp, Megaphone, Globe } from "lucide-react";

const services = [
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Strategic social media management that builds your brand community and drives engagement across all platforms.",
  },
  {
    icon: Target,
    title: "Meta Ads & PPC",
    description: "Data-driven ad campaigns on Facebook & Instagram that maximize ROI and reach your ideal customers.",
  },
  {
    icon: Palette,
    title: "Branding & Identity",
    description: "Complete brand identity design including logos, brand guidelines, and visual storytelling that stands out.",
  },
  {
    icon: TrendingUp,
    title: "SEO & Analytics",
    description: "Improve search rankings and track performance with comprehensive analytics and optimization strategies.",
  },
  {
    icon: Megaphone,
    title: "Content Creation",
    description: "Engaging content that tells your brand story — from graphics and reels to copywriting and campaigns.",
  },
  {
    icon: Globe,
    title: "Website Development",
    description: "Modern, responsive websites that convert visitors into customers with stunning design and fast performance.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">What We Do</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer comprehensive digital marketing solutions tailored to grow your business and strengthen your online presence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card p-8 rounded-2xl shadow-card hover:shadow-brand transition-all duration-300 hover:-translate-y-1 border border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-gradient-brand rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <service.icon className="text-primary-foreground" size={24} />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
